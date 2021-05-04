import { initial_state, reducer } from '../reducer'
import { ActionTypes } from '../types'

describe('Reducer', () => {
  it('should return default state', () => {
    const actual = reducer(undefined, { type: 'unknown' })
    expect(actual).toEqual(initial_state)
  })

  describe('DISMISS_NOTIFICATION', () => {
    it('should close notification and reset timeout', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.DISMISS_NOTIFICATION,
      })

      expect(actual).toEqual({
        ...initial_state,
        message: '',
        alert_timeout: 0,
      })
    })
  })

  describe('LIST_RECORDS', () => {
    it('should initiate API call and set loading', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.LIST_RECORDS,
      })

      expect(actual).toEqual({
        ...initial_state,
        loading: true,
      })
    })
  })

  describe('LOAD_RECORD', () => {
    it('should load record based on slug', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.LOAD_RECORD,
        slug: 'test',
      })

      expect(actual).toHaveProperty('data.record.slug', 'test')
    })
  })

  describe('API_ERROR', () => {
    it('should set error', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.API_ERROR,
        error: 'testing',
        errors: {},
      })

      expect(actual).toEqual({
        ...initial_state,
        error: 'testing',
        errors: {},
        loading: false,
      })
    })
  })

  describe('RESPONSE_200', () => {
    it('should set records', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.RESPONSE_200,
        user: { id: 69 },
        records: [{ id: 69 }],
      })

      expect(actual).toEqual({
        ...initial_state,
        data: {
          user: { id: 69 },
          records: [{ id: 69 }],
        },
        error: '',
        loading: false,
      })
    })
  })

  describe('SET_FILTER', () => {
    it('should set filters', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.SET_FILTER,
        key: 'title',
        value: 'a post',
      })
      expect(actual).toEqual({
        ...initial_state,
        filters: {
          title: 'a post',
        },
      })
    })

    it('should also be able to clear filters', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.SET_FILTER,
        key: 'title',
      })
      expect(actual).toEqual(initial_state)
    })
  })

  describe('SET_INPUT', () => {
    it('should set filters', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.SET_INPUT,
        name: 'title',
        value: 'a post',
      })
      expect(actual).toEqual({
        ...initial_state,
        data: {
          ...initial_state.data,
          record: {
            title: 'a post',
          },
        },
      })
    })
  })

  describe('SUBMIT_FORM', () => {
    it('should set filters', () => {
      const actual = reducer(undefined, {
        type: ActionTypes.SUBMIT_FORM,
      })
      expect(actual).toEqual({
        ...initial_state,
        loading: true,
      })
    })
  })
})
