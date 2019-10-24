import * as React from 'react'
import GlobalFootprint from './global-footprint'
import TalentSolutions from './talent-solutions'
import TechhnologySolutions from './technology-solutions'
import TrustUs from './trust-us'
import './styles.scss'
import GetMatched from './get-matched'

export const HomePage: React.FunctionComponent = props => {
  return (
    <>
      <section className="hero is-dark" id="HomePage">
        <div className="hero-body">
          <div className="container">
            <div className="text-content">
              <div>
                <h4 className="subtitle">
                  <a href="#GetMatched" className="has-text-grey-light">
                    <i className="icon star" /> For Talent, Let us help you find
                    a job you love.
                  </a>
                </h4>
                <h1 className="title">
                  We help you <br className="is-hidden-touch" />
                  <em>access</em> the world.
                </h1>
                <p>
                  At Wonder, we build and manage
                  <br />
                  your software development teams
                  <br />
                  around the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Solutions" className="container">
        <div>
          <TalentSolutions />
          <TechhnologySolutions />
        </div>
      </section>

      <GlobalFootprint />

      <TrustUs />

      <GetMatched />
    </>
  )
}

export default HomePage
