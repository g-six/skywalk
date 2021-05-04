import { retrieveMarkdown } from '../contents'

jest.mock('axios')
const mockAxios = require('axios')

describe('retrieveMarkdown API', () => {
  it('should be able to retrieve `data`', async () => {
    mockAxios.get = jest.fn((file_path) =>
      Promise.resolve({
        data: file_path,
      }),
    )
    const actual = await retrieveMarkdown('file-name-test')
    expect(mockAxios.get).toBeCalled()
    expect(actual).toEqual('/static/file-name-test.md')
  })
  it('should be able to retrieve external `data`', async () => {
    mockAxios.get = jest.fn((file_path) =>
      Promise.resolve({
        data: file_path,
      }),
    )
    const actual = await retrieveMarkdown(
      'https://gist.github.com/g-six/09d66d3ea3662c51820c91ddfe7b9ec4',
    )
    expect(mockAxios.get).toBeCalled()
    expect(actual).toEqual(
      'https://gist.github.com/g-six/09d66d3ea3662c51820c91ddfe7b9ec4',
    )
  })
})
