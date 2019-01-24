// Action Types
import { GAME_END_GAME } from 'actions/types';

export const initialState = {
  gameOver: false
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_END_GAME:
      return {
        ...state,
        gameOver: true
      };
    default:
      return state;
  }
};

export default gameReducer;
