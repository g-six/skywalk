import * as React from 'react'
import icons from './icons'
import './iconography.scss'

export const Iconography: React.FunctionComponent = () => {
  return (<section id="ConsoleIconography">
    <div className="container">
      <div className="columns is-multiline">
        {icons.map(icon => <div className="column is-3" key={icon}>
          <dl>
            <dd>
              <i className={icon} />
            </dd>
            <dt>
              {icon}
            </dt>
          </dl>
        </div>)}
      </div>
    </div>
  </section>
  )
}

export default Iconography