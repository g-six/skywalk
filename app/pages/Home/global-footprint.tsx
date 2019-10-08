import * as React from 'react'

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

      <div className="level stats">
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
        <div className="level-item nav has-text-right">
          <button className="button is-white prev">
            <span>Previous</span>
          </button>
        </div>
        <div className="level-item">
          <img src="//wl-cebu-assets.s3-ap-southeast-1.amazonaws.com/images/bearded-guy-min.png" />
        </div>
        <div className="level-item nav">
          <button className="button is-white next">
            <span>Next</span>
          </button>
        </div>
      </div>

      <button className="button is-large is-primary">
        <span>Meet our Team</span>
      </button>
    </div>

  </section>
}