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
import './styles.scss'
import { ActionType, FormProps, ErrorType, State } from './types'

export interface InputProps {
  dispatch: (e: React.ChangeEvent<HTMLInputElement>) => void
  forgot_label?: string
  label: string
  email?: string
  placeholder: string
  tabIndex: number
}

export interface SnackBarProps {
  dispatch: React.Dispatch<ActionType>
  message?: ErrorType
}

const submitCb = (cookieContextDispatcher) => (key: string, value: string) => {
  cookieContextDispatcher(saveCookie(key, value))
}

// Error snack bar
export const ErrorSnackBar: React.FC<SnackBarProps> = ({
  dispatch,
  message,
}) => {
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
export const EmailField: React.FC<InputProps> = (props) => (
  <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      <input
        className="input is-rounded"
        tabIndex={props.tabIndex}
        type="text"
        placeholder={props.placeholder}
        onChange={props.dispatch}
      />
    </div>
  </div>
)

// Email input
export const PasswordField: React.FC<InputProps> = (props) => (
  <div className="field">
    <label className="label">
      <span className="level">
        <span className="level-left">{props.label}</span>
        <Link
          className="level-right has-text-link"
          to={`/reset-password?email=${props.email}`}
          tabIndex={3}
        >
          {props.forgot_label}
        </Link>
      </span>
    </label>
    <div className="control">
      <input
        className="input is-rounded"
        tabIndex={props.tabIndex}
        type="password"
        placeholder={props.placeholder}
        onChange={props.dispatch}
      />
    </div>
  </div>
)

const Form: React.FC<FormProps> = (props) =>
  props.cookies.state['kasl-key'] ? (
    <div className="box logged-in">Thanks!</div>
  ) : (
    <form
      className="box"
      onSubmit={submitForm(
        props.state,
        submitCb(props.cookies.dispatch),
        props.dispatch,
      )}
    >
      <EmailField
        dispatch={onChangeEmail(props.dispatch)}
        label={props.email_label}
        placeholder={props.email_placeholder}
        tabIndex={1}
      />

      <PasswordField
        dispatch={onChangePassword(props.dispatch)}
        email={props.state.data.email}
        label={props.password_label}
        forgot_label={props.forgot_text}
        placeholder={props.password_placeholder}
        tabIndex={2}
      />

      <button
        className="button is-medium is-black is-rounded is-fullwidth"
        disabled={props.state.loading}
        type="submit"
      >
        <span className="is-uppercase has-text-weight-semibold is-size-6">
          {props.submit_label}
        </span>
      </button>
    </form>
  )

export const LoginPage: React.FC = () => {
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
    <section className="section is-fullheight" id="LoginPage">
      <div className="is-vcentered columns">
        <div className="column is-half">
          <h1 className="title is-4">IdeaRobin - a registered AWS Partner</h1>
          <p className="subtitle is-5">
            Log a scalable cloud solution requires a solid infrastructure and we
            at IdeaRobin are excited to be part of the AWS Partner Network to
            provide our customers with scalable and fault tolerant systems.
          </p>
          <div className="columns is-centered is-vcentered">G was here</div>
        </div>
        <div className="column is-half">
          <Form
            cookies={cookies}
            dispatch={dispatch}
            email_label={translate('your.email.address')}
            email_placeholder={translate('email.address')}
            forgot_text={translate('forgot.password')}
            password_label={translate('password')}
            password_placeholder={translate('password')}
            state={state}
            submit_label={translate('login')}
          />
        </div>
      </div>

      <ErrorSnackBar dispatch={dispatch} message={state.error} />
    </section>
  )
}

export default LoginPage
