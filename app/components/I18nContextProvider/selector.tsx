import * as React from 'react'
import Styled from 'styled-components'
import { I18nContext } from './index'

const Wrapper = lang => Styled.div`
    > span {
        display: inline-block;
        width: 3rem;
    }
    > button {
        align-items: center;
        background: none;
        border: 1px solid rgba(255,255,255,0);
        cursor: pointer;
        display: flex;
        flex-flow: column;
        height: 20px;
        outline: none;
        outline-style: none;
        overflow: hidden;
        margin: 1px;
        padding: 0;
        text-align: center;

        i {
            margin-top: -3px;
            opacity: 0.5;
            pointer-events: none;
        }

        &:hover,
        &:focus,
        &:active,
        &:visited {
            box-shadow: 1px 0 10px rgba(0,0,0,0.2);
            border: 1px solid rgba(100,100,100,0.1);
            outline: no;
            outline-style: none;
        }

        &:hover,
        &:focus, {
            i {
                opacity: 0.8;
            }
        }
    }

    #${lang}_flag {
        i {
            opacity: 1.0;
        }
    }
`

const LanguageSelector = () => {
  const { dispatch, lang } = React.useContext(I18nContext)

  const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // There is no need to do anything else
    // if dispatch is not defined so ignore
    // from coverage...
    /* istanbul ignore else */
    if (dispatch) {
      const payload = (e.target as HTMLButtonElement).value
      dispatch({ type: 'SET_LANGUAGE', payload })
    }
  }

  const LangWrapped = Wrapper(lang)

  return (
    <LangWrapped className={`is-flex is-${lang}`}>
      <button id="en_flag" onClick={changeLanguage} type="button" value="en">
        <i className="flag flag-ca" />
      </button>
      <button id="es_flag" onClick={changeLanguage} type="button" value="es">
        <i className="flag flag-es" />
      </button>
      <button id="jp_flag" onClick={changeLanguage} type="button" value="jp">
        <i className="flag flag-jp" />
      </button>
      <button id="kr_flag" onClick={changeLanguage} type="button" value="kr">
        <i className="flag flag-kr" />
      </button>
    </LangWrapped>
  )
}

export default LanguageSelector
