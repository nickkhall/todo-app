import gameReducer, { initialState as initialGameState } from './Game';
import modalsReducer, { initialState as initialModalsState } from './Modals';

export const initialStates = {
  gameReducer: initialGameState,
  modalsReducer: initialModalsState
};

const reducers = {
  gameReducer,
  modalsReducer
};

export default reducers;
