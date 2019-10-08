import * as React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return <section id="GlobalFootprint">
    <div className="container">
      <div className="section-heading has-text-centered">
        <h2 className="has-text-grey-dark">
          Our Global Footprint
        </h2>
        <p className="has-text-grey-light">
          Singapore -
          Paris -
          Jakarta -
          Yogyakarta -
          Bandung -
          Ho Chi Minh City -
          Cebu -
          Kiev -
          Colombo
        </p>
      </div>

      <div className="level is-mobile stats">
        <div className="level-item has-text-centered">
          <div>
            <figure>
              <div className="has-background-primary is-rounded">
                <span>350+</span>
              </div>
              <em>Talents</em>
            </figure>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div className="line has-background-grey-lighter" />
        </div>
        <div className="level-item has-text-centered">
          <div>
            <figure>
              <div className="is-rounded has-border-grey-lighter has-text-primary">
                <span>6</span>
              </div>
              <em>Countries</em>
            </figure>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div className="line has-background-grey-lighter" />
        </div>

        <div className="level-item has-text-centered">
          <div>
            <figure>
              <div className="is-rounded has-border-grey-lighter has-text-primary">
                <span>9</span>
              </div>
              <em>Cities</em>
            </figure>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div className="line has-background-grey-lighter" />
        </div>

        <div className="level-item has-text-centered">
          <div>
            <figure>
              <div className="is-rounded has-border-grey-lighter has-text-primary">
                <span>6</span>
              </div>
              <em>Timezones</em>
            </figure>
          </div>
        </div>
      </div>

      <div className="level">
        <div className="level-item nav has-text-right prev">
          <button className="button is-circle is-white prev">
            <span>Previous</span>
          </button>
        </div>
        <div className="level-item image-placeholder">
          <div className="image" style={{ backgroundImage: `url(//wl-cebu-assets.s3-ap-southeast-1.amazonaws.com/images/bearded-guy-min.png)` }} />
        </div>
        <div className="level-item nav next">
          <button className="button is-circle is-white next">
            <span>Next</span>
          </button>
        </div>
      </div>

      <div className="has-text-centered meet-our-team">
        <Link className="button is-large is-primary" to="/our-team">
          <span>Meet our Team</span>
        </Link>
      </div>
    </div>

  </section>
}