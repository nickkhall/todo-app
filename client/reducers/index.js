import modalsReducer, { initialState as initialModalsState } from './Modals';
import todosReducer, { initialState as initialTodosState } from './Todos';
import notificationsReducer, { initialState as initialNotificationsState } from './Notifications';

export const initialStates = {
  modalsReducer: initialModalsState,
  todosReducer: initialTodosState,
  notificationsReducer: initialNotificationsState
};

const reducers = {
  modalsReducer,
  todosReducer,
  notificationsReducer
};

export default reducers;
