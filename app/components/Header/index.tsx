import { I18nContext } from '@components/I18nContextProvider'
import { CookieStore } from '@providers/cookie-context'
import { retrieveCookie, eraseCookie } from '@providers/cookie-context/actions'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { logout } from './actions'

interface BurgerProps {
  is_expanded?: boolean
  toggleMenu(): void
}

export const BurgerComponent = (props: BurgerProps) => (
  <a
    aria-expanded="false"
    aria-label="menu"
    className={`navbar-burger burger${props.is_expanded ? ' is-active' : ''}`}
    data-target="navbar_menu"
    onClick={props.toggleMenu}
    role="button"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
)

export const logoutCb = cookieDispatcher => () =>
  cookieDispatcher(eraseCookie('kasl-key'))

export const HeaderComponent: React.FunctionComponent = props => {
  const { translate } = React.useContext(I18nContext)
  const cookie = React.useContext(CookieStore)

  React.useEffect(() => {
    cookie.dispatch(retrieveCookie('kasl-key'))
  }, [])

  const [scroll_y, setScrollY] = React.useState(window.scrollY)
  const [is_expanded, setExpanded] = React.useState(false)

  const directories = document.location.pathname.substr(1).split('/')
  const [parent_path] = directories
  const paths = directories.join('-')

  const nav_class: string[] = ['navbar', paths]

  /* istanbul ignore next */
  const listener: EventListener = ({ currentTarget }) => {
    const { scrollY } = currentTarget as Window
    setScrollY(scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', listener)

    /* istanbul ignore next */
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [scroll_y])

  const toggleMenu = () => setExpanded(!is_expanded)

  /* istanbul ignore next */
  if (scroll_y > 0) {
    nav_class.push('is-scrolled')
  }

  if (is_expanded) {
    nav_class.push('is-expanded')
  }

  if (props['location'].pathname === '/') {
    nav_class.push('home')
  } else {
    nav_class.push('is-fixed-top')
  }

  return (
    <nav
      className={nav_class.join(' ')}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <i>Wonderlabs</i>
          </Link>

          <BurgerComponent is_expanded={is_expanded} toggleMenu={toggleMenu} />
        </div>

        <div
          id="navbar_menu"
          className={`navbar-menu${is_expanded ? ' is-active' : ''}`}
        >
          <div className="navbar-end">
            <Link className={`navbar-item${!paths ? ' is-active' : ''}`} to="/">
              {translate('Home')}
            </Link>
            <Link
              className={`navbar-item${
                parent_path === 'our-team' ? ' is-active' : ''
                }`}
              to="/our-team"
            >
              {translate('Talent Solutions')}
            </Link>
            {cookie.state['kasl-key'] ? (
              <>
                <Link
                  className="navbar-item"
                  to="#/logout"
                  onClick={logout(logoutCb(cookie.dispatch))}
                >
                  {translate('Logout')}
                </Link>
              </>
            ) : (
                ''
              )}
          </div>
        </div>
      </div>
    </nav>
  )
}

HeaderComponent.propTypes = {
  location: PropTypes.object,
}

export const ConnectedHeader = withRouter(HeaderComponent)

export default ConnectedHeader
