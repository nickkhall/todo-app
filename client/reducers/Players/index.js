// Action Types
import {
  PLAYER_SET_PLAYERS,
  PLAYER_CHANGE_PLAYER
} from 'actions/types';

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
    case PLAYER_CHANGE_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload
      };
    default:
      return state;
  }
};

export default playersReducer;
