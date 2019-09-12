export const getCookie = (key: string): string | void => {
  const cookies = document.cookie.split(';')

  for (let cookie of cookies) {
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length)
    }
    if (cookie.indexOf(`${key}=`) === 0) {
      return cookie.substring(`${key}=`.length, cookie.length)
    }
  }
}

const daysToMiliseconds = (days: number) => days * 24 * 3600 * 1000

export const setCookie = (key: string, value: string, days?: number): void => {
  const key_value = `${key}=${value}`
  let expires = ''
  if (days) {
    const expiry_date = new Date()
    expiry_date.setTime(expiry_date.getTime() + daysToMiliseconds(days))
    expires = `expires=${expiry_date.toUTCString()}`
  }
  document.cookie = [key_value, expires, 'path=/'].join('; ')
}

export const eraseCookie = (key: string): void => {
  document.cookie = `${key}=; Max-Age=-99999999;`
}
