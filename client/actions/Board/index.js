// Action Types
import { BOARD_ADD_PIECE } from 'actions/types';

// Actions
import { changePlayers } from 'actions/Players';
import { endGame } from 'actions/Game';

export const checkForWinner = () => (dispatch, getAppState) => {
  const { boardReducer: board } = getAppState();

  Object.keys(board).map((b, i, arr) => {
    // Check for horizontal matches
    if (
      board[b]
      && (((board[b] === board[`${arr[i + 6]}`]) && (board[b] === board[`${arr[i + 12]}`]) && (board[b] === board[`${arr[i + 18]}`]))
      || ((board[b] === board[`${arr[i - 6]}`]) && (board[b] === board[`${arr[i - 12]}`]) && (board[b] === board[`${arr[i - 18]}`])))
    ) {
      dispatch(endGame());
      return b;
    }

    return b;
  });
};

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

  dispatch(checkForWinner());

  return dispatch(changePlayers());
};
