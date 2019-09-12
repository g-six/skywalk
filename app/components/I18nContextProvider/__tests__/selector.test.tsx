import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from '@testing-library/react'
import * as React from 'react'
import I18nContextProvider from '../'
import LanguageSelector from '../selector'

describe('Language selector', () => {
  let results: RenderResult

  beforeEach(() => {
    results = render(<LanguageSelector />)
  })

  afterEach(cleanup)

  it('should show buttons to translate', () => {
    expect(results.container.querySelector('[value=en]')).toBeDefined()
  })

  it('should change language on interaction', () => {
    const es_button: HTMLButtonElement = results.container.querySelector(
      '[value=en]',
    ) as HTMLButtonElement
    fireEvent.click(es_button)
    expect(results.container.querySelector('.is-en')).toBeDefined()
  })
})

describe('Language selector', () => {
  let results: RenderResult

  beforeEach(() => {
    results = render(
      <I18nContextProvider>
        <LanguageSelector />
      </I18nContextProvider>,
    )
  })

  afterEach(cleanup)

  it('should change language on interaction', () => {
    const es_button: HTMLButtonElement = results.container.querySelector(
      '[value=en]',
    ) as HTMLButtonElement
    fireEvent.click(es_button)
    expect(results.container.querySelector('.is-en')).toBeDefined()
  })
})
