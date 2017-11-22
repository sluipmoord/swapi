import { makeFetchAction } from '../utils'

import { PEOPLE_SCHEMA, PERSON_SCHEMA } from './schemas'
import { FETCH_PEOPLE, FETCH_PERSON } from './actionTypes'


export const fetchPeople = makeFetchAction(FETCH_PEOPLE, PEOPLE_SCHEMA, '/people')
export const fetchPerson = makeFetchAction(FETCH_PERSON, PERSON_SCHEMA, '/people')
