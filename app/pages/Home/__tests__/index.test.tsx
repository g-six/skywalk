import '@testing-library/jest-dom'
import { act, render, RenderResult } from '@testing-library/react'
import * as React from 'react'

import { HomePage } from '../'

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
