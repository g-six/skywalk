import { omit } from 'lodash'
import { AnyAction } from 'redux'
import { ActionTypes, State } from './types'

export const initial_state: State = {
  data: {},
  filters: {},
  error: '',
  errors: {},
  loading: true,
  message: '',
}

export const reducer = (state = initial_state, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.DISMISS_NOTIFICATION:
      return {
        ...state,
        message: '',
        alert_timeout: 0,
      }
    case ActionTypes.LIST_RECORDS:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.LOAD_RECORD:
      return {
        ...state,
        data: {
          ...state.data,
          record: {
            slug: action.slug,
          },
        },
        loading: true,
      }
    case ActionTypes.API_ERROR:
      return {
        ...state,
        error: action.error || action.message,
        errors: action.errors,
        loading: false,
      }
    case ActionTypes.RESPONSE_200:
      return {
        ...state,
        data: {
          ...state.data,
          user: action.user,
          record: action.record,
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
    case ActionTypes.SET_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          record: {
            ...state.data.record,
            [action.name]: action.value,
          },
        },
        errors: {
          ...state.errors,
          [action.name]: undefined,
        },
      }
    case ActionTypes.SUBMIT_FORM:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
