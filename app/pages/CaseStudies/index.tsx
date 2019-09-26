import Ellipsis from '@components/spinner/ellipsis'
import { I18nContext } from '@components/I18nContextProvider'
import { defaults } from 'lodash'
import * as React from 'react'
import * as ReactMarkdown from 'react-markdown/with-html'
import { Link } from 'react-router-dom'
import { loadContents, setInputValue, submitForm } from './actions'
import { initial_state, reducer } from './reducer'
import { CaseStudyForm } from './form'
import { EmptyPlaceholder } from './placeholder'
import './styles.scss'
import {
  ActionType,
  ListComponentInterface,
  RecordInterface,
  State,
} from './types'

const Level = (props: RecordInterface) => (
  <ReactMarkdown source={props.contents.split('---')[0]} escapeHtml={false} />
)

export const extractRecordsIfAvailable = data =>
  data && data.records && data.records.length && data.records

export const Records = ({ state, translate }: ListComponentInterface) => {
  const records = extractRecordsIfAvailable(state.data)

  if (!records) {
    return state.loading ? <Ellipsis dark={true} /> : <EmptyPlaceholder />
  }

  return (
    <div className="columns records is-multiline">
      {records &&
        records.map((rec: RecordInterface, idx: number) => (
          <div className="column is-half-tablet" key={rec.id}>
            <div className="box">
              <div className="content">
                <h4>
                  <Link to={`/case-studies/${rec.slug}/${rec.id}`}>
                    {rec.title}
                  </Link>
                </h4>
                <Level {...rec} />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export const CaseStudiesPage: React.FunctionComponent = () => {
  const { translate } = React.useContext(I18nContext)
  const [state, dispatch] = React.useReducer<React.Reducer<State, ActionType>>(
    reducer,
    initial_state,
  )

  React.useEffect(() => {
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
    loadContents(state, dispatch)({ preventDefault })
  }, []) // Pass empty array to only load this once

  if (state.loading) {
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
      <Records state={state} dispatch={dispatch} translate={translate} />

      {state.data.user ? (
        <CaseStudyForm
          error={state.error}
          errors={state.errors}
          loading={state.loading}
          user={state.data.user}
          record={defaults(state.data.record, {
            title: '',
            contents: '',
          })}
          onInputChange={setInputValue(dispatch)}
          onSubmit={submitForm(state, dispatch)}
        />
      ) : (
        ''
      )}
    </section>
  )
}

export default CaseStudiesPage
