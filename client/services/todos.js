// Utils
import { makeRequest, defaultCatch } from 'utils/services';

/**
 * Gets all Todos.
 * @return {!Promise} A promise containing all Todos.
 */
export const getTodos = () =>
  makeRequest('http://localhost:3000/todos', 'GET')
    .catch(defaultCatch('getTodos'));

/**
 * Creates a Todo.
 @param {!Object} todo The newly created Todo object.
 @return {!Promise} A promise containing the newly created Todo.
 */
export const createTodo = todo =>
  makeRequest('http://localhost:3000/todos', 'POST', todo)
    .catch(defaultCatch('createTodo'));

/**
 * Deletes a Todo.
 * @param {string} id The ID of the Todo to be deleted.
 */
export const deleteTodo = id =>
  makeRequest(`http://localhost:3000/todos/${id}`, 'DELETE')
    .catch(defaultCatch('deleteTodo'));
