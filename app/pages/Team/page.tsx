import * as React from 'react'

export const Banner: React.FunctionComponent = () => {
  return (
    <section className="our-team">
      <section id="Banner" className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-two-thirds-tablet is-four-fifths-mobile has-text-centered has-text-wl-1 banner responsive-text">
                We help companies{' '}
                <strong className="has-text-white">
                  to access talent and markets across the world.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Banner
