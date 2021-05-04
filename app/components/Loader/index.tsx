import * as React from 'react'
import './styles.scss'

export const Loader: React.FC = () => (
  <div className="loader">
    <div className="inner one" />
    <div className="inner two" />
    <div className="inner three" />
  </div>
)
const LoaderContainer: React.FC = () => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <Loader />
      </div>
    </div>
  </section>
)

export default LoaderContainer
