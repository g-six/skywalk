import * as React from 'react'
import './values.scss'

export const Values: React.FunctionComponent = () => {
  return (
    <section id="Values" className="talent-solutions">
      <div className="container values has-text-centered">
        <h3>Our Values</h3>
        <div className="faces">
          <figure className="image">
            <div className="image-placeholder has-background-primary"><img
              src="//wl-cebu-assets.s3.amazonaws.com/icons/customer-first.svg"
            /></div>

            <p className="has-text-grey-light">Put the Customer first</p>
          </figure>

          <figure className="image">
            <div className="image-placeholder has-background-primary"><img
              src="//wl-cebu-assets.s3.amazonaws.com/icons/customer-first.svg"
            /></div>

            <p className="has-text-grey-light">Better our world everyday</p>
          </figure>

          <figure className="image">
            <div className="image-placeholder has-background-primary"><img
              className="globe"
              src="//wl-cebu-assets.s3.amazonaws.com/icons/globe.svg"
            /></div>

            <p className="has-text-grey-light">Think Global but act local</p>
          </figure>

          <figure className="image">
            <div className="image-placeholder has-background-primary"><img
              className="speech-bubbles"
              src="//wl-cebu-assets.s3.amazonaws.com/icons/speech-bubbles.svg"
            /></div>

            <p className="has-text-grey-light">Always be selling</p>
          </figure>

          <figure className="image">
            <div className="image-placeholder has-background-primary"><img
              className="speedometer"
              src="//wl-cebu-assets.s3.amazonaws.com/icons/speedometer.svg"
            /></div>

            <p className="has-text-grey-light">Prize speed over efficiency</p>
          </figure>

          <figure className="image">
            <div className="image-placeholder has-background-primary"><img
              className="chain"
              src="//wl-cebu-assets.s3.amazonaws.com/icons/chain.svg"
            /></div>
            <p className="has-text-grey-light">Break the chains to make a change</p>
          </figure>

          <figure className="image">
            <div className="image-placeholder has-background-primary"><img
              className="trophy"
              src="//wl-cebu-assets.s3.amazonaws.com/icons/prize.svg"
            /></div>
            <p className="has-text-grey-light">Be a winner</p>
          </figure>

          <figure className="image">
            <div className="image-placeholder has-background-primary"><img
              className="puzzle"
              src="//wl-cebu-assets.s3.amazonaws.com/icons/puzzle.svg"
            /></div>
            <p className="has-text-grey-light">Maintain integrity above all else</p>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Values
