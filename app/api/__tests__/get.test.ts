import { getApi } from '../'

jest.mock('axios')
const mockAxios = require('axios')

describe('retrieveMarkdown API', () => {
  it('should be able to retrieve `data`', async () => {
    mockAxios.get = jest.fn(file_path =>
      Promise.resolve({
        data: file_path,
      }),
    )
    const actual = await getApi('file-name-test', { page: 1 })
    expect(mockAxios.get).toBeCalled()
    expect(actual).toHaveProperty('headers')
    expect(actual).toHaveProperty('results')
  })
})
