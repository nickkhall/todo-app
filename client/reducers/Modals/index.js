import {
  MODAL_CLOSE_MODAL,
  MODAL_SET_MODAL
} from 'actions/types';

export const initialState = {
  modalStack: []
};

const modalsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_SET_MODAL:
      return {
        ...state,
        modalStack: [...state.modalStack, {
          name: payload.modalName,
          props: payload.modalProps
        }]
      };
    case MODAL_CLOSE_MODAL:
      // We either drop the most recent entry from the stack, or empty
      // completely if flagged to true.
      return {
        ...state,
        modalStack: payload ? [] : [...state.modalStack.slice(0, -1)]
      };
    default:
      return state;
  }
};

export default modalsReducer;
