// Action Types
import { PLAYER_SET_PLAYERS } from 'actions/types';

export const initialState = {
  player1: null,
  player2: null,
  currentPlayer: null
};

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_SET_PLAYERS:
      return {
        ...state,
        player1: action.payload.player1,
        player2: action.payload.player2,
        currentPlayer: action.payload.currentPlayer
      };
    default:
      return state;
  }
};

export default playersReducer;
