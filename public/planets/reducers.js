import { combineReducers } from 'redux'

import { mergeEntities, makeIsFetching } from '../utils'

import {
  FETCH_PLANET,
  FETCH_PLANET_SUCCESS,
  FETCH_PLANET_FAILURE,
} from './actionTypes'

import { PLANET_SCHEMA } from './schemas'

const planetsById = (state = {}, { type, ...action }) => {
  if (type == FETCH_PLANET_SUCCESS) {
    return mergeEntities(state, action, PLANET_SCHEMA.key)
  }

  return state
}

const error = (state = false, { type, ...action }) => {
  if (type == FETCH_PLANET_FAILURE) {
    return true
  }

  return state
}

export const planetsReducer = combineReducers({
  planetsById,
  isFetching: makeIsFetching(FETCH_PLANET)
})
