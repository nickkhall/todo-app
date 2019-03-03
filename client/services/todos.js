// Utils
import { makeRequest, defaultCatch } from 'utils/services';

/**
 * Gets all Todos.
 * @return {!Promise} A promise containing all Todos.
 */
export const getTodos = () =>
  makeRequest('http://localhost:3000/todos', 'GET')
    .catch(defaultCatch('getTodos'));
