// Action Types
import { TODOS_GET } from 'actions/types'; 

const initialState = {
  todos: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TODOS_GET:
			return {
				...state,
				todos: action.payload
			}
		default:
			return state;
	}
};
