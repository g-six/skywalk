import * as React from 'react'
import { Link } from 'react-router-dom'

export const GetMatched: React.FunctionComponent = () => {
  const [collapse, setCollapse] = React.useState(true)
  
  return <section id="GetMatched">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column has-text-centered has-text-grey-dark">
          <h2>Get matched with a job you love</h2>
          <p className="has-text-grey-light">
            Our clients are more successful because they leverage talent acoss
            the world to deliver their goals.
          </p>
        </div>
      </div>
    </div>

    <div className="container positions">
      <div className="box">
        <h4>Integration Architect</h4>
        <div>
          <ul>
            <li>Hiring for LiquidPay</li>
            <li>Kiev, Ukraine</li>
          </ul>

          <Link to="/ukraine/1">
            <i className="icon right-arrow" /> <span>Find out more</span>
          </Link>
        </div>
      </div>

      <div className="box">
        <h4>Full-Stack Developer</h4>
        <div>
          <ul>
            <li>Hiring for BCG</li>
            <li>Jakarta, Indonesia</li>
          </ul>

          <Link to="/ukraine/1">
            <i className="icon right-arrow" /> <span>Find out more</span>
          </Link>
        </div>
      </div>

      <div className="box">
        <h4>
          Project <br />
          Manager
        </h4>
        <div>
          <ul>
            <li>Hiring for BCG</li>
            <li>Jakarta, Indonesia</li>
          </ul>

          <Link to="/ukraine/1">
            <i className="icon right-arrow" /> <span>Find out more</span>
          </Link>
        </div>
      </div>

      <div className="box">
        <h4>
          Senior <br />
          PHP Developer
        </h4>
        <div>
          <ul>
            <li>Hiring for Float.sg</li>
            <li>All locations</li>
          </ul>

          <Link to="/ukraine/1">
            <i className="icon right-arrow" /> <span>Find out more</span>
          </Link>
        </div>
      </div>

      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <h4>
          .Net Software <br />
          Developer
        </h4>
        <div>
          <ul>
            <li>Hiring for LiquidPay</li>
            <li>Kiev, Ukraine</li>
          </ul>

          <Link to="/ukraine/1">
            <i className="icon right-arrow" /> <span>Find out more</span>
          </Link>
        </div>
      </div>

      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <h4>
          .Net Software <br />
          Developer
        </h4>
        <div>
          <ul>
            <li>Hiring for Lyte Ventures</li>
            <li>Jakarta, Indonesia</li>
          </ul>

          <Link to="/ukraine/1">
            <i className="icon right-arrow" /> <span>Find out more</span>
          </Link>
        </div>
      </div>

      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <h4>
          Business <br />
          Development Head
        </h4>
        <div>
          <ul>
            <li>Hiring for BigBool</li>
            <li>Jakarta, Indonesia</li>
          </ul>

          <Link to="/ukraine/1">
            <i className="icon right-arrow" /> <span>Find out more</span>
          </Link>
        </div>
      </div>

      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <h4>
          Cloud <br />
          Architect
        </h4>
        <div>
          <ul>
            <li>Hiring for Li&amp;Fung</li>
            <li>Vietnam</li>
          </ul>

          <Link to="/ukraine/1">
            <i className="icon right-arrow" /> <span>Find out more</span>
          </Link>
        </div>
      </div>
    </div>

    <div className="actions has-text-centered">
      <button
        type="button"
        className="button is-large is-hidden-desktop touch"
        onClick={() => {
          setCollapse(!collapse)
        }}
      >
        See all
      </button>
      
      <a
        className="button is-large is-primary"
        href="mailto:keith@wonderlabs.io?subject=RE%3A%20Applying%20for%20a%20job"
      >
        <span>Apply now</span>
      </a>
    </div>
  </section>
}

export default GetMatched
