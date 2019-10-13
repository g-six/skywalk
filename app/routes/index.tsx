import Footer from '@components/Footer'
import Header from '@components/Header'
import { Page404Error } from '@pages/404Error'
import Console from '@pages/Console'
import { LoginPage } from '@pages/Login'
import HomePage from '@pages/Home'
import IconPage from '@pages/Icons'
import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'


const Routes = (
  <>
    <Header />

    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/" component={Console} />
      <Route exact path="/icons" component={IconPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/four-oh-four" component={Page404Error} />
      <Redirect to="/four-oh-four" push={false} />
    </Switch>

    <Footer />
  </>
)

export default Routes
