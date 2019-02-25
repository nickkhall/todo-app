// Services
import { getTodos } from 'services/todos';

// Action Types
import { TODOS_GET } from '../types';

export const getAllTodos = () => (dispatch) => {
  console.log('get all todos action ran');
  return getTodos()
    .then(todos => dispatch({
      type: TODOS_GET,
      payload: todos
    }))
    .catch((err) => {
      // @TODO: Implement Notifications
      console.error(err); // Temporary
    });
};
