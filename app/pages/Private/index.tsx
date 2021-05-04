import { getCookie } from '@utils/cookie'
import * as React from 'react'
import { Redirect } from 'react-router'

export const PrivatePage: React.FunctionComponent = (props) => {
  if (getCookie('kasl-key')) {
    return <div className="page private" {...props} />
  }
  return <Redirect to="/login" />
}
