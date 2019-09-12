import {
  dismissNotification,
  formSubmit,
  onChangeEmail,
  onChangePassword,
} from '../actions'
import { ActionTypes } from '../types'

describe('actions', () => {
  const spyCookieSetter = jest.fn()
  const spyDispatch = jest.fn()

  describe('dismissNotification', () => {
    it('should dispatch DISMISS_NOTIFICATION action', () => {
      dismissNotification(spyDispatch)()
      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.DISMISS_NOTIFICATION,
      })
    })
  })

  describe('formSubmit', () => {
    it('should submit state to api', async () => {
      jest.mock('axios')
      const mockAxios = require('axios')
      mockAxios.post = jest.fn(async () => Promise.resolve({}))

      const data = {}
      const mock_state = {
        data,
      }
      const preventDefault = jest.fn()

      await formSubmit(mock_state, spyDispatch, spyCookieSetter)({
        preventDefault,
      })

      expect(preventDefault).toHaveBeenCalled()

      expect(spyDispatch).toHaveBeenCalledWith({
        type: ActionTypes.SUBMIT_FORM,
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
