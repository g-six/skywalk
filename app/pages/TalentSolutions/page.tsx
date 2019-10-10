import * as React from 'react'

export const Banner: React.FunctionComponent = () => {
  return (
    <section className="talent-solutions">
      <section id="Banner" className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-two-thirds-tablet is-four-fifths-mobile has-text-centered has-text-white banner responsive-text">
                <span className="has-text-wl-1">We&rsquo;re making </span> the
                world{' '}
                <strong className="has-text-white">easily accessible.</strong>
                <p>
                  Businesses today need to go Global from Day 1. We help you
                  navigate the uncertainty and often complex and confusing labor
                  laws and tax regimes across different emerging markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Banner
