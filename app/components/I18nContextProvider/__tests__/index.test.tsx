import { render, waitForElement } from '@testing-library/react'
import * as React from 'react'
import Component, { reducer } from '..'

describe('I18nContextProvider', () => {
  const { lang, translate } = reducer(undefined, {})

  const { queryAllByText } = render(
    <Component>
      <span>{translate('test is key')}</span>
    </Component>,
  )

  it('should load default state', () => {
    expect(lang).toEqual('en')
    expect(translate('asd')).toEqual('asd')
  })

  it('should render translated components', async () => {
    await waitForElement(() => queryAllByText(/test is key/i))
    // // const translated_items = queryAllByText('test is key')
    // expect(translated_items).toHaveLength(1)
  })

  it('should be able to change language', () => {
    const updateReducer = reducer(
      { lang, translate },
      { type: 'SET_LANGUAGE', payload: 'es' },
    )
    expect(updateReducer.lang).toEqual('es')
  })
})
