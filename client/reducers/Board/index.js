// Action Types
import { BOARD_ADD_PIECE } from 'actions/types';

export const initialState = {
  board: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    ['green', null, null, null, null, null],
    ['yellow', null, null, null, null, null]
  ],
  playersMove: '',
  playStack: [],
  availableMoves: []
};

const generateBoard = ({ move, currentPlayer }, board) => {
  const column = move.charCodeAt(0) - 97;

  return board.map((r, i) => {
    if (column === i) {
      return r.map((c) => {
        c.push(currentPlayer);
        return c;
      });
    }

    return r;
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_ADD_PIECE:
      return {
        ...state,
        ...generateBoard(action.payload, state.board)
      };
    default:
      return state;
  }
};

export default reducer;
