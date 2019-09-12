import logger from '../logger'

describe('logger', () => {
  it('should call console.log', () => {
    const spyLog = jest.spyOn(global.console, 'log')
    const errors = {
      password: 'min.string',
    }
    logger(errors)
    logger(errors, 'test', {
      func: () => {
        throw 'Errror'
      },
    })
    expect(spyLog).toHaveBeenCalled()
  })
})
