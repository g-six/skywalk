import * as React from 'react'
import './many-things.scss'
import Checkmark from './checkmark-lg'
import Graph from './graph'
import Students from './students'
import Coding from './coding'

export const ManyThings: React.FunctionComponent = () => {
  return (
    <section id="ManyThings" className="talent-solutions">
      <div className="container many-things has-text-centered">
        <h3>Some of the many things we provide</h3>
        <p className="has-text-grey-light">
          Our specialized recruitment teams in our various operating markets are
          experts at recruiting for the following skill verticals
        </p>

        <div className="level things">
          <div className="level-item is-circle has-border-white-ter">
            <div className="has-background-primary is-circle thing-checked">
              <Checkmark />
            </div>
            <span>Talent Acquisition</span>
          </div>

          <div className="level-item has-text-centered">
            <div className="line has-background-grey-lighter" />
          </div>

          <div className="level-item is-circle has-border-white-ter">
            <div className="has-background-primary is-circle thing-checked">
              <Checkmark />
            </div>
            <span>Workforce Management</span>
          </div>

          <div className="level-item has-text-centered">
            <div className="line has-background-grey-lighter" />
          </div>

          <div className="level-item is-circle has-border-white-ter">
            <div className="has-background-primary is-circle thing-checked">
              <Checkmark />
            </div>
            <span>Workforce Utilities</span>
          </div>

          <div className="level-item has-text-centered">
            <div className="line has-background-grey-lighter" />
          </div>

          <div className="level-item is-circle has-border-white-ter">
            <div className="has-background-primary is-circle thing-checked">
              <Checkmark />
            </div>
            <span>Productivity Tools</span>
          </div>

          <div className="level-item has-text-centered">
            <div className="line has-background-grey-lighter" />
          </div>

          <div className="level-item is-circle has-border-white-ter">
            <div className="has-background-primary is-circle thing-checked">
              <Checkmark />
            </div>
            <span>Workforce Engagement</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="columns is-multiline is-centered tailor-legal">
          <div className="column is-full has-t ext-centered">
            <img
              className="image is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/team-min.jpeg"
              alt="Engineers at IdeaRobin be like"
            />
          </div>

          <div className="is-half column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <Graph />
            </div>
            <div>
              <h4>Tailor-fit</h4>
              <p className="has-text-grey-light">
                We offer talent solutions that are tailor-fit to your business
                requirements. So you can be sure every action we take adds more
                value to your needs.
              </p>
            </div>
          </div>

          <div className="is-half column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <Students />
            </div>
            <div>
              <h4>Quality Engagement</h4>
              <p className="has-text-grey-light">
                We believe quality employee experience equates to excellent
                results. That’s why we make sure your team is at their best and
                delivering quality without compromising time.
              </p>
            </div>
          </div>

          <div className="is-half column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <Coding />
            </div>
            <div>
              <h4>Workplace Management</h4>
              <p className="has-text-grey-light">
                Geared towards progress, we eliminate the cost of distractions
                by providing our developers with a quality of environment that
                enables them to focus and be more efficient, all while loving
                their job.
              </p>
            </div>
          </div>

          <div className="is-half column fig-paragraph">
            <div className="idearobin-icon has-background-primary is-circle">
              <Students />
            </div>
            <div>
              <h4>Legal Compliance</h4>
              <p className="has-text-grey-light">
                We ensure compliance in every aspect of your team&rsquo;s
                employee life cycle so you don&rsquo;t have to worry about the
                risks of hiring global talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManyThings
