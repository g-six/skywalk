import * as React from 'react'
import { Link } from 'react-router-dom'
import Checkmark from './checkmark'

export const Services: React.FunctionComponent = () => (
  <section id="Services" className="talent-solutions">
    <div className="container">
      <div className="offers columns is-multiline is-centered ">
        <div className="is-half column">
          <div className="box">
            <h4>Employment &amp; Payroll Services</h4>
            <div>
              <p className="has-text-grey-light">
                Through our local entities in 6 countries, we are able to
                legally employ your employees, process payroll and statutory
                contributions
              </p>

              <Link to="/ukraine/1">
                <i className="icon right-arrow" />{' '}
                <span>Download our Info &amp; Pricing Sheet</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="is-half column">
          <div className="box">
            <h4>Build Your Tech Team</h4>
            <div>
              <p className="has-text-grey-light">
                We help you to build your software development team, providing
                the entire value chain from recruitment to competency assessment
                and workplace management.
              </p>

              <Link to="/ukraine/1">
                <i className="icon right-arrow" />{' '}
                <span>Download our Info &amp; Pricing Sheet</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="is-half column">
          <div className="box">
            <h4>Specialized Recruitment Services</h4>
            <div>
              <p className="has-text-grey-light">
                Our specialized recruitment teams in our various operating
                markets are experts at recruiting for the following skill
                verticals
              </p>

              <ul className="has-text-grey-light split-list">
                <li>
                  <Checkmark /> Software developers
                </li>

                <li>
                  <Checkmark /> Tech Support
                </li>

                <li>
                  <Checkmark /> Project Managers
                </li>

                <li>
                  <Checkmark /> Community Managers
                </li>

                <li>
                  <Checkmark /> Business Development
                </li>

                <li>
                  <Checkmark /> Sales &amp; Lead Generation
                </li>
              </ul>

              <Link to="/ukraine/1">
                <i className="icon right-arrow" />{' '}
                <span>Download our Info &amp; Pricing Sheet</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="is-half column">
          <div className="box">
            <h4>Incorporation Services</h4>
            <div>
              <p className="has-text-grey-light">
                With our operating presence in 7 markets, we help you navigate
                the incorporation process with 100% transparency and ease of
                mind. Currently offering this service for Indonesia and Vietnam
                only.
              </p>

              <Link to="/ukraine/1">
                <i className="icon right-arrow" />{' '}
                <span>Contact us for more details</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
