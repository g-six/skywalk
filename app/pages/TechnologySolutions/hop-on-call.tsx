import * as React from 'react'

const HopOnCall: React.FunctionComponent = () => (
  <section className="has-background-primary tech-solutions">
    <div className="container is-centered has-text-white has-text-centered hop-on-call">
      <p>
        Hop on an 8 minute{' '}
        <strong className="has-text-white">call with Keith, our Founder</strong>
      </p>

      <a
        href="mailto:keith@wonderlabs.io?subject=Hop on a call"
        className="button is-large is-white"
      >
        Schedule a Call
      </a>
    </div>
  </section>
)

export default HopOnCall
