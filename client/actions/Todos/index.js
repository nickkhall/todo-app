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
