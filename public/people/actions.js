
import { PEOPLE_SCHEMA } from './schemas'

const FETCH_PEOPLE = 'FETCH_PEOPLE'

export const makeFetchAction = (type, schema, path) => (options = {}) => {
  let url = path
  let {
    id = null,
    params
  } = options

  if (id) {
    url = `${path}/${id}`
  }

  return {
    type,
    payload: {
      request: { url, params }
    },
    response: { schema }
  }
}

export const fetchPeople = makeFetchAction(FETCH_PEOPLE, PEOPLE_SCHEMA, '/people')
