import * as React from 'react'
import Checkmark from './checkmark'
import './services.scss'

export const Services: React.FunctionComponent = () => (
  <section id="Services" className="tech-solutions">
    <div className="container has-text-centered">

      <h2>Technology Services</h2>

      <div className="services columns is-multiline is-centered ">
        <div className="box is-half column">
          <h4>Consulting Services</h4>
          <div className="columns">
            <div className="column is-half">
              <ul className="has-text-grey-light">
                <li><Checkmark /> Business Process Consulting</li>

                <li><Checkmark /> Requirements Consulting</li>

                <li><Checkmark /> User Interface Design</li>

                <li><Checkmark /> Project Management</li>

                <li><Checkmark /> Project Design</li>
              </ul>
            </div>
            <div className="column is-half">
              <ul className="has-text-grey-light">
                <li><Checkmark /> Quality Assurance</li>

                <li><Checkmark /> Software Development</li>

                <li><Checkmark /> Delivery Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="box is-half column">
          <h4>Technologies we employ</h4>
          <div className="columns">
            <div className="column is-half">
              <ul className="has-text-grey-light">
                <li><Checkmark /> Android/iOS</li>

                <li><Checkmark /> Mobile - React Native</li>

                <li><Checkmark /> Data Engineering</li>

                <li><Checkmark /> Full Stack Javascript</li>

                <li><Checkmark /> Lemp Stack</li>
              </ul>
            </div>
            <div className="column is-half">
              <ul className="has-text-grey-light">
                <li><Checkmark /> PHP Developers</li>

                <li><Checkmark /> Python, Django</li>

                <li><Checkmark /> PostgreSQL Stack</li>

                <li>
                  <Checkmark /> Python/Django/Golang <br />
                  Ruby on Rails Stack
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
