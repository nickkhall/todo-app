import gameReducer, { initialState as initialGameState } from './Game';
import playersReducer, { initialState as initialPlayersState } from './Players';
import modalsReducer, { initialState as initialModalsState } from './Modals';

export const initialStates = {
  gameReducer: initialGameState,
  playersReducer: initialPlayersState,
  modalsReducer: initialModalsState
};

const reducers = {
  gameReducer,
  playersReducer,
  modalsReducer
};

export default reducers;
