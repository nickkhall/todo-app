// Action Types
import { PLAYER_SET_PLAYERS } from 'actions/types';

/**
 * Sets the current Players colors.
 * @param {string} player1 The color choice of Player 1.
 * @param {string} player2 The color choice of Player 2.
 * @return {!Object} The object to be dispatched containing the Players colors.
 */
export const setPlayers = player1Color => (dispatch) => {
  const player2Color = player1Color === 'green' ? 'yellow' : 'green';

  return dispatch({
    type: PLAYER_SET_PLAYERS,
    payload: {
      player1: player1Color,
      player2: player2Color
    }
  });
};
