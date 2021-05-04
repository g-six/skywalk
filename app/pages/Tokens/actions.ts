import { getApi } from '@api'
import { getCookie } from '@utils/cookie'
import Axios from 'axios'
import { ActionTypes } from './types'

export const dismissNotification = (dispatch) => () =>
  dispatch({ type: ActionTypes.DISMISS_NOTIFICATION })

export const copyToClipboard = (secret, dispatch) => () => {
  const textArea = document.createElement('textarea')
  textArea.value = secret
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    if (successful) {
      dispatch({ type: ActionTypes.COPIED })
    }
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err)
  }

  document.body.removeChild(textArea)
}

// Create token
export const createToken = (dispatch) => async (e) => {
  e.preventDefault()

  dispatch({ type: ActionTypes.SUBMIT_FORM })

  const options = {
    headers: {
      'kasl-key': getCookie('kasl-key'),
    },
  }

  await Axios.post(
    `https://42ocyycm27.execute-api.ap-southeast-1.amazonaws.com/dev/tokens`,
    undefined,
    options,
  )
    .then((response) => {
      dispatch({
        type: ActionTypes.RECORD_CREATED,
        record: response.data.record,
      })
    })
    .catch((api_error) => {
      const { error } = api_error.response.data
      dispatch({ type: ActionTypes.FORM_ERROR, error })
    })
}

// Form submit
export const formSubmit = (state, dispatch) => async (e) => {
  e.preventDefault()

  dispatch({ type: ActionTypes.SUBMIT_FORM })

  const { results } = await getApi('tokens', state.filters)

  if (results.error) {
    dispatch({ type: ActionTypes.FORM_ERROR, error: results.error })
    return
  }
  dispatch({
    type: ActionTypes.RESPONSE_200,
    ...results,
  })
}

// Retrieve secret
export const retrieveSecret = (client_id, idx, dispatch) => async (e) => {
  e.preventDefault()

  dispatch({ type: ActionTypes.SUBMIT_FORM })

  const { results } = await getApi(`tokens/${client_id}`)

  if (results.error) {
    dispatch({ type: ActionTypes.FORM_ERROR, error: results.error })
    return
  }

  dispatch({
    type: ActionTypes.RECORD_RETRIEVED,
    idx,
    record: results.record,
  })
}

// Retrieve secret
export const retrieveAndCopySecret = (client_id, idx, dispatch) => async (
  e,
) => {
  e.preventDefault()

  dispatch({ type: ActionTypes.SUBMIT_FORM })

  const { results } = await getApi(`tokens/${client_id}`)

  if (results.error || !results.record) {
    dispatch({ type: ActionTypes.FORM_ERROR, error: results.error })
    return
  }

  const { client_secret } = results.record
  copyToClipboard(client_secret, dispatch)()
}

// E-mail input change
export const onChangeFilter = (dispatch) => (e) => {
  dispatch({
    type: ActionTypes.SET_FILTER,
    key: e.target.id,
    value: e.target.value,
  })
}
