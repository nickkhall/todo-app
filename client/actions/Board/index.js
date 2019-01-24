// Action Types
import { BOARD_ADD_PIECE } from 'actions/types';

// Actions
import { changePlayers } from 'actions/Players';

export const addPiece = coordinate => (dispatch, getAppState) => {
  const {
    playersReducer: { currentPlayer },
    boardReducer: board
  } = getAppState();

  const column = coordinate.toLowerCase();
  const cells = Object.keys(board).filter(k => k[0] === column);
  const topCell = cells.find(k => !!board[k]) || [0, 7];
  const coord = `${column}${parseInt(topCell[1], 10) - 1}`;

  dispatch({
    type: BOARD_ADD_PIECE,
    payload: {
      coordinate: coord,
      color: currentPlayer
    }
  });

  return dispatch(changePlayers());
};
