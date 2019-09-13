import { ActionType, ActionTypes, State } from './types'

export const initial_state: State = {
  data: {
    email: '',
    password: '',
  },
  error: '',
  loading: false,
}

export const reducer = (state = initial_state, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_EMAIL:
      return {
        ...state,
        data: {
          ...state.data,
          email: action.value,
        },
      }
    case ActionTypes.SET_PASSWORD:
      return {
        ...state,
        data: {
          ...state.data,
          password: action.value,
        },
      }
    case ActionTypes.SUBMIT_FORM:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.API_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case ActionTypes.RESPONSE_200:
    default:
      return {
        ...state,
        error: '',
        loading: false,
      }
  }
}
