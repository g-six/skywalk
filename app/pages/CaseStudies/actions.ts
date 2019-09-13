import { getApi, postApi, putApi } from '@api'
import { ActionTypes } from './types'

// API response handler
export const handleApiResponse = (results, dispatch) => {
  if (results.error || results.errors) {
    dispatch({ type: ActionTypes.API_ERROR, ...results })
    return
  }

  dispatch({
    type: ActionTypes.RESPONSE_200,
    ...results,
  })
}

// Filter records
export const setFilter = async ({ key, value }, state, dispatch) => {
  dispatch({ type: ActionTypes.SET_FILTER, key, value })
  const filters = {
    ...state.filters,
    [key]: value,
  }

  const { results } = await getApi('pages', filters)
  handleApiResponse(results, dispatch)
}

export const setInputValue = dispatch => e => {
  const { name, value } = e.target
  dispatch({ type: ActionTypes.SET_INPUT, name, value })
}

// Create a new case study
export const submitForm = (state, dispatch) => async e => {
  e.preventDefault()

  const record = state.data.record || {}
  dispatch({ type: ActionTypes.SUBMIT_FORM, record })

  const { results } = await postApi('pages', record)
  handleApiResponse(results, dispatch)
}

// Create a new case study
export const updateRecord = (state, dispatch) => async e => {
  e.preventDefault()

  const record = {
    ...state.data.record,
    category: 'case-studies',
  }

  dispatch({ type: ActionTypes.SUBMIT_FORM, record })

  const { results } = await putApi(`pages/${record.id}`, record)
  handleApiResponse(results, dispatch)
}

// Load contents
export const loadContents = (state, dispatch) => async e => {
  e.preventDefault()

  dispatch({ type: ActionTypes.LIST_RECORDS })

  const { results } = await getApi('pages', state.filters)
  handleApiResponse(results, dispatch)
}

// Load page
export const loadPage = async (id, dispatch) => {
  dispatch({ type: ActionTypes.LOAD_RECORD, id })

  const { results } = await getApi(`pages/${id}`)
  handleApiResponse(results, dispatch)
}
