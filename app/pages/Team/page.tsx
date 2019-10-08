import * as React from 'react'

export const Banner: React.FunctionComponent = () => {
  return (
    <section id="OurTeam">
      <section id="Banner" className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8 has-text-centered has-text-wl-1 banner">
                We help companies <strong className="has-text-white">to access talent and markets across the world.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Banner
