import * as React from 'react'
import { Link } from 'react-router-dom'

import './panel.scss'

export const ConsolePanel: React.FunctionComponent = () => {
  return (<section id="ConsolePanel">
    <div className="container">
      <ul className="idearobin menu">
        <li
          className="has-background-black-bis"
        >
          <Link to="/console">
            <i className="icon_house_alt" />
          </Link>
        </li>
        <li
          className="has-background-black-bis"
        >
          <Link to="/console">
            <i className="icon_cloud_alt" />
          </Link>
        </li>
        <li
          className="has-background-black-bis"
        >
          <Link to="/console">
            <i className="icon_drive" />
          </Link>
        </li>
        <li
          className="has-background-black-bis"
        >
          <Link to="/console">
            <i className="icon_id-2" />
          </Link>
        </li>
      </ul>
    </div>
  </section>)
}

export default ConsolePanel
