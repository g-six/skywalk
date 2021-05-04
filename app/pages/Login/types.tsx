import { ContextProps as CookieInterface } from '@providers/cookie-context/types'
import { Action } from 'redux'
import { Dispatch } from 'react'

export type ErrorType = string

export enum ActionTypes {
  DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION',
  API_ERROR = 'API_ERROR',
  FORM_RESET = 'FORM_RESET',
  RESPONSE_200 = 'RESPONSE_200',
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SUBMIT_FORM = 'SUBMIT_FORM',
}

export interface ActionType extends Action {
  type: ActionTypes
  value?: string
  error?: string
}

export interface FormProps {
  cookies: CookieInterface
  dispatch: Dispatch<Action>
  email_label: string
  email_placeholder: string
  forgot_text: string
  password?: string
  password_label: string
  password_placeholder: string
  state: State
  submit_label: string
}

export interface State {
  data: {
    email?: string
    password?: string
  }
  error?: ErrorType
  loading: boolean
}
