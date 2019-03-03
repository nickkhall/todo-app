// Services
import {
  getTodos,
  createTodo
} from 'services/todos';

// Action Types
import {
  TODOS_GET_TODOS,
  TODOS_CREATE_TODO
} from '../types';

/**
 * Gets all Todos.
 * @returns {!Promise} An Promise containing of all the Todos.
 */
export const getAllTodos = () => dispatch =>
  getTodos()
    .then(res => res.data)
    .then(todos => dispatch({
      type: TODOS_GET_TODOS,
      payload: todos
    }))
    .catch((err) => {
      // @TODO: Implement Notifications
      /* eslint-disable no-console */
      console.error(err); // Temporary
      /* eslint-enable */
    });

/**
 * Creates a Todo.
 * @param {!Object} todo The todo to be created.
 * @return {!Promise} A promise containing the newly created Todo.
 */
export const createSingleTodo = todo => dispatch =>
  createTodo(todo)
    .then(res => res.data)
    .then(newTodo => dispatch({
      type: TODOS_CREATE_TODO,
      payload: newTodo
    }))
    .then(() => dispatch(getAllTodos()))
    .catch((err) => {
      // @NOTE: Temporary until I add Notifications.
      console.error(err);
    });
