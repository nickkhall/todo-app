import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Action Types
import {
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE
} from 'actions/types';

// Actions
import { toggleNotification } from './index';

const mockMessage = 'TEST!';
const mockMessageType = 'success';
const mockDuration = 1;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;

describe('Notification Actions', () => {
  beforeEach(() => {
    store = mockStore({});
  });

  it('should toggle a notification', () => {
    store.dispatch(toggleNotification(mockMessage, mockMessageType));

    const { payload, type: actionType } = store.getActions().shift();
    const { message, type } = payload;

    expect(actionType).toEqual(NOTIFICATION_ADD);
    expect(message).toBe(mockMessage);
    expect(type).toBe(mockMessageType);
  });

  it('should remove a notification after the specified time', (done) => {
    store.dispatch(toggleNotification(mockMessage, mockMessageType, mockDuration));

    setTimeout(() => {
      const actions = store.getActions();
      expect(actions).toHaveLength(2);
      expect(actions[0].type).toEqual(NOTIFICATION_ADD);
      expect(actions[1].type).toEqual(NOTIFICATION_REMOVE);

      done();
    }, mockDuration);
  });
});
