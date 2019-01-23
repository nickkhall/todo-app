export const initialState = {
  board: [
    { column: [null, null, null, null, null, null, null] },
    { column: [null, null, null, null, null, null, null] },
    { column: [null, null, null, null, null, null, null] },
    { column: [null, null, null, null, null, null, null] },
    { column: [null, null, null, null, null, null, null] },
    { column: [null, null, null, null, null, null, null] }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
