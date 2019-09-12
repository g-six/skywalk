import { Action } from 'redux'

export type ErrorType = string | object

export enum ActionTypes {
  COPIED = 'TOKENS.COPIED',
  DISMISS_NOTIFICATION = 'TOKENS.DISMISS_NOTIFICATION',
  FORM_ERROR = 'TOKENS.FORM_ERROR',
  FORM_RESET = 'TOKENS.FORM_RESET',
  RECORD_CREATED = 'TOKENS.RECORD_CREATED',
  RECORD_RETRIEVED = 'TOKENS.RECORD_RETRIEVED',
  RESPONSE_200 = 'TOKENS.RESPONSE_200',
  SET_FILTER = 'TOKENS.SET_FILTER',
  SUBMIT_FORM = 'TOKENS.SUBMIT_FORM',
}

export interface ActionType extends Action {
  type: ActionTypes
  idx?: number
  key?: string
  value?: string
  record?: AnyObject
  records?: AnyObject[]
  error?: string | object
  alert_timeout?: number
}

export interface FilterActionType extends Action {
  type: ActionTypes
  key: string
  value: string
}

export interface FormInterface {
  client_id_label: string
  client_id_placeholder: string
  dispatch: React.Dispatch<Action>
  forgot_text?: string
  password_label: string
  password_placeholder?: string
  reset_label?: string
  state: {
    loading: boolean
  }
  submit_label: string
}

export interface GrowlProps {
  message?: string
  onClose: () => void
  timeout?: number
}

export interface LevelProps {
  client_id?: string
  client_secret?: string
  label_copy?: string
  onClickCopy?: () => void
}

export interface LevelItemProps {
  onClick?: () => void
  right?: boolean
}

export interface AnyObject {
  [key: string]: string | boolean | number | null
}

export interface RecordsInterface {
  state: {
    data: {
      records?: {
        id?: number
        client_id?: string
        client_secret?: string
      }[]
    }
    loading: boolean
  }
  dispatch: React.Dispatch<Action>
  translate: (key: string) => string
}

export interface State {
  data: {
    record?: AnyObject
    records: AnyObject[]
  }
  error?: ErrorType
  filters: {
    [key: string]: string
  }
  loading: boolean
  message: string
  alert_timeout: number
}
