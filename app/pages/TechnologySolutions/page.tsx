import * as React from 'react'

export const Banner: React.FunctionComponent = () => {
  return (
    <section className="tech-solutions">
      <section id="Banner" className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-two-thirds-tablet is-four-fifths-mobile has-text-centered has-text-white banner responsive-text">
                <span className="has-text-wl-1">We&rsquo;re building your </span>
                <strong className="has-text-white">ideas into software reality.</strong>
                <p>
                  Our teams across the world are crafting and consulting on technology projects.
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
