import { errorReducer } from '../error-helper'

describe('errorReducer', () => {
  it('should return an array of component error objects', () => {
    const errors = {
      password: 'min.string',
    }
    expect(errorReducer(errors)).toEqual([
      {
        error: 'password.min.string',
        key: 'password',
      },
    ])
  })
})
