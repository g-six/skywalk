import { mount } from 'enzyme'
import * as React from 'react'
import { LoadingSpinnerComponent as Component } from '../index'

describe('Spinner', () => {
  jest.mock('react-promise-tracker', () => ({
    promiseTrackerHoc: jest.fn(),
  }))

  it('should render BeatLoader', () => {
    const in_progress = true
    const comp = mount(<Component {...{ in_progress }} />)
    expect(comp.find('.loading')).toHaveLength(1)
  })
  it('should not render BeatLoader if !in_progress', () => {
    const comp = mount(<Component />)
    expect(comp.find('.loading')).toHaveLength(0)
  })
})
