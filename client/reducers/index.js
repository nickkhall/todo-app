import gameReducer, { initialState as initialGameState } from './Game';
import playersReducer, { initialState as initialPlayersState } from './Players';
import boardReducer, { initialState as initialBoardState } from './Board';
import modalsReducer, { initialState as initialModalsState } from './Modals';

export const initialStates = {
  gameReducer: initialGameState,
  playersReducer: initialPlayersState,
  boardReducer: initialBoardState,
  modalsReducer: initialModalsState
};

const reducers = {
  gameReducer,
  playersReducer,
  boardReducer,
  modalsReducer
};

export default reducers;
