/* eslint-disable no-console */
import axios from 'axios';

// Errors
import { API_ERRORS } from 'copy/Global/errors';

export const defaultCatch = (endPoint, source = 'services') => (e) => {
  console.error(`${source}/${endPoint}`, e);
  const errMessage = e.response.data.message || e.response.data.error;
  throw new Error(errMessage, e);
};
/**
 * Request wrapper for all request types (GET, POST, PUT, DELETE, etc).
 * @param {!Object} config The request configuration.
 * @param {string} config.url The URL for the request.
 * @param {string} config.method The method (GET, POST, etc) for the request.
 * @param {!Object} config.payload Optional request payload.
 * @return {!Promise} Promise containing the axios response.
 */
export const makeRequest = (url, method, payload) => axios({
  method,
  url,
  ...(
    payload ? { data: payload } : {}
  )
})
  .then((res) => {
    if (res && (res.status >= 200 || res.status < 400)) {
      return res;
    }
    throw new Error(API_ERRORS.BAD_REQUEST);
  })
  .then((res) => {
    if ('location' in res.headers) {
      return makeRequest(res.headers.location, 'GET', null, true);
    }

    return res;
  });
