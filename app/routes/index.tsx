import Footer from '@components/Footer'
import Header from '@components/Header'
import { Page404Error } from '@pages/404Error'
import { HomePage } from '@pages/Home'
import { LoginPage } from '@pages/Login'
import { TokensPage } from '@pages/Tokens'
import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'

const Routes = (
  <>
    <Header />

    <div className="container" id="page">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/tokens" component={TokensPage} />
        <Route exact path="/four-oh-four" component={Page404Error} />
        <Redirect to="/four-oh-four" push={false} />
      </Switch>
    </div>

    <Footer />
  </>
)

export default Routes
