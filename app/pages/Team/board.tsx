import * as React from 'react'

export const Board: React.FunctionComponent = () => {
  return (
    <section className="our-team section">
      <div id="Board" className="container people has-text-centered">
        <h3>Our Board of Advisors</h3>
        <div className="faces">
          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/chua-boon.png"
            />
            <dl>
              <dt className="has-text-grey-dark">Chua Boon Ping</dt>
              <dd className="has-text-grey-light">CEO, SPH Ventures (Singapore)</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/dr-nasser.png"
            />
            <dl>
              <dt className="has-text-grey-dark">Dr. Nasser Marafih</dt>
              <dd className="has-text-grey-light">Board Director, Ooredoo Group</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/jupe-tan.jpg"
            />
            <dl>
              <dt className="has-text-grey-dark">Jupe Tan</dt>
              <dd className="has-text-grey-light">SVP Global Operations, Plug & Play (Silicon Valley)</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/carman.jpg"
            />
            <dl>
              <dt className="has-text-grey-dark">Carman Chan</dt>
              <dd className="has-text-grey-light">Managing Director, Click Ventures (Hong Kong)</dd>
            </dl>
          </figure>

          <figure className="image">
            <img
              className="is-rounded"
              src="//wl-cebu-assets.s3.amazonaws.com/images/dr-tan.jpg"
            />
            <dl>
              <dt className="has-text-grey-dark">Dr. Tan Wee Liang</dt>
              <dd className="has-text-grey-light">Associate Professor of Strategic Management<br />Management University</dd>
            </dl>
          </figure>

        </div>
      </div>
    </section>
  )
}

export default Board
