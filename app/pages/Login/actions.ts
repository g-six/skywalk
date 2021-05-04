import { postApi } from '@api'
import { ActionTypes } from './types'

export const dismissNotification = (dispatch) => () => {
  dispatch({ type: ActionTypes.DISMISS_NOTIFICATION })
}

// API response handler
export const handleApiResponse = (response, callbacks) => {
  if (response.results.error || response.results.errors) {
    callbacks.dispatch({ type: ActionTypes.API_ERROR, ...response.results })
    return
  }

  callbacks.setCookieContext('kasl-key', response.headers['kasl-key'])
  callbacks.dispatch({
    type: ActionTypes.RESPONSE_200,
    ...response.results,
  })
}

export const submitForm = (state, setCookieContext, dispatch) => async (e) => {
  e.preventDefault()
  dispatch({ type: ActionTypes.SUBMIT_FORM })

  const { headers, results } = await postApi('auth/login', state.data)
  handleApiResponse({ results, headers }, { setCookieContext, dispatch })
}

// E-mail input change
export const onChangeEmail = (dispatch) => (e) => {
  dispatch({ type: ActionTypes.SET_EMAIL, value: e.target.value })
}

// Password input change
export const onChangePassword = (dispatch) => (e) => {
  dispatch({ type: ActionTypes.SET_PASSWORD, value: e.target.value })
}
