import * as PropTypes from 'prop-types'
import * as React from 'react'
import './styles.scss'

export const Ellipsis = props => (
  <div className={`lds-ellipsis${props.dark ? ' is-dark' : ''}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
)

Ellipsis.propTypes = {
  dark: PropTypes.bool.isRequired,
}

export default Ellipsis
