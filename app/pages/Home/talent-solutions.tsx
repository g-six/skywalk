import * as React from 'react'
import { Link } from 'react-router-dom'

const TalentSolutions: React.FunctionComponent = () => {
  return (
    <div id="TalentSolutions">
      <h5 className="has-text-grey-dark">Talent Solutions</h5>
      <p className="has-text-grey-light">
        Helping you access talent around the world to power and grow
        <br />
        your business. From software developers to accountants, <br />
        long-term or short-term, our Customer Success Managers will <br />
        create a customized solution to meet your business needs.
      </p>

      <Link className="is-clearfix" to="/talent-solutions">
        Learn More
      </Link>
    </div>
  )
}

export default TalentSolutions
