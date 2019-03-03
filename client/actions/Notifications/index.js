import { guidGenerator } from 'utils/formatter';

import {
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE
} from '../types';

/**
 * Toggles a notification to the user.
 * @param {boolean} notification Whether to show or hide notification.
 * @param {string} message Custom message to show user.
 * @param {string} type The type of notification to display.
 * @param {number=} duration The optional amount of of time show the message.
 */
export const toggleNotification = (message, type, duration) => (dispatch) => {
  const id = guidGenerator();

  dispatch({
    type: NOTIFICATION_ADD,
    payload: { message, type, id }
  });

  setTimeout(() => {
    dispatch({
      type: NOTIFICATION_REMOVE,
      payload: id
    });
  }, duration || 5000);
};
