// Services
import {
  getTodos,
  createTodo,
  deleteTodo
} from 'services/todos';

// Actions
import { toggleNotification } from 'actions/Notifications';

// Constants
import { ERRORS } from 'copy/Global/errors';
import {
  TODOS_CREATE_SUCCESS,
  TODOS_DELETE_SUCCESS
} from 'copy/Global/success';

// Action Types
import {
  TODOS_GET_TODOS,
  TODOS_CREATE_TODO
} from '../types';

// Destructured Error messages
const {
  TODOS_GET_ERROR,
  TODOS_CREATE_ERROR,
  TODOS_DELETE_ERROR
} = ERRORS;

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
    .catch(() =>
      dispatch(toggleNotification(TODOS_GET_ERROR, 'error'))
    );

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
    .then(() => dispatch(toggleNotification(`${TODOS_CREATE_SUCCESS} ${todo.name}`, 'success')))
    .then(() => dispatch(getAllTodos()))
    .catch(() =>
      dispatch(toggleNotification(TODOS_CREATE_ERROR, 'error'))
    );

/**
 * Deletes a single Todo.
 * @param {string} id The ID of the Todo to be deleted.
 */
export const deleteSingleTodo = id => dispatch =>
  deleteTodo(id)
    .then(() => dispatch(getAllTodos()))
    .then(() => dispatch(toggleNotification(TODOS_DELETE_SUCCESS, 'success')))
    .catch(() => dispatch(toggleNotification(TODOS_DELETE_ERROR, 'error')));
