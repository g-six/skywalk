import { putApi } from '../'

jest.mock('axios')
const mockAxios = require('axios')

describe('putAPI', () => {
  it('should be able to update `data`', async () => {
    mockAxios.put = jest.fn((file_path) =>
      Promise.resolve({
        data: file_path,
      }),
    )
    const actual = await putApi('file-name-test')
    expect(mockAxios.put).toBeCalled()
    expect(actual).toHaveProperty('headers')
    expect(actual).toHaveProperty('results')
  })

  it('should handle errors', async () => {
    mockAxios.put = jest.fn(() =>
      Promise.reject({
        response: {
          data: {},
        },
      }),
    )
    try {
      await putApi('file-name-test')
    } catch (e) {
      expect(e).toHaveProperty('headers')
    }
    expect(mockAxios.put).toBeCalled()
  })
})
