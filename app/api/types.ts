export enum StatusCodes {
  OK_SUCCESS = 200,
  OK_EMPTY = 201,
  E_BAD_REQUEST = 401,
  E_FORBIDDEN = 403,
  E_NOT_FOUND = 404,
}

export interface Payload {
  [key: string]: string | boolean | number | Payload
}

export interface ApiResponseBody {
  error?: string | Payload
  records?: Payload[]
  record?: Payload
  user?: Payload
  ms?: number
}
export interface ApiResponseHeaders extends Payload {
  status: StatusCodes
}

export interface QueryStringParams {
  [key: string]: string | number
}

export interface PayloadOptions {
  headers?: {
    Authorization: string | void
    'kasl-key'?: string | void
  }
}
