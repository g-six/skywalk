import { Action } from 'redux'
import { initial_state, reducer } from '../reducer'
import { ActionTypes } from '../types'

describe('Login form reducer', () => {
  test('should have blank email and password as initial state', () => {
    expect(reducer(undefined, {} as Action)).toEqual(initial_state)
  })

  describe('Inputting email', () => {
    test('should be able to update data.email and return updated store', () => {
      const value = 'test@me.co'
      const results = reducer(undefined, {
        type: ActionTypes.SET_EMAIL,
        value,
      } as Action)
      expect(results).toEqual({
        ...initial_state,
        data: {
          ...initial_state.data,
          email: value,
        },
      })
    })
  })

  describe('Inputting password', () => {
    test('should be able to update data.password and return updated store', () => {
      const value = 'test@me.co'
      const results = reducer(undefined, {
        type: ActionTypes.SET_PASSWORD,
        value,
      } as Action)
      expect(results).toEqual({
        ...initial_state,
        data: {
          ...initial_state.data,
          password: value,
        },
      })
    })
  })

  describe('Submitting form', () => {
    test('should return response from API', () => {
      const results = reducer(undefined, {
        type: ActionTypes.RESPONSE_200,
      } as Action)
      expect(results).toEqual({
        ...initial_state,
      })
    })

    test('should should reset loading', () => {
      const results = reducer(undefined, {
        type: ActionTypes.SUBMIT_FORM,
      } as Action)
      expect(results).toEqual({
        ...initial_state,
        loading: true,
      })
    })
  })

  describe('On API error', () => {
    test('should return response from API', () => {
      const results = reducer(undefined, {
        type: ActionTypes.FORM_ERROR,
        error: 'test error',
      } as Action)
      expect(results).toEqual({
        ...initial_state,
        error: 'test error',
        loading: false,
      })
    })
  })
})
