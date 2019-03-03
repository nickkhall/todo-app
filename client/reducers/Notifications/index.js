import {
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE
} from '../../actions/types';

export const initialState = {
  notifications: []
};

const addNotification = (state, payload) => {
  const { notifications } = state;

  return {
    ...state,
    notifications: notifications.concat(payload)
  };
};

const removeNotification = (state, id) => {
  const { notifications } = state;

  return ({
    ...state,
    notifications: notifications.filter(n => n.id !== id)
  });
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case NOTIFICATION_ADD:
      return addNotification(state, payload);
    case NOTIFICATION_REMOVE:
      return removeNotification(state, payload);
    default:
      return state;
  }
};

export default reducer;
