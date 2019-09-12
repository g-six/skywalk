import { postApi } from '../'

jest.mock('axios')
const mockAxios = require('axios')

describe('retrieveMarkdown API', () => {
  it('should be able to retrieve `data`', async () => {
    mockAxios.post = jest.fn(file_path =>
      Promise.resolve({
        data: file_path,
      }),
    )
    const actual = await postApi('file-name-test')
    expect(mockAxios.post).toBeCalled()
    expect(actual).toHaveProperty('headers')
    expect(actual).toHaveProperty('results')
  })

  it('should handle errors', async () => {
    mockAxios.post = jest.fn(file_path =>
      Promise.reject({
        response: {
          data: {},
        },
      }),
    )
    try {
      await postApi('file-name-test')
    } catch (e) {
      expect(e).toHaveProperty('headers')
    }
    expect(mockAxios.post).toBeCalled()
  })
})
