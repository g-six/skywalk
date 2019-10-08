import * as React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return <div id="TechnologySolutions">
    <h5 className="has-text-grey-dark">Technology Solutions</h5>
    <p className="has-text-grey-light">
      With teams of experienced software developers around the world, <br />
      our technology solutions teams specialize in building highly <br />
      customized software systems to power your enterprise and <br />
      productivity needs.
    </p>

    <Link className="is-clearfix" to="/technology-solutions">Learn More</Link>
  </div>
}