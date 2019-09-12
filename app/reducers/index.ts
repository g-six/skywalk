import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { combineReducers, Reducer } from 'redux'

export interface State {
  router?: RouterState
}

export const rootReducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history) as Reducer,
  })

export default rootReducer
