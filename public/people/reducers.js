import { combineReducers } from 'redux'

import { mergeEntities, getPayload } from '../utils'

import { FETCH_PEOPLE_SUCCESS } from './actionTypes'

const peopleByUrl = (state = {}, { type, ...action }) => {
  if (type == FETCH_PEOPLE_SUCCESS) {
    return mergeEntities(state, action, 'person')
  }

  return state
}

const peopleByPage = (state = [], { type, ...action }) => {
  const { data } = getPayload(action)
  if (type == FETCH_PEOPLE_SUCCESS) {
    return [
        ...state,
        ...data.result
      ]
  }
  return state
}


export const peopleReducer = combineReducers({
  peopleByUrl,
  peopleByPage
})
