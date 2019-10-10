import Footer from '@components/Footer'
import Header from '@components/Header'
import { Page404Error } from '@pages/404Error'
import { HomePage } from '@pages/Home'
import { OurTeam } from '@pages/Team'
import { TalentSolutions } from '@pages/TalentSolutions'
import { TechSolutions } from '@pages/TechnologySolutions'
import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'

const Routes = (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/our-team" component={OurTeam} />
      <Route exact path="/talent-solutions" component={TalentSolutions} />
      <Route exact path="/technology-solutions" component={TechSolutions} />
      <Route exact path="/four-oh-four" component={Page404Error} />
      <Redirect to="/four-oh-four" push={false} />
    </Switch>
    <Footer />
  </>
)

export default Routes
