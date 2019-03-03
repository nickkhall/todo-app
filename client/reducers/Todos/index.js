// Action Types
import {
  TODOS_GET_TODOS,
  TODOS_SET_CUR_TODO
} from 'actions/types';

export const initialState = {
  todos: null,
  currentTodo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS_GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case TODOS_SET_CUR_TODO:
      return {
        ...state,
        currentTodo: action.payload
      };
    default:
      return state;
  }
};
