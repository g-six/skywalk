import '@testing-library/jest-dom'
import {
  act,
  fireEvent,
  queryAllByText,
  render,
  waitForElement,
  RenderResult,
} from '@testing-library/react'
import * as React from 'react'
import { Growl, Records, TokensPage as Page } from '../'

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

document.cookie = 'kasl-key=asdfasdf ;'
describe('TokensPage', () => {
  describe('Rendering', () => {
    let comp: RenderResult
    it('should show a <section>', async () => {
      act(() => {
        comp = render(<Page />)
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })

    it('should show boxes of records', async () => {
      const records = [{ id: 1, client_id: 'asdasd' }]
      const spyDispatch = jest.fn()
      const spyTranslate = jest.fn()
      const { container } = render(
        Records({
          state: { data: { records }, loading: false },
          dispatch: spyDispatch,
          translate: spyTranslate,
        }),
      )
      const rendered_records = await waitForElement(
        () => queryAllByText(container, 'asdasd'),
        { container },
      )

      expect(rendered_records).toHaveLength(1)
    })

    it('should show client secret if provided', async () => {
      const records = [{ id: 1, client_id: 'asdasd', client_secret: 'zzzzz' }]
      const spyDispatch = jest.fn()
      const spyTranslate = jest.fn(text => text)
      const spyExecCommand = jest.fn()
      document.execCommand = spyExecCommand

      const rendered_records: RenderResult = render(
        Records({
          state: { data: { records }, loading: false },
          dispatch: spyDispatch,
          translate: spyTranslate,
        }),
      )

      act(() => {
        fireEvent.click(
          rendered_records.getAllByText('tokens.copy.client-secret')[0],
        )
      })
      expect(
        rendered_records.getAllByText('tokens.copy.client-secret'),
      ).toHaveLength(2)
    })

    it('should not render any cards if there are no records', async () => {
      const spyDispatch = jest.fn()
      const spyTranslate = jest.fn()

      const { container } = render(
        Records({
          state: { data: {}, loading: false },
          dispatch: spyDispatch,
          translate: spyTranslate,
        }),
      )
      const rendered_records = await waitForElement(
        () => container.querySelectorAll('.box'),
        { container },
      )

      expect(rendered_records).toHaveLength(0)
    })
  })

  describe('Growl', () => {
    let growl_el: HTMLElement
    it('should hide after few seconds (set by caller)', async () => {
      const spyDispatch = jest.fn()

      act(() => {
        growl_el = render(
          Growl({ message: 'a test', onClose: spyDispatch, timeout: 7 }),
        ).container
      })

      act(() => {
        fireEvent.click(growl_el.querySelector('.icon_close') as Element)
      })

      expect(spyDispatch).toHaveBeenCalledTimes(1)
    })
  })
})
