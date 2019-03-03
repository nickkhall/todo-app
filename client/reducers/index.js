import modalsReducer, { initialState as initialModalsState } from './Modals';
import todosReducer, { initialState as initialTodosState } from './Todos';

export const initialStates = {
  modalsReducer: initialModalsState,
  todosReducer: initialTodosState
};

const reducers = {
  modalsReducer,
  todosReducer
};

export default reducers;
