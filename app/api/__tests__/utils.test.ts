import { parseResponse, processErrors, prepHeaders } from '../utils'

describe('parseResponse', () => {
  const user = {
    id: 69,
  }

  it('should parse user info if any', () => {
    const actual = parseResponse({
      data: {
        data: {
          user,
        },
      },
    })

    expect(actual).toHaveProperty('results', { user })
  })
})

describe('prepHeaders', () => {
  it('should get cookie if available', () => {
    document.cookie = 'kasl-key=xxxxxx; '
    const actual = prepHeaders()

    expect(actual).toHaveProperty('headers.kasl-key', 'xxxxxx')
  })
})

describe('processErrors', () => {
  it('should parse error', () => {
    const actual = processErrors({
      response: {
        data: {
          data: {
            error: 'sample',
          },
        },
        status: 400,
      },
    })

    expect(actual).toHaveProperty('headers', { status: 400 })
  })
})
