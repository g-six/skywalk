const spyAlias = jest.fn()
const spyIdentify = jest.fn()
const spyPeopleSet = jest.fn()
const spyTrack = jest.fn()

jest.mock('mixpanel-browser', () => {
  return {
    default: {
      alias: spyAlias,
      identify: spyIdentify,
      init: jest.fn(),
      people: {
        set: spyPeopleSet,
      },
      track: spyTrack,
    },
  }
})

describe('Mixpanel service', () => {
  it('should track', () => {
    const { Mixpanel } = require('../mixpanel')

    Mixpanel.track('123', {})
    expect(spyTrack).toHaveBeenCalled()
  })

  it('should be able to identify', () => {
    const { Mixpanel } = require('../mixpanel')

    Mixpanel.identify('123')
    expect(spyIdentify).toHaveBeenCalled()
  })

  it('should be able to set alias', () => {
    const { Mixpanel } = require('../mixpanel')

    Mixpanel.alias('123')
    expect(spyAlias).toHaveBeenCalled()
  })

  it('should be able to set people identity', () => {
    const { Mixpanel } = require('../mixpanel')

    Mixpanel.people.set({ name: 'test' })
    expect(spyPeopleSet).toHaveBeenCalled()
  })
})
