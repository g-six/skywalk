import { eraseCookie, getCookie, setCookie } from '../cookie'

describe('cookie', () => {
  it('should set and get document.cookie', () => {
    setCookie('anodr-key', 'yyy')
    setCookie('kasl-key', 'abcdefg', 10)
    expect(getCookie('kasl-key')).toEqual('abcdefg')
  })

  describe('eraseCookie', () => {
    it('should erase cookie', () => {
      eraseCookie('anodr-key')
      expect(getCookie('anodr-key')).toBeUndefined()
    })
  })
})
