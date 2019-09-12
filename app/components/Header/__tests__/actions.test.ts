import { logout } from '../actions'

describe('logout', () => {
  it('should call ERASE cookie', () => {
    const preventDefault = jest.fn()
    const spyDispatcher = jest.fn()

    logout(spyDispatcher)({ preventDefault })

    expect(spyDispatcher).toHaveBeenCalled()
  })
})
