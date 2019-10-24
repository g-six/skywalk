import * as React from 'react'

export const Board: React.FunctionComponent = () => {
  return (
    <section className="our-team section">
      <div id="Team" className="container people has-text-centered">
        <h3>Our Team</h3>
        <div className="faces">
          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/keith.jpeg"
            />
            <dl>
              <dt className="has-text-grey-dark">Keith Tan</dt>
              <dd className="has-text-grey-light">CEO</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/christian.jpeg"
            />
            <dl>
              <dt className="has-text-grey-dark">Christian Petroske</dt>
              <dd className="has-text-grey-light">President</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/buddhika.jpeg"
            />
            <dl>
              <dt className="has-text-grey-dark">Buddhika Perera</dt>
              <dd className="has-text-grey-light">CTO</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/joe.jpg"
            />
            <dl>
              <dt className="has-text-grey-dark">Joe Low</dt>
              <dd className="has-text-grey-light">Country Director, Vietnam</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/lucas.jpeg"
            />
            <dl>
              <dt className="has-text-grey-dark">Lucas Lee</dt>
              <dd className="has-text-grey-light">Country Director, Vietnam</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/shriwanthi.jpeg"
            />
            <dl>
              <dt className="has-text-grey-dark">Shriwanthi Amarasinghe</dt>
              <dd className="has-text-grey-light">
                Country Director, Sri Lanka
              </dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/janidu.jpeg"
            />
            <dl>
              <dt className="has-text-grey-dark">Janidu Perera</dt>
              <dd className="has-text-grey-light">SVP Solutions, Paris</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/krystel.jpeg"
            />
            <dl>
              <dt className="has-text-grey-dark">Krystel Caballo</dt>
              <dd className="has-text-grey-light">
                Marketing &amp; Communications
              </dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/retha.jpg"
            />
            <dl>
              <dt className="has-text-grey-dark">Retha Christiani</dt>
              <dd className="has-text-grey-light">Global Operations</dd>
            </dl>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Board
