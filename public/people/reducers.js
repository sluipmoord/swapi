
export const mergeEntities = (state, action, entityKey) => {
  const { data } = getPayload(action)
  const entities = get(data, `entities.${entityKey}`)
  if (entities) {
    return merge({}, state, entities)
  }
  return state
}
