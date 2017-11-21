import { combineReducers } from 'redux'

import { mergeEntities, getPayload, makeIsFetching } from '../utils'

import { FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS } from './actionTypes'
import { PERSON_SCHEMA } from './schemas'

const peopleById = (state = {}, { type, ...action }) => {
  if (type == FETCH_PEOPLE_SUCCESS) {
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

const currentPage = (state = '', { type, ...action }) => {
  const { data, config } = getPayload(action)
  if (type == FETCH_PEOPLE_SUCCESS) {
    return `${config.url}`
  }
  return state
}

export const peopleReducer = combineReducers({
  peopleById,
  peopleByPage,
  currentPage,
  isFetching: makeIsFetching(FETCH_PEOPLE)
})
