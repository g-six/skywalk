import AxiosMock from 'axios'
import {
  copyToClipboard,
  createToken,
  dismissNotification,
  formSubmit,
  onChangeFilter,
  retrieveAndCopySecret,
  retrieveSecret,
} from '../actions'
import { ActionTypes } from '../types'

interface MockResponse {
  data: {}
}

document.cookie = 'kasl-key: asdasdasd; '
jest.mock('axios')

const response: MockResponse = {
  data: {},
}

const getMock = jest.fn(
  async (url): Promise<any> => {
    // Simulate error if query string contains invalid params
    if (url.indexOf('client_id=hello') > 0) {
      return Promise.reject({
        response: {
          data: {
            error: 'hello',
          },
        },
      })
    }
    return Promise.resolve(response)
  },
)

describe('actions', () => {
  const spyDispatch = jest.fn()

  describe('copyToClipboard', () => {
    const spyCreateElement = jest.spyOn(document, 'createElement')
    const spyAppendChild = jest.spyOn(document.body, 'appendChild')
    const spyDispatch = jest.fn()

    describe('successful', () => {
      const spyExecCommand = jest.fn(() => true)
      document.execCommand = spyExecCommand

      copyToClipboard('test', spyDispatch)()

      it('should create textarea', () => {
        expect(spyCreateElement).toHaveBeenCalledWith('textarea')
      })
      it('should append textare to body', () => {
        expect(spyAppendChild).toHaveBeenCalled()
      })
      it('should copy textarea value', () => {
        expect(spyExecCommand).toHaveBeenCalledWith('copy')
      })
    })

    describe('unsuccessful', () => {
      const spyExecCommand = jest.fn(() => false)
      document.execCommand = spyExecCommand
      spyDispatch.mockReset()

      copyToClipboard('test', spyDispatch)()

      it('should create textarea', () => {
        expect(spyDispatch).toHaveBeenCalledTimes(0)
      })
    })

    describe('fail', () => {
      const spyExecCommand = jest.fn(() => {
        throw 'error'
      })
      document.execCommand = spyExecCommand

      try {
        copyToClipboard('test', spyDispatch)()
      } catch (e) {
        expect(e).toEqual(e)
      }
    })
  })

  describe('createToken', () => {
    it('should set dispatch RECORD_CREATED', async () => {
      const response = {
        data: {
          record: {
            id: 1,
          },
        },
      }
      AxiosMock.post = jest.fn(
        async (): Promise<any> => {
          return Promise.resolve(response)
        },
      )

      await createToken(spyDispatch)({ preventDefault: jest.fn() })

      expect(spyDispatch).toHaveBeenLastCalledWith({
        type: ActionTypes.RECORD_CREATED,
        record: response.data.record,
      })
    })

    it('should set dispatch FORM_ERROR on error', async () => {
      const response = {
        data: {
          error: 'test',
        },
      }
      AxiosMock.post = jest.fn(
        async (): Promise<any> => {
          return Promise.reject({ response })
        },
      )

      await createToken(spyDispatch)({ preventDefault: jest.fn() })

      expect(spyDispatch).toHaveBeenLastCalledWith({
        type: ActionTypes.FORM_ERROR,
        error: response.data.error,
      })
    })
  })

  describe('dismissNotification', () => {
    beforeEach(() => {
      AxiosMock.get = getMock
    })
    it('should dispatch DISMISS_NOTIFICATION action', () => {
      dismissNotification(spyDispatch)()
      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.DISMISS_NOTIFICATION,
      })
    })
  })

  describe('formSubmit', () => {
    beforeEach(() => {
      AxiosMock.get = getMock
    })
    it('should submit list API request', async () => {
      const filters = {}
      const mock_state = {
        filters,
      }
      const preventDefault = jest.fn()

      try {
        await formSubmit(mock_state, spyDispatch)({
          preventDefault,
        })
      } catch (e) {
        console.log(e)
      }

      expect(preventDefault).toHaveBeenCalled()

      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.SUBMIT_FORM,
      })
    })

    it('should submit list API request (filtered)', async () => {
      const filters = {
        client_id: 'asd',
      }
      const mock_state = {
        filters,
      }
      const preventDefault = jest.fn()

      try {
        await formSubmit(mock_state, spyDispatch)({
          preventDefault,
        })
      } catch (e) {
        console.log(e)
      }

      expect(preventDefault).toHaveBeenCalled()

      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.SUBMIT_FORM,
      })
    })

    it('should handle api errors', async () => {
      const filters = {
        client_id: 'hello',
      }
      const mock_state = {
        filters,
      }
      const preventDefault = jest.fn()

      await formSubmit(mock_state, spyDispatch)({
        preventDefault,
      })

      expect(preventDefault).toHaveBeenCalled()

      expect(spyDispatch).toHaveBeenLastCalledWith({
        type: ActionTypes.FORM_ERROR,
        error: filters.client_id,
      })
    })
  })

  describe('retrieveSecret', () => {
    it('should set retrieve record', async () => {
      const response = {
        data: {
          record: {
            client_id: 'asd',
          },
        },
      }

      AxiosMock.get = jest.fn(
        async (): Promise<any> => {
          return Promise.resolve(response)
        },
      )

      await retrieveSecret('asd', 0, spyDispatch)({ preventDefault: jest.fn() })

      expect(spyDispatch).toHaveBeenLastCalledWith({
        type: ActionTypes.RECORD_RETRIEVED,
        record: response.data.record,
        idx: 0,
      })
    })

    it('should throw error on xhr failure', async () => {
      const error = 'some api error'
      AxiosMock.get = jest.fn(
        async (): Promise<any> => {
          return Promise.reject({
            response: {
              data: {
                error,
              },
            },
          })
        },
      )

      try {
        await retrieveSecret('asd', 0, spyDispatch)({
          preventDefault: jest.fn(),
        })
      } catch (e) {
        expect(spyDispatch).toHaveBeenLastCalledWith({
          type: ActionTypes.FORM_ERROR,
          error,
        })
      }
    })
  })

  describe('retrieveAndCopySecret', () => {
    afterAll(() => {
      AxiosMock.get = getMock
    })
    it('should copy to clipboard on success', async () => {
      const record = {
        client_secret: 'asdasdasd',
      }
      AxiosMock.get = jest.fn(
        async (): Promise<any> => {
          return Promise.resolve({
            data: {
              record,
            },
          })
        },
      )

      await retrieveAndCopySecret('asd', 0, spyDispatch)({
        preventDefault: jest.fn(),
      })

      expect(spyDispatch).toHaveBeenLastCalledWith({
        type: ActionTypes.SUBMIT_FORM,
      })
    })

    it('should throw error on xhr failure', async () => {
      const error = 'some api error'
      AxiosMock.get = jest.fn(
        async (): Promise<any> => {
          return Promise.reject({
            response: {
              data: {
                error,
              },
            },
          })
        },
      )

      try {
        await retrieveAndCopySecret('asd', 0, spyDispatch)({
          preventDefault: jest.fn(),
        })
      } catch (e) {
        expect(spyDispatch).toHaveBeenLastCalledWith({
          type: ActionTypes.FORM_ERROR,
          error,
        })
      }
    })
  })

  describe('onChangeFilter', () => {
    it('should dispatch SET_FILTER', () => {
      const spyDispatch = jest.fn()
      const evt = {
        target: {
          id: 'client_id',
          value: 'aaa',
        },
      }
      onChangeFilter(spyDispatch)(evt)

      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.SET_FILTER,
        key: evt.target.id,
        value: evt.target.value,
      })
    })
  })
})
