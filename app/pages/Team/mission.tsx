import * as React from 'react'
import './mission.scss'

export const Mission: React.FunctionComponent = () => {
  return (
    <section className="our-team">
      <section id="Mission" className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8 has-text-centered has-text-white">
                <h3>Our Mission</h3>
                <blockquote>
                  To make doing global business
                  <br />
                  incredibly easy
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Mission
