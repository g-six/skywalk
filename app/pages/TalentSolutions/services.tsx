import * as React from 'react'
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

              <a
                href="https://wonderlabs.activehosted.com/f/1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon right-arrow" />{' '}
                <span>Download our Info &amp; Pricing Sheet</span>
              </a>
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

              <a
                href="https://wonderlabs.activehosted.com/f/3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon right-arrow" />{' '}
                <span>Download our Info &amp; Pricing Sheet</span>
              </a>
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

              <a href="mailto:keith@wonderlabs.io?subject=RE%3A%20Inquiry%20on%20recruitment%20services">
                <i className="icon right-arrow" />{' '}
                <span>Contact us for more details</span>
              </a>
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

              <a href="mailto:keith@wonderlabs.io?subject=RE%3A%20Inquiry%20on%20incorporation%20services">
                <i className="icon right-arrow" />{' '}
                <span>Contact us for more details</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
