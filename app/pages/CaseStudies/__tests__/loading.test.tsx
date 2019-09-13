import { render } from '@testing-library/react'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Records } from '../'
import { CaseStudyForm } from '../form'

jest.mock('@services/mixpanel', () => ({
  Mixpanel: {
    init: jest.fn(),
    track: jest.fn(),
  },
}))

describe('Loading', () => {
  describe('CaseStudyForm', () => {
    it('should show spinner on loading state', async () => {
      const record = {
        title: 'test',
        contents: 'xxx',
      }
      const form = render(
        <CaseStudyForm
          error=""
          errors={{}}
          loading={true}
          onInputChange={jest.fn()}
          record={record}
        />,
      )
      expect(form.container.querySelector('.lds-ellipsis')).toBeDefined()
    })
  })
  describe('CaseStudiesPage', () => {
    it('should show spinner on loading state', async () => {
      const mocked_state = {
        data: {},
        loading: true,
      }
      const spyTranslate = jest.fn()
      const comp = render(
        <BrowserRouter>
          <Records
            state={mocked_state}
            dispatch={jest.fn()}
            translate={spyTranslate}
          />
        </BrowserRouter>,
      )
      expect(comp.container.querySelector('.lds-ellipsis')).toBeDefined()
    })
  })
})
