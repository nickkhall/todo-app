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
  const column = move.toLowerCase().charCodeAt(0) - 97;

  return board.map(r => r.map((c) => {
    if (column === c) {
      c.push(currentPlayer);
    }
    return c;
  }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_ADD_PIECE:
      return {
        ...state,
        board: generateBoard(action.payload, state.board)
      };
    default:
      return state;
  }
};

export default reducer;
