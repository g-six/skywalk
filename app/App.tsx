import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import * as React from 'react'
import routes from './routes'

export interface AppProps {
  history: History
}

export const App: React.FC<AppProps> = ({ history }) => {
  return <ConnectedRouter history={history}>{routes}</ConnectedRouter>
}

export default App
