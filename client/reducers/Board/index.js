/* eslint-disable no-plusplus */
// Action Types
import { BOARD_ADD_PIECE } from 'actions/types';

export const initialState = {
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
  ],
  playersMove: '',
  playStack: [],
  availableMoves: []
};

const generateBoard = ({ playersMove, currentPlayer }, board) => {
  const column = playersMove.toLowerCase().charCodeAt(0) - 97;

  board.reverse();

  return board.map(x => x.map((y, yI) => {
    if (!x[column] && column === yI) {
      return currentPlayer;
    }

    return y;
  })).reverse();
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_ADD_PIECE:
      return {
        ...state,
        board: generateBoard(action.payload, state.board),
        playersMove: action.payload.playersMove
      };
    default:
      return state;
  }
};

export default reducer;


// const rows = Array(6).fill(null);
// const columns = 'abcdefg'.split('');
//
// const initialState = columns.reduce((o, k, i) => ({
// 	...o,
// 	...(rows.reduce((ro, _, i) => ({
// 		...ro,
// 		[`${k}${i+1}`]: null
// 	}), {}))
// }), {});
//
// const boardReducer = (state = initialState, action) => {
// 	switch(action.type) {
// 		case PLAYER_MOVE:
// 			return {
// 				...state,
// 				[action.payload.coordinate]: action.payload.color
// 			}
// 		default:
// 			return state;
// 	}
// };
//
//
// Where `action` is equal to:
//
// {
// 	type: 'PLAYER_MOVE',
// 	payload: {
// 		coordinate: 'a4',
// 		color: 'yellow'
// 	}
// }
