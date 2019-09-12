import Axios from 'axios'

export const retrieveMarkdown = async (file_path: string) => {
  let path_url = `/static/${file_path}.md`
  if (file_path.split('://').length > 1) {
    path_url = file_path
  }
  const response = await Axios.get(path_url)

  return response.data
}
