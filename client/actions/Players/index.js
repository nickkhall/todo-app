// Action Types
import {
  PLAYER_SET_PLAYERS,
  PLAYER_CHANGE_PLAYER
} from 'actions/types';

/**
 * Sets the current Players colors.
 * @param {string} player1 The color choice of Player 1.
 * @return {!Object} The object to be dispatched containing the Players colors.
 */
export const setPlayers = player1Color => (dispatch) => {
  const player2Color = player1Color === 'green' ? 'yellow' : 'green';

  return dispatch({
    type: PLAYER_SET_PLAYERS,
    payload: {
      player1: player1Color,
      player2: player2Color,
      currentPlayer: player1Color
    }
  });
};

/**
 * Changes the current Players color. Changes who's turn it is to make a move.
 */
export const changePlayers = () => (dispatch, getAppState) => {
  const { playersReducer: { currentPlayer } } = getAppState();
  const newPlayer = currentPlayer === 'yellow' ? 'green' : 'yellow';

  return dispatch({
    type: PLAYER_CHANGE_PLAYER,
    payload: newPlayer
  });
};
