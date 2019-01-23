// Test utils
import { testCommonComponentAttrs } from 'utils/tests';

import RouteManager from './routeManager';

const defaultProps = {
  classes: {},
  onAuthStateChange: jest.fn(),
  authed: true,
  redirect: '',
  onAppLoad: jest.fn()
};

describe('<RouteManager /> component', () => {
  testCommonComponentAttrs(RouteManager, defaultProps);
});
