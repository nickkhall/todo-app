import {
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE
} from 'actions/types';

// Components
import reducer, { initialState } from './index';

const mockNotification = {
  id: Date.now(),
  message: Date.now(),
  type: 'error'
};

describe('Notifications Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle adding a notification', () => {
    // Setup the action for the reducer.
    const action = { type: NOTIFICATION_ADD, payload: mockNotification };
    const { notifications } = reducer(initialState, action);

    expect(notifications).toContain(mockNotification);
  });

  it('should handle adding a notification', () => {
    // Setup the action for the reducer.
    const addAction = { type: NOTIFICATION_ADD, payload: mockNotification };
    expect(reducer(initialState, addAction).notifications)
      .toContain(mockNotification);

    // Now, remove the notification and assert it's no longer there.
    const removeAction = { type: NOTIFICATION_REMOVE, payload: mockNotification.id };
    expect(reducer(initialState, removeAction).notifications)
      .not.toContain(mockNotification);
  });
});
