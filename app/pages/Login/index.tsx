import { I18nContext } from '@components/I18nContextProvider'
import { CookieStore } from '@providers/cookie-context'
import { retrieveCookie, saveCookie } from '@providers/cookie-context/actions'
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  dismissNotification,
  onChangeEmail,
  onChangePassword,
  submitForm,
} from './actions'

import { initial_state, reducer } from './reducer'
import './styles'
import { ActionType, FormProps, ErrorType, State } from './types'

export interface InputProps {
  dispatch: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  email?: string
  password?: string
  tabIndex: number
}

const submitCb = cookieContextDispatcher => (key: string, value: string) => {
  cookieContextDispatcher(saveCookie(key, value))
}

// Error snack bar
export const errorSnackBar = (
  dispatch: React.Dispatch<ActionType>,
  message?: ErrorType,
) => {
  return (
    <div className={`snack-wrap ${!!message ? 'show' : 'hide'}`}>
      <div className="snackbar animated notification is-danger">
        <button
          className="delete icon_close"
          onClick={dismissNotification(dispatch)}
        />
        {message}
      </div>
    </div>
  )
}

// Email input
export const EmailField = (props: InputProps) => {
  const qs = ['field', 'no-space-after']
  if (!props.email) {
    qs.push('init')
  }
  return (<div className={qs.join(' ')}>
    <label className="placeholder-label">{props.label}</label>
    <div className="control">
      <input
        className="input"
        tabIndex={props.tabIndex}
        type="text"
        onChange={props.dispatch}
      />
    </div>
  </div>)
}

// Email input
export const PasswordField = (props: InputProps) => {
  const qs = ['field', 'no-space-after']
  if (!props.password) {
    qs.push('init')
  }
  return (
    <div className={qs.join(' ')}>
      <label className="placeholder-label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          tabIndex={props.tabIndex}
          type="password"
          onChange={props.dispatch}
        />
      </div>
    </div>
  )
}

const Form = (props: FormProps) =>
  props.cookies.state['kasl-key'] ? (
    <div className="box logged-in">Thanks!</div>
  ) : (
    <form
      onSubmit={submitForm(
        props.state,
        submitCb(props.cookies.dispatch),
        props.dispatch,
      )}
    >
      <div className="box">
        <EmailField
          dispatch={onChangeEmail(props.dispatch)}
          label={props.email_label}
          tabIndex={1}
          email={props.state.data.email}
        />

        <PasswordField
          dispatch={onChangePassword(props.dispatch)}
          email={props.state.data.email}
          label={props.password_label}
          password={props.state.data.password}
          tabIndex={2}
        />
      </div>

      <div className="has-text-centered is-centered actions">
        <Link
          className="has-text-centered"
          to={`/reset-password?email=${props.state.data.email}`}
          tabIndex={3}
        >
          <span className="is-uppercase has-text-grey-light has-text-weight-bold is-size-7">
            {props.forgot_text}
          </span>
        </Link>
        <div>
          <button
            className="button is-primary is-circle is-large"
            disabled={props.state.loading}
            type="submit"
          >
            <span className="is-uppercase has-text-weight-bold is-size-7">
              {props.submit_label}
            </span>
          </button>
        </div>
      </div>
    </form>
  )

export const LoginPage: React.FunctionComponent = () => {
  const { translate } = React.useContext(I18nContext)
  const cookies = React.useContext(CookieStore)

  const [state, dispatch] = React.useReducer<React.Reducer<State, ActionType>>(
    reducer,
    initial_state,
  )

  React.useEffect(() => {
    cookies.dispatch(retrieveCookie('kasl-key'))
  }, [])

  return (
    <section className="hero is-vcentered is-fullheight" id="LoginPage">
      <div className="hero-body">
        <div className="container is-vcentered">
          <div className="is-vcentered columns">
            <div className="column is-half">
              <div className="has-text-centered">
                <img src="//greative-assets.s3.amazonaws.com/favi-idearobin.png" title="IdeaRobin" alt="IdeaRobin" />
                <br />
                <h1 className="title is-4">
                  IdeaRobin - a registered AWS Partner
                </h1>
              </div>

              <p className="subtitle is-5">
                A scalable cloud solution requires a solid infrastructure and we
                at IdeaRobin are excited to be part of the AWS Partner Network to
                provide our customers with scalable and fault tolerant systems.
              </p>
            </div>
            <div className="column is-half">
              <Form
                cookies={cookies}
                dispatch={dispatch}
                email_label={translate('your.email.address')}
                forgot_text={translate('forgot.password')}
                password_label={translate('password')}
                state={state}
                submit_label={translate('login')}
              />
            </div>
          </div>
        </div>
      </div>
      {errorSnackBar(dispatch, state.error)}
    </section>
  )
}

export default LoginPage
