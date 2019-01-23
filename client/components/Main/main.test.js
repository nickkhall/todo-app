import React from 'react';

// Test utils
import {
  testCommonComponentAttrs,
  getComponentWrapper
} from 'utils/tests';

// Components
import Main from './main';

const mockNotificationID = 'foo';
const mockNotification = {
  id: mockNotificationID,
  key: mockNotificationID
};

const defaultProps = {
  classes: {},
  children: [
    <p key="One">One</p>,
    <p key="Two">Two</p>
  ],
  currentNotification: mockNotificationID,
  notifications: [mockNotification],
  queueRouteChange: jest.fn()
};

let wrapper;

describe('<Main /> component', () => {
  testCommonComponentAttrs(Main, defaultProps);

  beforeEach(() => {
    wrapper = getComponentWrapper(Main, defaultProps);
  });

  describe('rendering', () => {
    it('should render children', () => {
      expect(wrapper.find('p')).toHaveLength(2);
    });
  });
});
