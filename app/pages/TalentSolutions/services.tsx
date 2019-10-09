import * as React from 'react'
import { Link } from 'react-router-dom'

export const Services: React.FunctionComponent = () => (<section id="Services" className="talent-solutions">
  <div className="container">
    <div className="columns is-multiline">
      <div className="column has-text-centered has-text-grey-dark">
        <h2>Get matched with a job you love</h2>
        <p className="has-text-grey-light">
          Our clients are more successful because they
          leverage talent acoss the world to deliver their goals.
        </p>
      </div>
    </div>
  </div>

  <div className="container offers">
    <div className="box">
      <h4>Employment &amp; Payroll Services</h4>
      <div>
        <p>
          Through our local entities in 6 countries, we are able
          to legally employ your employees, process payroll and
          statutory contributions
        </p>

        <Link to="/ukraine/1">
          <i className="icon right-arrow" /> <span>Download our Info &amp; Pricing Sheet</span>
        </Link>
      </div>
    </div>

    <div className="box">
      <h4>Build Your Tech Team</h4>
      <div>
        <p>
          We help you to build your software development team,
          providing the entire value chain from recruitment to
          competency assessment and workplace management.
        </p>

        <Link to="/ukraine/1">
          <i className="icon right-arrow" /> <span>Download our Info &amp; Pricing Sheet</span>
        </Link>
      </div>
    </div>

    <div className="box">
      <h4>Specialized Recruitment Services</h4>
      <div>
        <p>
          Our specialized recruitment teams in our various operating
          markets are experts at recruiting for the following skill
          verticals
        </p>

        <Link to="/ukraine/1">
          <i className="icon right-arrow" /> <span>Download our Info &amp; Pricing Sheet</span>
        </Link>
      </div>
    </div>

    <div className="box">
      <h4>Incorporation Services</h4>
      <div>
        <p>With our operating presence in 7 markets, we help you
          navigate the incorporation process with 100% transparency
          and ease of mind. Currently offering this service for
          Indonesia and Vietnam only.
        </p>

        <Link to="/ukraine/1">
          <i className="icon right-arrow" /> <span>Contact us for more details</span>
        </Link>
      </div>
    </div>
  </div>

  <div className="has-text-centered apply-now">
    <a className="button is-large is-primary" href="mailto:keith@wonderlabs.io">
      <span>Apply now</span>
    </a>
  </div>
</section>)

export default Services