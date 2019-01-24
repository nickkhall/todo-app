// Action Types
import { PLAYER_MOVE } from 'actions/types';

export const addPiece = coordinate => (dispatch, getAppState) => {
  const { playersReducer: { currentPlayer } } = getAppState();

  return dispatch({
    type: PLAYER_MOVE,
    payload: {
      coordinate,
      color: currentPlayer
    }
  });
};
