
export const getPerson = ({ state, url }) => state.people.peopleById[url]
export const getPeople = ({ state, page }) => {
  const peopleByPage = state.people.peopleByPage[page] || []
  return peopleByPage.map((url) => getPerson({ state, url }))
}
