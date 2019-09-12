import { cleanup, render } from '@testing-library/react'
import * as React from 'react'
import Loader from '..'

afterEach(cleanup)

describe('Loader', () => {
  it('should render as hero to take up full screen', () => {
    const wrapper = render(<Loader />)
    expect(wrapper.container.querySelectorAll('.hero')).toHaveLength(1)
  })
})
