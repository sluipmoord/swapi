import { makeFetchAction } from '../utils'

import { PEOPLE_SCHEMA } from './schemas'
import { FETCH_PEOPLE } from './actionTypes'


export const fetchPeople = makeFetchAction(FETCH_PEOPLE, PEOPLE_SCHEMA, '/people')
