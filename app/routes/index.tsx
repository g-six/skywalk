import Footer from '@components/Footer'
import Header from '@components/Header'
import { Page404Error } from '@pages/404Error'
import { HomePage } from '@pages/Home'
import { LoginPage } from '@pages/Login'
import { TokensPage } from '@pages/Tokens'
import * as React from 'react'
import { Route, Switch } from 'react-router'

const Routes = (
  <>
    <Header />

    <div className="container" id="page">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/tokens" component={TokensPage} />

        <Route component={Page404Error} status={404} />
      </Switch>
    </div>

    <Footer />
  </>
)

export default Routes
