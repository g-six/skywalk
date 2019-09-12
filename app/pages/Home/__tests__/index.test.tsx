import '@testing-library/jest-dom'
import { act, render, RenderResult } from '@testing-library/react'
import * as React from 'react'

import { HomePage } from '../'

jest.mock('@services/mixpanel', () => ({
  Mixpanel: {
    init: jest.fn(),
    track: jest.fn(),
  },
}))

describe('Koa Homepage', () => {
  describe('Rendering', () => {
    let comp: RenderResult
    it('should show a <section>', () => {
      act(() => {
        comp = render(<HomePage />)
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })
  })
})
