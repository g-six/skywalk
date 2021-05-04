import { Action } from 'redux'
import { Dispatch } from 'react'

export type ErrorType = string | object

export enum ActionTypes {
  DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION',
  API_ERROR = 'API_ERROR',
  LIST_RECORDS = 'LIST_RECORDS',
  LOAD_RECORD = 'LOAD_RECORD',
  RESPONSE_200 = 'RESPONSE_200',
  RETRIEVE_CONTENTS = 'RETRIEVE_CONTENTS',
  SET_FILTER = 'SET_FILTER',
  SET_INPUT = 'SET_INPUT',
  SUBMIT_FORM = 'SUBMIT_FORM',
}

export interface ActionType extends Action {
  type: ActionTypes
  value?: string
  error?: string | object
}

export interface AnyObject {
  [key: string]: string | boolean | number | AnyObject | null
}

export interface FormProps {
  onSubmit: Function
  record: AnyObject
  contents_placeholder?: string
  title_placeholder?: string
}

export interface Filters {
  id?: number
  contents?: string
  title?: string
}

export interface PageProps {
  dispatch: Dispatch<Action>
  state: State
}

export interface ListComponentInterface {
  state: State
  dispatch: React.Dispatch<Action>
  translate: (key: string) => string
}

export interface RecordInterface {
  id: number
  contents: string
  title?: string
  slug?: string
}

export interface RouterProps {
  match: {
    params: AnyObject
  }
}

export interface State {
  data: {
    record?: AnyObject
    records?: RecordInterface[]
    user?: {
      id: number
      email?: string
    }
  }
  filters?: Filters
  error?: ErrorType
  errors?: AnyObject
  loading: boolean
  message?: string
}

export type Props = RouterProps
