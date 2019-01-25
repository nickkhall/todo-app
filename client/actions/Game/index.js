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
export const endGame = () => (dispatch, getAppState) => {
  const { playersReducer: { currentPlayer, player1, player2 } } = getAppState();

  const winner = currentPlayer === player1 ? 'Player 1' : 'Player 2';
  const winnerColor = currentPlayer === player1 ? player1 : player2;

  dispatch({
    type: GAME_END_GAME,
    payload: {
      winner,
      winnerColor
    }
  });

  return dispatch(setModal(MODALS_RESET_GAME));
};

export const resetGame = () => dispatch => dispatch({
  type: GAME_RESET_GAME
});
