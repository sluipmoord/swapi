
export const makeFetchAction = (type, schema, path) => (options = {}) => {
  let url = path

  const {
    id = null,
    page
  } = options

  const params = {
    page
  }

  if (id) {
    url = `${path}/${id}`
  }
  console.log(type);
  return {
    type,
    payload: {
      request: { url, params }
    },
    response: { schema }
  }
}
