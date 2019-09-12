import { fireEvent, render, act } from '@testing-library/react'

import { setCookie } from '@utils/cookie'
import { shallow } from 'enzyme'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Router } from 'react-router'
import { BurgerComponent, HeaderComponent as Component } from '../'
import { CookieStoreProvider } from '@providers/cookie-context'

describe('Header component', () => {
  const history = createMemoryHistory()

  it('should render as expected', () => {
    const comp = render(
      <CookieStoreProvider>
        <Router history={history}>
          <Component />
        </Router>
      </CookieStoreProvider>,
    )
    expect(comp.container.getElementsByTagName('nav')).toHaveLength(1)
  })

  it('should apply is-active to expand', () => {
    const comp = render(
      <CookieStoreProvider>
        <Router history={history}>
          <Component />
        </Router>
      </CookieStoreProvider>,
    )
    fireEvent.click(comp.container.querySelectorAll('.navbar-burger')[0])
    expect(
      comp.container.querySelectorAll('.navbar-menu.is-active'),
    ).toHaveLength(1)
  })

  it('should display logout button that clears cookie on click', async () => {
    setCookie('kasl-key', 'test')

    const comp = render(
      <CookieStoreProvider>
        <Router history={history}>
          <Component />
        </Router>
      </CookieStoreProvider>,
    )

    const button = await comp.findByText('Logout')
    expect(button).toBeDefined()

    act(() => {
      fireEvent.click(button)
    })
  })

  describe('BurgerComponent', () => {
    const spyToggle = jest.fn()
    const comp = shallow(
      <BurgerComponent is_expanded={false} toggleMenu={spyToggle} />,
    )

    it('should be inactive', () => {
      expect(comp.hasClass('is-active')).toBe(false)
    })

    it('should apply active class if active', () => {
      const active_comp = shallow(
        <BurgerComponent is_expanded={true} toggleMenu={spyToggle} />,
      )
      expect(active_comp.hasClass('is-active')).toBe(true)
    })

    it('should respond to click', () => {
      comp.simulate('click')
      expect(spyToggle).toHaveBeenCalledTimes(1)
    })
  })
})
