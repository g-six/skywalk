import AxiosMock from 'axios'
import { getApi, postApi } from '../'

jest.mock('axios')
const getMock = jest.fn(async url => {
  // Simulate error
  return Promise.reject({
    response: {
      data: {
        error: 'hello',
      },
      headers: {
        url,
      },
      status: 403,
    },
  })
})

const postMock = jest.fn(async url => {
  // Simulate error
  return Promise.reject({
    response: {
      data: {
        error: 'hello',
      },
      headers: {
        url,
      },
      status: 403,
    },
  })
})

jest.mock('@utils/cookie')

describe('API error', () => {
  beforeEach(() => {
    AxiosMock.get = getMock
    AxiosMock.post = postMock
  })
  it('should erase cookie if session cookie is invalid or expired', async () => {
    const actual = await getApi('http://test.co')

    expect(actual.headers.status).toEqual(403)
  })

  it('should erase cookie if session cookie is invalid or expired', async () => {
    const actual = await postApi('http://test.co')

    expect(actual.headers.status).toEqual(403)
  })
})
