import * as React from 'react'
import './specializations.scss'
import CirclePeople from './circle-people'
import Factory from './factory'
import Fleet from './fleet'
import Gaming from './gaming'
import Grads from './grads'
import PersonAvatar from './person-avatar'

export const Specializations: React.FunctionComponent = () => {
  return (
    <section id="Specializations" className="tech-solutions our-specializations">
      <div className="container specializations has-text-centered">
        <h2>Our Specializations</h2>
      </div>

      <div className="container">
        <div className="columns is-multiline is-centered boxes">
          <div className="is-one-third column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <PersonAvatar />
            </div>
            <div>
              <p className="has-text-grey-light">
                Civic Engagement <br />Solutions
              </p>
            </div>
          </div>

          <div className="is-one-third column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <Fleet />
            </div>
            <div>
              <p className="has-text-grey-light">
                Fleet Management <br />Solutions
              </p>
            </div>
          </div>

          <div className="is-one-third column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <Factory />
            </div>
            <div>
              <p className="has-text-grey-light">
                Enterprise Management <br />Solutions
              </p>
            </div>
          </div>

          <div className="is-one-third column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <Gaming />
            </div>
            <div>
              <p className="has-text-grey-light">
                Gaming Applications
              </p>
            </div>
          </div>

          <div className="is-one-third column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <Grads />
            </div>
            <div>
              <p className="has-text-grey-light">
                Education Management <br />Solutions
              </p>
            </div>
          </div>

          <div className="is-one-third column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <CirclePeople />
            </div>
            <div>
              <p className="has-text-grey-light">
                Non-Profit Management <br />Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specializations
