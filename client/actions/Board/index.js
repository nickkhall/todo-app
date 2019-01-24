// Action Types
import { PLAYER_MOVE } from 'actions/types';

export const addPiece = coordinate => (dispatch, getAppState) => {
  const {
    playersReducer: { currentPlayer },
    boardReducer: board
  } = getAppState();

  const column = coordinate.toLowerCase();

  // let coord;
  const cells = Object.keys(board).filter(k => k[0] === column);
  const topCell = cells.find(k => !!board[k]) || [0, 7];
  const coord = `${column}${parseInt(topCell[1], 10) - 1}`;

  return dispatch({
    type: PLAYER_MOVE,
    payload: {
      coordinate: coord,
      color: currentPlayer
    }
  });
};
