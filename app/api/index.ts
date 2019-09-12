import Axios from 'axios'
import { stringify } from 'querystring'
import {
  ApiResponseBody,
  ApiResponseHeaders,
  Payload,
  QueryStringParams,
} from './types'
import { parseResponse, prepHeaders, processErrors } from './utils'

export const stage = 'dev'
export const api_url = `https://armada.gsix.online/${stage}`

export const getApi = async (url: string, params?: QueryStringParams) => {
  const qs_filters = stringify(params)
  const query_string = qs_filters ? `?${qs_filters}` : ''
  let results: ApiResponseBody = {}
  let headers: ApiResponseHeaders

  try {
    const response = await Axios.get(
      `${api_url}/${url}${query_string}`,
      prepHeaders(),
    )

    const res = parseResponse(response)
    results = res.results
    headers = res.headers
  } catch (api_error) {
    const res = processErrors(api_error)
    results = res.results
    headers = res.headers
  }
  return {
    headers,
    results,
  }
}

export const postApi = async (url: string, payload?: Payload) => {
  let results: ApiResponseBody = {}
  let headers: ApiResponseHeaders

  try {
    const response = await Axios.post(
      `${api_url}/${url}`,
      payload,
      prepHeaders(),
    )

    const res = parseResponse(response)
    results = res.results
    headers = res.headers
  } catch (api_error) {
    const res = processErrors(api_error)
    results = res.results
    headers = res.headers
  }
  return {
    headers,
    results,
  }
}

export const putApi = async (url: string, payload?: Payload) => {
  let results: ApiResponseBody = {}
  let headers: ApiResponseHeaders

  try {
    const response = await Axios.put(
      `${api_url}/${url}`,
      payload,
      prepHeaders(),
    )

    const res = parseResponse(response)
    results = res.results
    headers = res.headers
  } catch (api_error) {
    const res = processErrors(api_error)
    results = res.results
    headers = res.headers
  }
  return {
    headers,
    results,
  }
}
