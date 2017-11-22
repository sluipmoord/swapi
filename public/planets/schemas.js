import { schema } from 'normalizr'

export const PLANET_SCHEMA = new schema.Entity('planet', {}, {
  idAttribute: 'url'
})

export const PLANETS_SCHEMA = [PLANET_SCHEMA]
