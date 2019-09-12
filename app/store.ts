import createRootReducer, { State } from '@reducers'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'

export const history = createBrowserHistory()

const default_state: State = {}
export default function configureStore(preloaded_state: State = default_state) {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    createRootReducer(history),
    preloaded_state,
    composeEnhancer(applyMiddleware(routerMiddleware(history))),
  )

  // Hot reloading, no need test
  /* istanbul ignore if */
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }
  return store
}
