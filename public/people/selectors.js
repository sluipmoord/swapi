
export const getPerson = ({ state, id }) => state.people.peopleById[id]
export const getPeople = ({ state, page }) => {
  const peopleByPage = state.people.peopleByPage[page] || []
  return peopleByPage.map((id) => getPerson({ state, id }))
}
