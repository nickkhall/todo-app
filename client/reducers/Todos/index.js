// Action Types
import { TODOS_GET_TODOS } from 'actions/types';

export const initialState = {
  todos: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS_GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};
