// Action Types
import {
  GAME_END_GAME,
  GAME_RESET_GAME
} from 'actions/types';

export const initialState = {
  gameOver: false,
  winner: null,
  winnerColor: null
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_END_GAME:
      return {
        ...state,
        gameOver: true,
        winner: action.payload.winner,
        winnerColor: action.payload.winnerColor
      };
    case GAME_RESET_GAME:
      return {
        ...state,
        gameOver: false
      };
    default:
      return state;
  }
};

export default gameReducer;
