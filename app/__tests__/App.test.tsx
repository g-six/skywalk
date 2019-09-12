import { shallow } from 'enzyme'
import * as React from 'react'
import { App, AppProps } from '../App'
import { History } from 'history'
jest.mock('@services/mixpanel', () => ({
  Mixpanel: {
    init: jest.fn(),
    track: jest.fn(),
  },
}))

describe('App component', () => {
  it('should render as expected', () => {
    const H: AppProps = {
      history: ({} as unknown) as History,
    }
    const comp = shallow(<App {...H} />)
    expect(comp.find('LoadingSpinnerComponent')).toBeTruthy()
  })
})
