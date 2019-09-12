import '@testing-library/jest-dom'
import { act, render, RenderResult } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Router } from 'react-router'
import { TokensPage as Page } from '../'

jest.mock('@services/mixpanel', () => ({
  Mixpanel: {
    init: jest.fn(),
    track: jest.fn(),
  },
}))

jest.useFakeTimers()
jest.mock('axios')
const Axios = require('axios')
Axios.get = jest.fn(
  (): Promise<{}> =>
    Promise.resolve({
      data: { records: [{ id: 1, client_id: 'asdasd' }] },
      headers: {},
    }),
)

describe('TokensPage', () => {
  describe('No session cookie', () => {
    let comp: RenderResult
    it('should redirect to login page', async () => {
      act(() => {
        comp = render(
          <Router history={createMemoryHistory()}>
            <Page />
          </Router>,
        )
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })
  })
})
