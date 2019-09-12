import { I18nContext } from '@components/I18nContextProvider'
import { PrivatePage } from '@pages/Private'
import { Mixpanel } from '@services/mixpanel'
import * as React from 'react'
import {
  copyToClipboard,
  createToken,
  dismissNotification,
  formSubmit,
  retrieveAndCopySecret,
  retrieveSecret,
} from './actions'
import { initial_state, reducer } from './reducer'
import { Form } from './search-form'
import './styles.scss'
import {
  ActionType,
  GrowlProps,
  RecordsInterface,
  State,
  LevelProps,
} from './types'

// Growl
export const Growl = (props: GrowlProps) => {
  if (props.timeout) {
    setTimeout(props.onClose, props.timeout * 1000)
  }
  return (
    <div className={`snack-wrap ${!!props.message ? 'show' : 'hide'}`}>
      <div className="snackbar animated notification is-info">
        <button className="delete icon_close" onClick={props.onClose} />
        {props.message}
      </div>
    </div>
  )
}

const LevelMobile: React.FunctionComponent = props => (
  <nav className="level is-mobile" {...props}></nav>
)

const Level = (props: LevelProps) => (
  <LevelMobile>
    <div className="level-left">
      <div className="level-item">
        <span>{props.client_id}</span>
      </div>
    </div>

    <div className="level-right">
      <div className="level-item is-pulled-right">
        <button
          className="button is-primary is-small is-rounded auto-height"
          onClick={props.onClickCopy}
        >
          {props.label_copy}
        </button>
      </div>
    </div>
  </LevelMobile>
)

interface LevelWithRevealProps {
  disabled: boolean
  labels: {
    copy: string
    reveal: string
  }
  onClickCopy: (e) => Promise<void>
  onClickReveal: (e) => Promise<void>
}
const LevelWithReveal = ({
  disabled,
  labels,
  onClickCopy,
  onClickReveal,
}: LevelWithRevealProps) => (
  <LevelMobile>
    <div className="level-left">
      <div className="level-item" onClick={onClickCopy}>
        <span className="is-size-4">{'•'.repeat(32)}</span>
      </div>
    </div>

    <div className="level-right">
      <div className="level-item is-pulled-right">
        <button
          className="button is-primary is-small is-rounded auto-height btn-copy"
          onClick={onClickCopy}
          disabled={disabled}
        >
          {labels.copy}
        </button>
      </div>
      <div className="level-item is-pulled-right">
        <button
          className="button is-primary is-small is-rounded auto-height"
          onClick={onClickReveal}
          disabled={disabled}
        >
          {labels.reveal}
        </button>
      </div>
    </div>
  </LevelMobile>
)

export const Records = ({ state, dispatch, translate }: RecordsInterface) => {
  return state.data && state.data.records ? (
    <div className="columns records is-multiline">
      {state.data.records.map((rec, idx) => {
        return (
          <div className="column is-half-tablet" key={rec.client_id}>
            <div className="box">
              <div className="content">
                <label>{translate('tokens.client-id')}</label>
                <Level
                  label_copy={translate('tokens.copy.client-secret')}
                  client_id={rec.client_id}
                  onClickCopy={copyToClipboard(rec.client_id, dispatch)}
                />
              </div>

              <label>{translate('tokens.client-secret')}</label>
              {rec.client_secret ? (
                <Level
                  label_copy={translate('tokens.copy.client-secret')}
                  client_secret={rec.client_secret}
                  onClickCopy={copyToClipboard(rec.client_secret, dispatch)}
                />
              ) : (
                <LevelWithReveal
                  labels={{
                    copy: translate('tokens.copy.client-secret'),
                    reveal: translate('tokens.show.client-secret'),
                  }}
                  disabled={state.loading}
                  onClickCopy={retrieveAndCopySecret(
                    rec.client_id,
                    idx,
                    dispatch,
                  )}
                  onClickReveal={retrieveSecret(rec.client_id, idx, dispatch)}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  ) : (
    <></>
  )
}

export const TokensPage: React.FunctionComponent = () => {
  const { translate } = React.useContext(I18nContext)
  const [state, dispatch] = React.useReducer<React.Reducer<State, ActionType>>(
    reducer,
    initial_state,
  )

  Mixpanel.track('TokensPage', { state: 'initial render' })
  React.useEffect(() => {
    Mixpanel.track('TokensPage', { state: 'cDU,cDM' })

    // Load initially - TODO: code far below causes the warning below
    // console.error node_modules/react-dom/cjs/react-dom.development.js:545
    // Warning: An update to null inside a test was not wrapped in act(...).

    // When testing, code that causes React state updates should be wrapped into act(...):

    // act(() => {
    //   /* fire events that update state */
    // });
    // /* assert on the output */

    // This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
    //     in Unknown
    const preventDefault = () => null
    formSubmit(initial_state, dispatch)({ preventDefault })
  }, []) // Pass empty array to only load this once

  return (
    <PrivatePage>
      <section className="section" id="TokensPage">
        <Form
          dispatch={dispatch}
          client_id_label={translate('tokens.client-id')}
          client_id_placeholder={translate('tokens.client-id')}
          forgot_text={translate('forgot.password')}
          password_label={translate('password')}
          password_placeholder={translate('password')}
          reset_label={translate('reset')}
          state={state}
          submit_label={translate('search')}
        />

        <Records state={state} dispatch={dispatch} translate={translate} />
        <button
          type="button"
          className="button fab is-large is-circle is-secondary is-inverted"
          onClick={createToken(dispatch)}
        >
          <span className="icon_plus" />
        </button>
        <Growl
          message={translate(state.message)}
          onClose={dismissNotification(dispatch)}
          timeout={state.alert_timeout}
        />
      </section>
    </PrivatePage>
  )
}

export default TokensPage
