import Ellipsis from '@components/spinner/ellipsis'
import { Mixpanel } from '@services/mixpanel'
import { defaults } from 'lodash'
import * as React from 'react'
import * as ReactMarkdown from 'react-markdown/with-html'
import { loadPage, setInputValue, updateRecord } from './actions'
import { initial_state, reducer } from './reducer'
import { CaseStudyForm } from './form'
import './styles.scss'
import { ActionType, State, Props } from './types'

export const CaseStudyPage: React.FunctionComponent<Props> = (props: Props) => {
  const [state, dispatch] = React.useReducer<React.Reducer<State, ActionType>>(
    reducer,
    initial_state,
  )

  Mixpanel.track('CaseStudyPage', { state: 'initial render' })
  React.useEffect(() => {
    Mixpanel.track('CaseStudyPage', { state: 'cDU,cDM' })

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
    loadPage(props.match.params.id, dispatch)
  }, []) // Pass empty array to only load this once

  const { record, user } = state.data

  if (!state.loading && !record) {
    window.location.href = '/four-oh-four'
  }

  if (state.loading && !record) {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <Ellipsis dark={true} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section" id="CaseStudiesPage">
      <div className="columns">
        {record && record.id ? (
          <div
            className={`contents column${user ? ' is-two-thirds-desktop' : ''}`}
          >
            <h2>{record.title}</h2>
            <ReactMarkdown source={record.contents} escapeHtml={false} />
          </div>
        ) : (
          ''
        )}
        {user ? (
          <div className="column is-one-third-desktop">
            <CaseStudyForm
              error={state.error}
              errors={state.errors}
              loading={state.loading}
              user={user}
              record={defaults(state.data.record, {
                title: '',
                contents: '',
              })}
              onInputChange={setInputValue(dispatch)}
              onSubmit={updateRecord(state, dispatch)}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}

export default CaseStudyPage
