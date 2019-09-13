import mockAxios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import {
  loadContents,
  setInputValue,
  submitForm,
  loadPage,
  setFilter,
  updateRecord,
} from '../actions'
import { ActionTypes } from '../types'

jest.mock('axios')
describe('actions', () => {
  describe('loadContents', () => {
    it('should retrieve contents via api', async () => {
      const spyDispatch = jest.fn()
      mockAxios.get = ((
        url: string,
        config?: AxiosRequestConfig,
      ): Promise<AxiosResponse> => {
        const response = ({
          data: {},
          status: 200,
          statusText: 'OK',
        } as unknown) as AxiosResponse
        return Promise.resolve(response)
      }) as any

      const data = {}
      const mock_state = {
        data,
      }
      const preventDefault = jest.fn()

      await loadContents(mock_state, spyDispatch)({
        preventDefault,
      })

      expect(preventDefault).toHaveBeenCalled()

      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.LIST_RECORDS,
      })
    })

    it('should result in a handled error on api error', async () => {
      const spyDispatch = jest.fn()
      mockAxios.get = ((
        url: string,
        config?: AxiosRequestConfig,
      ): Promise<AxiosResponse> => {
        return Promise.reject({
          response: {
            data: {
              error: 'test',
            },
          },
          status: 400,
          statusText: 'Invalid request',
        })
      }) as any

      const data = {}
      const mock_state = {
        data,
      }
      const preventDefault = jest.fn()

      try {
        await loadContents(mock_state, spyDispatch)({
          preventDefault,
        })
      } catch (e) {
        expect(spyDispatch).toHaveBeenCalledWith({
          type: ActionTypes.API_ERROR,
        })
      }
    })
  })

  describe('loadPage', () => {
    it('should load page content', async () => {
      const spyDispatch = jest.fn()
      mockAxios.get = ((
        url: string,
        config?: AxiosRequestConfig,
      ): Promise<AxiosResponse> => {
        const response = ({
          data: {},
          status: 200,
          statusText: 'OK',
        } as unknown) as AxiosResponse
        return Promise.resolve(response)
      }) as any

      await loadPage('sample-page-slug', spyDispatch)

      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.RESPONSE_200,
      })
    })
  })

  describe('setFilter', () => {
    it('should load page content', async () => {
      const spyDispatch = jest.fn()
      const filter = {
        key: 'title',
        value: 'sample',
      }

      await setFilter(filter, {}, spyDispatch)

      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.SET_FILTER,
        ...filter,
      })
    })
  })

  describe('setInputValue', () => {
    const spyDispatch = jest.fn()

    it('should set input value', async () => {
      setInputValue(spyDispatch)({
        preventDefault: jest.fn(),
        target: {
          name: 'title',
          value: 'Just a test',
        },
      })
      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.SET_INPUT,
        name: 'title',
        value: 'Just a test',
      })
    })
  })

  describe('submitForm', () => {
    const spyDispatch = jest.fn()
    mockAxios.post = ((url: string, spyDispatch): Promise<AxiosResponse> => {
      const response = ({
        data: {},
        status: 200,
        statusText: 'OK',
      } as unknown) as AxiosResponse
      return Promise.resolve(response)
    }) as any

    it('should submit form successfully', async () => {
      await submitForm({ data: {} }, spyDispatch)({ preventDefault: jest.fn() })
      expect(spyDispatch).toHaveBeenCalled()
    })
  })

  describe('updateRecord', () => {
    const spyDispatch = jest.fn()
    mockAxios.put = ((url: string, spyDispatch): Promise<AxiosResponse> => {
      const response = ({
        data: {},
        status: 200,
        statusText: 'OK',
      } as unknown) as AxiosResponse
      return Promise.resolve(response)
    }) as any

    it('should submit form successfully', async () => {
      await updateRecord({ data: { record: {} } }, spyDispatch)({
        preventDefault: jest.fn(),
      })
      expect(spyDispatch).toHaveBeenCalled()
    })
  })
})
