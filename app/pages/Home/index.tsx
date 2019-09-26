import * as React from 'react'
import './styles.scss'

export const HomePage: React.FunctionComponent = () => {
  return (
    <section className="section is-fullheight" id="HomePage">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <h1 className="title is-3">IdeaRobin - a registered AWS Partner</h1>
            <p className="subtitle is-5">
              Building a scalable cloud solution requires a solid infrastructure
              and we at IdeaRobin are excited to be part of the AWS Partner
              Network to provide our customers with scalable and fault tolerant
              systems.
            </p>
          </div>
          <div className="column">
            <div className="is-centered">G was here</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
