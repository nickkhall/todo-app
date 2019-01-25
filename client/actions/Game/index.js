// Action Types
import {
  GAME_END_GAME,
  GAME_RESET_GAME
} from 'actions/types';

// Actions
import { setModal } from 'actions/Modals';

// Constants
import { MODALS_RESET_GAME } from 'copy/Components/modals';

/**
 * Ends the game. Plain and simple.
 */
export const endGame = () => (dispatch) => {
  dispatch({
    type: GAME_END_GAME
  });

  return dispatch(setModal(MODALS_RESET_GAME));
};

export const resetGame = () => dispatch => dispatch({
  type: GAME_RESET_GAME
});
