import { combineReducers } from 'redux'

import { mergeEntities, getPayload, makeIsFetching } from '../utils'

import {
  FETCH_PEOPLE,
  FETCH_PERSON,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PERSON_SUCCESS,
  FETCH_PEOPLE_FAILURE,
  FETCH_PERSON_FAILURE,
} from './actionTypes'
import { PERSON_SCHEMA } from './schemas'

const peopleById = (state = {}, { type, ...action }) => {
  if (type == FETCH_PEOPLE_SUCCESS || type == FETCH_PERSON_SUCCESS) {
    return mergeEntities(state, action, PERSON_SCHEMA.key)
  }

  return state
}

const peopleByPage = (state = {}, { type, ...action }) => {
  const { data, config } = getPayload(action)
  if (type == FETCH_PEOPLE_SUCCESS) {
    return {
      ...state,
      [config.url]: [
        ...data.result
      ]
    }

  }
  return state
}

const pagination = (state = {
  current: null,
  next: null,
  previous: null,
  total: 0
}, { type, ...action }) => {
  const { data, config } = getPayload(action)
  if (type == FETCH_PEOPLE_SUCCESS) {
    return {
      ...state,
      current: `${config.url}`,
      next: data.next,
      previous: data.previous,
      total: data.count
    }
  }
  return state
}

const error = (state = false, { type, ...action }) => {
  if (type == FETCH_PEOPLE_FAILURE || type == FETCH_PERSON_FAILURE) {
    return true
  }

  return state
}

export const peopleReducer = combineReducers({
  peopleById,
  peopleByPage,
  pagination,
  error,
  isFetching: makeIsFetching(FETCH_PEOPLE),
  isFetchingPerson: makeIsFetching(FETCH_PERSON)
})
