import mockAxios, { AxiosResponse } from 'axios'
import {
  dismissNotification,
  submitForm,
  onChangeEmail,
  onChangePassword,
} from '../actions'
import { ActionTypes } from '../types'

jest.mock('axios')
describe('actions', () => {
  const spyDispatch = jest.fn()

  describe('dismissNotification', () => {
    it('should dispatch DISMISS_NOTIFICATION action', () => {
      dismissNotification(spyDispatch)()
      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.DISMISS_NOTIFICATION,
      })
    })
  })

  describe('submitForm', () => {
    describe('valid', () => {
      const spyDispatch = jest.fn()
      const spyCookieContext = jest.fn()

      it('should submit form successfully', async () => {
        mockAxios.post = ((): Promise<AxiosResponse> => {
          const response = ({
            data: {},
            headers: {},
            status: 200,
            statusText: 'OK',
          } as unknown) as AxiosResponse
          return Promise.resolve(response)
        }) as any
        await submitForm(
          { data: {} },
          spyCookieContext,
          spyDispatch,
        )({
          preventDefault: jest.fn(),
        })
        expect(spyDispatch).toHaveBeenCalled()
        expect(spyCookieContext).toHaveBeenCalled()
      })
    })
    describe('invalid', () => {
      const spyDispatch = jest.fn()
      const spyCookieContext = jest.fn()

      it('should handle errors', async () => {
        mockAxios.post = ((): Promise<AxiosResponse> => {
          const results = ({
            response: {
              data: {
                error: 'test',
              },
            },
            headers: {},
            status: 403,
            statusText: 'Forbidden',
          } as unknown) as AxiosResponse
          return Promise.reject(results)
        }) as any
        try {
          await submitForm(
            { data: {} },
            spyCookieContext,
            spyDispatch,
          )({
            preventDefault: jest.fn(),
          })
        } catch (e) {
          console.log(e)
        }
        expect(spyDispatch).toHaveBeenCalled()
        expect(spyCookieContext).toHaveBeenCalledTimes(0)
      })
    })
  })

  describe('onChangeEmail', () => {
    it('should dispatch SET_EMAIL action', () => {
      onChangeEmail(spyDispatch)({ target: { value: 'aaaa' } })
      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.SET_EMAIL,
        value: 'aaaa',
      })
    })
  })

  describe('onChangePassword', () => {
    it('should dispatch SET_PASSWORD action', () => {
      onChangePassword(spyDispatch)({ target: { value: 'aaaa' } })
      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.SET_PASSWORD,
        value: 'aaaa',
      })
    })
  })
})
