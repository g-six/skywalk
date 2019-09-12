import redux = require('redux')
import configureStore from '../store'

describe('configureStore', () => {
  const spyApplyMiddleware = jest.fn()
  const spyCompose = jest.fn()
  // const spyCreateStore = jest.fn()

  redux.applyMiddleware = spyApplyMiddleware
  redux.compose = spyCompose
  // redux.createStore.mockImplementation(spyCreateStore)

  it('should createStore', () => {
    configureStore()
    expect(spyApplyMiddleware).toHaveBeenCalled()
    expect(spyCompose).toHaveBeenCalled()
  })
})
