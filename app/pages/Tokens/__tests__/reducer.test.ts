import { initial_state, reducer } from '../reducer'
import { ActionType, ActionTypes } from '../types'

describe('reducer', () => {
  it('should have valid initial state', () => {
    expect(reducer(undefined, {} as ActionType)).toEqual(initial_state)
  })

  describe('data is received', () => {
    it('should set records', () => {
      expect(
        reducer(undefined, {
          type: ActionTypes.RESPONSE_200,
          records: [{ id: 1 }],
        }),
      ).toEqual({
        ...initial_state,
        data: {
          ...initial_state.data,
          records: [{ id: 1 }],
        },
      })
    })
  })

  describe('data is copied', () => {
    it('should set records', () => {
      expect(
        reducer(undefined, {
          type: ActionTypes.COPIED,
        }),
      ).toEqual({
        ...initial_state,
        message: 'tokens.copied',
        alert_timeout: 5,
      })
    })
  })

  describe('dismissing message', () => {
    it('should clear message', () => {
      const actual = reducer(initial_state, {
        type: ActionTypes.DISMISS_NOTIFICATION,
      })

      expect(actual).toEqual(initial_state)
    })
  })

  describe('filter is set', () => {
    it('should clear filters if blank', () => {
      const actual = reducer(initial_state, {
        type: ActionTypes.SET_FILTER,
        key: 'client_id',
        value: '',
      })

      expect(actual).toEqual(initial_state)
    })

    it('should set filter', () => {
      const actual = reducer(initial_state, {
        type: ActionTypes.SET_FILTER,
        key: 'client_id',
        value: 'aaa',
      })

      expect(actual).toEqual({
        ...initial_state,
        filters: {
          ...initial_state.filters,
          client_id: 'aaa',
        },
      })
    })
  })

  describe('form errors', () => {
    it('should reset loading and set error', () => {
      const error = 'test error'

      expect(
        reducer(undefined, {
          type: ActionTypes.FORM_ERROR,
          error,
        }),
      ).toEqual({
        ...initial_state,
        error,
        loading: false,
      })
    })
  })

  describe('form reset', () => {
    it('should reset loading and set error', () => {
      expect(
        reducer(undefined, {
          type: ActionTypes.FORM_RESET,
        }),
      ).toEqual(initial_state)
    })
  })

  describe('record created', () => {
    it('should append to records', () => {
      const record = { id: 1 }
      const actual = reducer(initial_state, {
        type: ActionTypes.RECORD_CREATED,
        record,
      })

      expect(actual).toEqual({
        ...initial_state,
        data: {
          ...initial_state.data,
          records: [record],
        },
      })
    })
  })

  describe('record retrieved', () => {
    it('should append do nothing if no active token was selected', () => {
      const record = { id: 1 }
      const state_with_record = {
        ...initial_state,
        data: {
          ...initial_state.data,
          records: [record],
        },
      }

      const actual = reducer(state_with_record, {
        type: ActionTypes.RECORD_RETRIEVED,
        idx: 0,
        record: {
          ...record,
          client_secret: 'abc',
        },
      })

      expect(actual).toEqual({
        ...state_with_record,
        data: {
          ...state_with_record.data,
          record: {
            ...record,
            client_secret: 'abc',
          },
          records: [
            {
              ...record,
              client_secret: 'abc',
            },
          ],
        },
      })
    })
  })

  describe('submitting form', () => {
    it('should set loading', () => {
      expect(
        reducer(undefined, {
          type: ActionTypes.SUBMIT_FORM,
        }),
      ).toEqual({
        ...initial_state,
        loading: true,
      })
    })
  })
})
