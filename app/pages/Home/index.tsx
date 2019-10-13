import * as React from 'react'
import './styles.scss'

export const HomePage: React.FunctionComponent = () => {
  return (
    <section className="hero" id="HomePage">
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="title is-5">IdeaRobin - a registered AWS Partner</h1>
                <p className="subtitle is-7">
                  Building a scalable cloud solution requires a solid infrastructure
                  and we at IdeaRobin are excited to be part of the AWS Partner
                  Network to provide our customers with scalable and fault tolerant
                  systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
