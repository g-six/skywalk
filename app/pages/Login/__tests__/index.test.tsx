import { CookieStoreProvider } from '@providers/cookie-context'
import '@testing-library/jest-dom'
import { act, render, RenderResult } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Router } from 'react-router'

import { errorSnackBar, LoginPage as Page } from '../'

jest.mock('@services/mixpanel', () => ({
  Mixpanel: {
    init: jest.fn(),
    track: jest.fn(),
  },
}))

describe('Login', () => {
  const history = createMemoryHistory()
  describe('Rendering', () => {
    let comp: RenderResult
    it('should show a <section>', () => {
      act(() => {
        comp = render(
          <CookieStoreProvider>
            <Router history={history}>
              <Page />
            </Router>
          </CookieStoreProvider>,
        )
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })

    it('should show a .logged-in component', () => {
      document.cookie = 'kasl-key=test1; '
      act(() => {
        comp = render(
          <CookieStoreProvider>
            <Router history={history}>
              <Page />
            </Router>
          </CookieStoreProvider>,
        )
      })
      expect(comp.container.querySelector('.logged-in')).toBeDefined()
    })
  })

  describe('errorStackBar', () => {
    let comp: RenderResult
    it('should display snackbar with message', () => {
      const spyDispatch = jest.fn()
      act(() => {
        comp = render(<>{errorSnackBar(spyDispatch, 'error')}</>)
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })
  })
})
