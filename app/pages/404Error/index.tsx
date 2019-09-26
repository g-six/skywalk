import * as React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

interface Props {
  in_progress?: boolean
}

export const Page404Error = (props: Props) => {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">404 Error</h1>
          <h2 className="subtitle is-3">Page not found</h2>
          <Link to="/">E.T. Phone Home &rarr;</Link>
        </div>
      </div>
    </section>
  )
}
