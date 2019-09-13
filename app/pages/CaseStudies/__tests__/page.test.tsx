import '@testing-library/jest-dom'
import { act, render, RenderResult } from '@testing-library/react'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CaseStudyPage as Page } from '../page'

jest.mock('@services/mixpanel', () => ({
  Mixpanel: {
    init: jest.fn(),
    track: jest.fn(),
  },
}))

jest.mock('axios')
const Axios = require('axios')
Axios.get = jest.fn(
  (url): Promise<{}> => {
    let record
    let user

    if (url.split('/').indexOf('69') >= 0) {
      record = { id: 1, contents: 'asdasd' }
    }

    if (url.split('/').indexOf('699') >= 0) {
      record = { id: 1, contents: 'asdasd' }
      user = { id: 69 }
    }

    return Promise.resolve({
      data: { record, data: { user } },
      headers: {},
    })
  },
)

document.cookie = 'kasl-key=asdfasdf ;'
describe('CaseStudyPage', () => {
  afterAll(() => {
    jest.unmock('../actions')
  })
  describe('Rendering with no data', () => {
    let comp: RenderResult
    it('should show a <section>', async () => {
      act(() => {
        comp = render(
          <BrowserRouter>
            <Page match={{ params: {} }} />
          </BrowserRouter>,
        )
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })
  })

  describe('Rendering with data anonymously', () => {
    const match = { params: { id: 69 } }
    let comp: RenderResult
    it('should show a <section>', async () => {
      act(() => {
        comp = render(
          <BrowserRouter>
            <Page match={match} />
          </BrowserRouter>,
        )
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })
  })

  describe('Rendering with data logged in', () => {
    const match = { params: { id: 699 } }
    let comp: RenderResult
    it('should show a <section>', async () => {
      act(() => {
        comp = render(
          <BrowserRouter>
            <Page match={match} />
          </BrowserRouter>,
        )
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })
  })
})
