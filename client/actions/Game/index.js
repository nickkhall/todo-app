// Action Types
import {
  GAME_END_GAME
} from 'actions/types';

/**
 * Ends the game. Plain and simple.
 */
export const endGame = () => dispatch => dispatch({
  type: GAME_END_GAME
});
