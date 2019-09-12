import Axios from 'axios'
import { ActionTypes } from './types'

export const dismissNotification = dispatch => () =>
  dispatch({ type: ActionTypes.DISMISS_NOTIFICATION })

// Form submit
export const formSubmit = (
  state,
  dispatch,
  cookieSetter: (key: string, value: string, expires?: number) => void,
) => async e => {
  e.preventDefault()

  dispatch({ type: ActionTypes.SUBMIT_FORM })

  await Axios.post(
    'https://42ocyycm27.execute-api.ap-southeast-1.amazonaws.com/dev/auth/login',
    state.data,
  )
    .then(response => {
      cookieSetter('kasl-key', response.headers['kasl-key'])

      dispatch({ type: ActionTypes.RESPONSE_200 })
    })
    .catch(api_error => {
      const { error } = api_error.response.data
      dispatch({ type: ActionTypes.FORM_ERROR, error })
    })
}

// E-mail input change
export const onChangeEmail = dispatch => e => {
  dispatch({ type: ActionTypes.SET_EMAIL, value: e.target.value })
}

// Password input change
export const onChangePassword = dispatch => e => {
  dispatch({ type: ActionTypes.SET_PASSWORD, value: e.target.value })
}
