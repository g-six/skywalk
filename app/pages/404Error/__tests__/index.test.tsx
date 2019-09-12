import { shallow } from 'enzyme'
import * as React from 'react'
import { Page404Error } from '../'

jest.mock('@services/mixpanel', () => ({
  Mixpanel: {
    init: jest.fn(),
    track: jest.fn(),
  },
}))

describe('404 Page', () => {
  it('should render as expected', () => {
    const comp = shallow(<Page404Error />)
    expect(comp.find('.title')).toHaveLength(1)
  })
})
