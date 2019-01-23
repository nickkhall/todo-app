// Action Types
import { GAME_SET_PLAYERS } from 'actions/types';

/**
 * Sets the current Players colors.
 * @param {string} player1 The color choice of Player 1.
 * @param {string} player2 The color choice of Player 2.
 * @return {!Object} The object to be dispatched containing the Players colors.
 */
export const setPlayers = (player1, player2) => ({
  type: GAME_SET_PLAYERS,
  payload: {
    player1,
    player2
  }
});
