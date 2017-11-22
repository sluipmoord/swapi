
export const makeFetchAction = (type, schema, path) => (options = {}) => {
  let fetchUrl = path

  const {
    id = null,
    page,
    url,
    filter = {}
  } = options

  const params = {
    page,
    search: filter.name
  }

  if (id) {
    fetchUrl = `${path}/${id}`
  } else if (url) {
    fetchUrl = url
  }
  fetchUrl = fetchUrl.replace(API_BASE_URL, '')
  return {
    type,
    payload: {
      options: {
        returnRejectedPromiseOnError: true,
      },
      request: { url: fetchUrl, params, filter }
    },
    response: { schema, fetchUrl, filter }
  }
}
