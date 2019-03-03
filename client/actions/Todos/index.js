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
  TODOS_CREATE_TODO,
  TODOS_SET_CUR_TODO
} from 'actions/types';

// Destructured Error messages
const {
  TODOS_GET_ERROR,
  TODOS_CREATE_ERROR,
  TODOS_DELETE_ERROR
} = ERRORS;

/**
 * Generates a dispatchable object for setting the current Todo.
 * @param {!Object} todo The Todo to be set as the current Todo.
 * @return {!Object} The object to be dispatched that contains the Todo.
 */
const generateSetTodoDispatch = todo => ({
  type: TODOS_SET_CUR_TODO,
  payload: todo
});

/**
 * Dispatches the set Todo generator to set a current Todo.
 * @param {!Object} todo The Todo to be set as the current Todo.
 */
export const setCurrentTodo = todo => dispatch =>
  dispatch(generateSetTodoDispatch(todo));

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
export const deleteSingleTodo = () => (dispatch, getAppState) => {
  const { todosReducer: { currentTodo: { id, name } } } = getAppState();

  return deleteTodo(id)
    .then(() => dispatch(getAllTodos()))
    .then(() => dispatch(toggleNotification(`${TODOS_DELETE_SUCCESS} ${name}`, 'success')))
    .catch(() => dispatch(toggleNotification(TODOS_DELETE_ERROR, 'error')));
};
