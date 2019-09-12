import { omit } from 'lodash'
import { AnyAction } from 'redux'
import { ActionTypes, State } from './types'

export const initial_state: State = {
  data: {
    records: [],
  },
  filters: {},
  error: '',
  loading: false,
  message: '',
  alert_timeout: 0,
}

export const reducer = (state = initial_state, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.COPIED:
      return {
        ...state,
        loading: false,
        message: 'tokens.copied',
        alert_timeout: 5,
      }
    case ActionTypes.DISMISS_NOTIFICATION:
      return {
        ...state,
        message: '',
        alert_timeout: 0,
      }
    case ActionTypes.SUBMIT_FORM:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.FORM_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case ActionTypes.RECORD_RETRIEVED:
      const updated_element = state.data.records
      updated_element[action.idx].client_secret = action.record.client_secret
      return {
        ...state,
        data: {
          ...state.data,
          record: action.record,
          records: updated_element,
        },
        error: '',
        loading: false,
      }
    case ActionTypes.RECORD_CREATED:
      const records = state.data.records
      records.push(action.record)
      return {
        ...state,
        data: {
          ...state.data,
          records,
        },
        error: '',
        loading: false,
      }
    case ActionTypes.RESPONSE_200:
      return {
        ...state,
        data: {
          ...state.data,
          records: action.records,
        },
        error: '',
        loading: false,
      }
    case ActionTypes.SET_FILTER:
      if (!action.value) {
        return {
          ...state,
          filters: {
            ...omit(state.filters, [action.key]),
          },
        }
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.key]: action.value,
        },
      }
    default:
      return state
  }
}
