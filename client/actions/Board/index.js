// Action Types
import { BOARD_ADD_PIECE } from 'actions/types';

export const addPiece = move => (dispatch, getAppState) => {
  const { playersReducer: { currentPlayer } } = getAppState();

  return dispatch({
    type: BOARD_ADD_PIECE,
    payload: {
      move,
      currentPlayer
    }
  });
};
