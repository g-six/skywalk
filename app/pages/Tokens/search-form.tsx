import * as React from 'react'
import { formSubmit, onChangeFilter } from './actions'
import { FormInterface } from './types'

export const Form = (props: FormInterface) => (
  <form
    className="form columns"
    onSubmit={formSubmit(props.state, props.dispatch)}
  >
    <nav className="level column">
      <div className="level-left">
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input
                id="client_id"
                className="input"
                tabIndex={1}
                type="text"
                placeholder={props.client_id_placeholder}
                onChange={onChangeFilter(props.dispatch)}
              />
            </p>
            <p className="control">
              <button
                className="button is-primary is-rounded raised"
                disabled={props.state.loading}
                type="submit"
              >
                <span className="is-uppercase has-text-weight-bold">
                  {props.submit_label}
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </nav>
  </form>
)
