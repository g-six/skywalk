import * as React from 'react'

const system_messages = {
  'StartAProject.email.string.email':
    "Don't worry, we only need this to respond to your inquiry",
  'StartAProject.message.any.empty': 'Briefly describe your project.',
  'StartAProject.message.string.min':
    'We would need a minimum viable piece of information please.',
  'StartAProject.company.string.min':
    'Sorry but we need your formal company name',
  'StartAProject.name.any.empty': 'I mean, how else should we call you by?',
  'StartAProject.name.string.min': 'I mean, how else should we call you by?',
  'StartAProject.phone.string.min':
    'Sorry but we need your country and area codes as well',
  'StartAProject.confirmation':
    "Thanks! Our team's looking into your inquiry and will get back soon.",
  'tokens.client-id': 'Client ID',
  'tokens.client-secret': 'Client Secret',
  'tokens.copied': 'Copied to clipboard',
  'tokens.copy.client-secret': 'Copy',
  'tokens.show.client-secret': 'Reveal',
}
const translations = {
  en: {
    ...system_messages,
    English: 'English',
    Japanese: 'Japanese',
    Korean: 'Korean',
    Spanish: 'Spanish',
    Submit: 'Submit',
    Login: 'Login',
    'email.address': 'alfred@codefantry.com',
    'forgot.password': 'Forgot password?',
    'your.email.address': 'Your email address',
    password: 'Password',
  },
  es: {
    ...system_messages,
    English: 'Inglés',
    Japanese: 'Japonés',
    Korean: 'Koreano',
    "Let's team up": 'Vamos a trabajar juntos',
    company: 'la compañia',
    Company: 'La compañia',
    name: 'nombre',
    Name: 'Nombre',
    phone: 'número de teléfono',
    Phone: 'Número de teléfono',
    Spanish: 'Español',
    Submit: 'Enviar',
    'StartAProject.email.string.email':
      'No se preocupe, solo necesitamos esto para responder a su consulta.',
    'StartAProject.message.string.min': 'Háblanos de tu proyecto',
    'StartAProject.name.string.min': 'Por favor indíquenos su nombre',
    'Tell us about your project.': 'Háblanos de tu proyecto',
    'StartAProject.confirmation':
      '¡Gracias! Nuestro equipo está investigando su consulta y volverá pronto.',
  },
  jp: {
    ...system_messages,
    company: '会社名',
    Company: '会社名',
    email: 'Eメール',
    Email: 'Eメール',
    English: '英語',
    Japanese: '日本人',
    Korean: '韓国語',
    "Let's team up": '一緒に頑張りましょう',
    name: '名前',
    Name: '名前',
    phone: '電話番号',
    Phone: '電話番号',
    Spanish: 'スペイン語',
    Submit: '申し出る',
    'StartAProject.email.string.email':
      '心配しないで、私達はあなたの照会に答えるのにこれが必要なだけです',
    'StartAProject.message.string.min':
      'あなたのプロジェクトを説明してください',
    'StartAProject.name.string.min': 'あなたの名前を教えてください',
    'Tell us about your project.': 'あなたのプロジェクトについて教えてください',
    'StartAProject.confirmation':
      'ありがとうございます。 私達のチームはあなたの照会を検討していてそしてすぐに戻ってくるでしょう。',
  },
  kr: {
    ...system_messages,
    company: '회사 이름',
    Company: '회사 이름',
    email: '이메일',
    Email: '이메일',
    English: '영어',
    Japanese: '일본어',
    Korean: '한국어',
    "Let's team up": '함께 열심히 노력합시다.',
    name: '명의',
    Name: '명의',
    phone: '전화 번호',
    Phone: '전화 번호',
    Spanish: '스페인 사람',
    Submit: '부치다',
    'StartAProject.email.string.email':
      '걱정마, 우리는 귀하의 질문에 응답하기 위해서만 필요합니다.',
    'StartAProject.message.string.min': '프로젝트를 설명해주세요.',
    'StartAProject.name.string.min': '이름을 알려주세요.',
    'Tell us about your project.': '프로젝트에 대해 알려주십시오.',
    'StartAProject.confirmation':
      '감사! 우리 팀이 귀하의 문의를 조사하고 곧 돌아올 것입니다.',
  },
}

interface LanguageContext {
  dispatch?: React.Dispatch<Record<string, unknown>>
  lang: string
  translate: (key?: string) => string
}

export const translate = (lang) => (key) =>
  (translations[lang] && translations[lang][key]) || key
const initial_state: LanguageContext = {
  lang: 'en',
  translate: translate('en'),
}

export const I18nContext = React.createContext(initial_state)

export const reducer = (the_state = initial_state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        lang: action.payload,
        translate: translate(action.payload),
      }
    default:
      return the_state
  }
}

const I18nContextProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initial_state)

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      <div id="i18n" className="root-child-item" {...props} />
    </I18nContext.Provider>
  )
}

export default I18nContextProvider
