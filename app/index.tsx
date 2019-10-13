import I18nContextProvider from '@components/I18nContextProvider'
import * as React from 'react'
import { render as ReactDOMRender } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore, { history } from './store'

import './styles'
import App from './App'
import { CookieStoreProvider } from '@providers/cookie-context'

const store = configureStore()
const render = () => {
  ReactDOMRender(
    <AppContainer>
      <Provider store={store}>
        <CookieStoreProvider>
          <I18nContextProvider>
            <App history={history} />
          </I18nContextProvider>
        </CookieStoreProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })
}
