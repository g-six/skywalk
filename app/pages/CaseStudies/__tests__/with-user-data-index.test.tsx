import '@testing-library/jest-dom'
import {
  act,
  queryAllByText,
  render,
  waitForElement,
  RenderResult,
  findByText,
  fireEvent,
} from '@testing-library/react'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Records, CaseStudiesPage as Page } from '../'

jest.mock('axios')
const Axios = require('axios')
Axios.get = jest.fn(
  (): Promise<{}> =>
    Promise.resolve({
      data: {
        records: [{ id: 1, contents: 'asdasd' }],
        data: {
          user: { id: 69 },
        },
      },
      headers: {},
    }),
)

jest.doMock('react-markdown/with-html', () => {
  const Mocked = () => 'test'

  return Mocked
})

document.cookie = 'kasl-key=asdfasdf ;'
describe('CaseStudiesPage', () => {
  describe('Rendering', () => {
    let renderer
    let container
    let comp: RenderResult
    it('should show a <section>', async () => {
      act(() => {
        comp = render(
          <BrowserRouter>
            <Page />
          </BrowserRouter>,
        )
      })
      expect(comp.container.querySelector('section')).toBeDefined()
    })
    it('should show form errors', async () => {
      Axios.post = jest.fn(
        (): Promise<{}> =>
          Promise.reject({
            response: {
              data: {
                errors: {
                  contents: 'error in contents',
                  title: 'error in title',
                },
              },
            },
            headers: {},
          }),
      )

      act(() => {
        comp = render(
          <BrowserRouter>
            <Page />
          </BrowserRouter>,
        )
        container = comp.container
      })

      let buttonRenderer
      act(() => {
        buttonRenderer = async () =>
          await waitForElement(() => findByText(container, 'Submit'), {
            container,
          })
      })

      const button = await buttonRenderer()
      act(() => {
        fireEvent.click(button)
      })

      expect(comp.findByPlaceholderText('error in contents')).toBeDefined()
      expect(Axios.post).toHaveBeenCalledTimes(1)
    })

    it('should not render any cards if there are no records', async () => {
      const spyDispatch = jest.fn()
      const spyTranslate = jest.fn()

      act(() => {
        container = render(
          <BrowserRouter>
            {Records({
              state: { data: {}, loading: false },
              dispatch: spyDispatch,
              translate: spyTranslate,
            })}
          </BrowserRouter>,
        ).container
      })

      act(() => {
        renderer = async () =>
          await waitForElement(() => queryAllByText(container, 'asdasd'), {
            container,
          })
      })
      const actual = await renderer()

      expect(actual).toHaveLength(0)
    })

    it('should show boxes of records', async () => {
      const spyDispatch = jest.fn()
      const spyTranslate = jest.fn()

      act(() => {
        container = render(
          <BrowserRouter>
            {Records({
              state: {
                data: { records: [{ id: 1, contents: 'asdasd' }] },
                loading: false,
              },
              dispatch: spyDispatch,
              translate: spyTranslate,
            })}
          </BrowserRouter>,
        ).container
      })

      act(() => {
        renderer = async () =>
          await waitForElement(() => queryAllByText(container, 'asdasd'), {
            container,
          })
      })
      const actual = await renderer()

      expect(actual).toHaveLength(1)
    })

    it('should show form if there is a valid user session', async () => {
      const spyDispatch = jest.fn()
      const spyTranslate = jest.fn()

      act(() => {
        container = render(
          <BrowserRouter>
            {Records({
              state: {
                data: {
                  records: [{ id: 1, contents: 'asdasd' }],
                  user: { id: 69 },
                },
                loading: false,
              },
              dispatch: spyDispatch,
              translate: spyTranslate,
            })}
          </BrowserRouter>,
        ).container
      })

      act(() => {
        renderer = async () =>
          await waitForElement(() => queryAllByText(container, 'asdasd'), {
            container,
          })
      })
      const actual = await renderer()

      expect(actual).toHaveLength(1)
    })
  })
})
