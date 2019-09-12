import { CookieStoreProvider } from '@providers/cookie-context'
import '@testing-library/jest-dom'
import { act, render, RenderResult } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Router } from 'react-router'

import { errorSnackBar, LoginPage as Page, submitCb } from '../'
import { formSubmit } from '../actions'
import { ActionTypes } from '../types'
import { saveCookie } from '@providers/cookie-context/actions'

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

  describe('formSubmit()', () => {
    jest.genMockFromModule('axios')
    const spyPost = jest.fn(() =>
      Promise.resolve({ response: {}, headers: {} }),
    )
    const Axios = require('axios')
    Axios.post = spyPost

    const dispatch = jest.fn()

    it('should submit form payload to login API', async () => {
      const spyCookieUpdate = jest.fn(() => {
        document.cookie = 'kasl-key="test2";'
      })
      await formSubmit({ data: {} }, dispatch, spyCookieUpdate)({
        preventDefault: jest.fn(),
      })
      expect(spyCookieUpdate).toHaveBeenCalled()
      expect(spyPost).toHaveBeenCalled()
      expect(dispatch).toHaveBeenCalledWith({ type: ActionTypes.RESPONSE_200 })
    })

    it('should execute cookie dispatcher as callback', () => {
      const key = 'kasl-key'
      const value = 'test'
      const cb = jest.fn()

      submitCb(cb)(key, value)

      expect(cb).toHaveBeenCalledWith(saveCookie(key, value))
    })
  })
})
