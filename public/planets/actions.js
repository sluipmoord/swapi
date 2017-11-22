import { makeFetchAction } from '../utils'

import { PLANET_SCHEMA } from './schemas'
import { FETCH_PLANET } from './actionTypes'

export const fetchPlanet = makeFetchAction(FETCH_PEOPLE, PEOPLE_SCHEMA, '/planet')
