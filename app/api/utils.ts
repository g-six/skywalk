import { eraseCookie, getCookie } from '@utils/cookie'
import {
  ApiResponseBody,
  ApiResponseHeaders,
  PayloadOptions,
  StatusCodes,
} from './types'

export const prepHeaders = (): PayloadOptions => {
  const headers = {
    Authorization: getCookie('kasl-key'),
  }
  if (getCookie('kasl-key')) {
    headers['kasl-key'] = getCookie('kasl-key')
  }
  return { headers }
}

export const parseResponse = response => {
  const results: ApiResponseBody = {}
  const headers: ApiResponseHeaders = response.headers

  results.records = response.data.records
  results.record = response.data.record

  // Response contains other data based on session
  // and relation
  const { data: more } = response.data

  // Request had valid kasl-key header
  if (more && more.user) {
    results.user = more.user
  }

  return {
    results,
    headers,
  }
}

export const processErrors = api_error => {
  const { data, headers: response_headers, status } = api_error.response
  const { error, errors, message } = data
  const headers = {
    ...response_headers,
    status,
  }

  if (status === StatusCodes.E_FORBIDDEN) {
    eraseCookie('kasl-key')
  }

  return {
    headers,
    results: {
      error,
      errors,
      message,
    },
  }
}
