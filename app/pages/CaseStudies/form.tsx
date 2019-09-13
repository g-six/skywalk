import Ellipsis from '@components/spinner/ellipsis'
import { I18nContext } from '@components/I18nContextProvider'
import * as React from 'react'
import * as PropTypes from 'prop-types'

export const CaseStudyForm = props => {
  const { translate } = React.useContext(I18nContext)
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <div className="field">
        <div className="control">
          <input
            className={`input${props.errors.title ? ' is-danger' : ''}`}
            name="title"
            onChange={props.onInputChange}
            placeholder={props.errors.title || props.title_placeholder}
            value={props.record.title}
            type="text"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <textarea
            className={`input${props.errors.contents ? ' is-danger' : ''}`}
            name="contents"
            onChange={props.onInputChange}
            placeholder={props.errors.contents || props.contents_placeholder}
            rows={26}
            value={props.record.contents}
          ></textarea>
        </div>
      </div>

      <div className="level">
        <div className="level-left" />
        <div className="level-right">
          <div className="level-item">
            <button
              type="submit"
              className="button is-primary is-rounded"
              disabled={props.loading}
            >
              {props.loading ? <Ellipsis dark={true} /> : translate('Submit')}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

CaseStudyForm.propTypes = {
  contents_placeholder: PropTypes.string,
  error: PropTypes.any.isRequired,
  errors: PropTypes.object,
  loading: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
  record: PropTypes.object,
  title_placeholder: PropTypes.string,
  user: PropTypes.object,
}
