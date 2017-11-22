import { combineReducers } from 'redux'

import { mergeEntities, makeIsFetching } from '../utils'

import {
  FETCH_PERSON,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_FAILURE,
} from './actionTypes'
import { PERSON_SCHEMA } from './schemas'

const planetById = (state = {}, { type, ...action }) => {
  if (type == FETCH_PLANET_SUCCESS || type == FETCH_PERSON_SUCCESS) {
    return mergeEntities(state, action, PERSON_SCHEMA.key)
  }

  return state
}

const error = (state = false, { type, ...action }) => {
  if (type == FETCH_PLANET_FAILURE) {
    return true
  }

  return state
}

export const planetReducer = combineReducers({
  planetById,
  isFetching: makeIsFetching(FETCH_PLANET)
})
