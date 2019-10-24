import _find from 'lodash/find'
import { Helmet } from 'react-helmet'
import { I18nContext } from '@components/I18nContextProvider'
import { CookieStore } from '@providers/cookie-context'
import { retrieveCookie, eraseCookie } from '@providers/cookie-context/actions'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { logout } from './actions'
import Meta from '../Meta'

interface BurgerProps {
  is_expanded?: boolean
  toggleMenu(): void
}

interface MetaTags {
  title: string
  description: string
  url: string
}

export const callKeith = () => {
  alert(
    'Please contact me on WhatsApp at +6582003305\nas I am continuously traveling!',
  )
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

  const content: MetaTags = _find(Meta, {
    url: props['location'].pathname,
  }) as MetaTags
  document.title = 'Wonder Homepage'
  const doc_desc = document.querySelector('meta[name=description]')
  const og_desc = document.querySelector('meta[property="og:description"]')
  const og_title = document.querySelector('meta[property="og:title"]')

  if (doc_desc && doc_desc.remove) {
    doc_desc.remove()
  }
  if (og_title && og_title.remove) {
    og_title.remove()
  }
  if (og_desc && og_desc.remove) {
    og_desc.remove()
  }

  return (
    <nav
      className={nav_class.join(' ')}
      role="navigation"
      aria-label="main navigation"
    >
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <meta property="og:description" content={content.description} />
      </Helmet>
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
                parent_path === 'talent-solutions' ? ' is-active' : ''
              }`}
              to="/talent-solutions"
            >
              {translate('Talent Solutions')}
            </Link>
            <Link
              className={`navbar-item${
                parent_path === 'technology-solutions' ? ' is-active' : ''
              }`}
              to="/technology-solutions"
            >
              {translate('Technology Solutions')}
            </Link>
            <Link
              className={`navbar-item${
                parent_path === 'our-team' ? ' is-active' : ''
              }`}
              to="/our-team"
            >
              {translate('Our Team')}
            </Link>
            <a
              href="#call-keith"
              className="navbar-item call-keith"
              onClick={callKeith}
            >
              {translate('Call Keith')}
            </a>
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
