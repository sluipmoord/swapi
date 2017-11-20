import { schema } from 'normalizr'


export const PERSON_SCHEMA = new schema.Entity('person', {}, {
  idAttribute: 'url'
})

export const PEOPLE_SCHEMA = [PERSON_SCHEMA]
