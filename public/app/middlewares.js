import qs from 'qs'
import { normalize } from 'normalizr'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

const client = axios.create({
  baseURL: API_BASE_URL,
  paramsSerializer: params => qs.stringify(params, { skipNulls: true }),
  responseType: 'json'
})

export const apiMiddleware = axiosMiddleware(client, {
  errorSuffix: '_FAILURE',
  interceptors: {
    response: [{
      success: ({ action, dispatch, getState }, response) => {
        return response
      },
      error: ({ action, dispatch, getState }, error) => {
        return Promise.reject(error)
      }
    }]
  }
})

export const normalizeResponseMiddleware = store => next => action => {
   const { response: responseConfig, ...nextAction } = action
   if (responseConfig) {
     const  { schema, data } = responseConfig

      nextAction.payload.request.transformResponse = (response) => {
        response = response || {}
        const { results, status = 200, ...extraData } = response

        if (status >= 200 && status < 300 && schema) {
          try {
            if (results) {
              return {
                ...data,
                ...extraData,
                ...normalize(results, schema)
              }
            } else {
              return {
                ...data,
                ...extraData,
                ...normalize(response, schema)
              }
            }
          } catch (err) {
            console.error(err)
          }
        }

        return {
          ...data,
          ...response
        }
      }
   }

   return next(nextAction)
}
