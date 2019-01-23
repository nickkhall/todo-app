// Action Types
import {
  GAME_SET_PLAYERS
} from 'actions/types';

export const initialState = {
  gameOver: false,
  player1: null,
  player2: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_SET_PLAYERS:
      return {
        ...state,
        player1: action.payload.player1,
        player2: action.payload.player2
      };
    default:
      return state;
  }
};

export default reducer;
