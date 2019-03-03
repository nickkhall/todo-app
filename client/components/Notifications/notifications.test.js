// MUI Components
import Fade from '@material-ui/core/Fade';

// Test utils
import {
  getComponentWrapper,
  testCommonComponentAttrs
} from 'utils/tests';

// Components
import Notifications from './notifications';

const defaultProps = { classes: {} };

const mockStackLimit = 2;

const generateMessage = () => ({
  message: Date.now(),
  type: 'error',
  id: Date.now()
});

let wrapper;
let props;

describe('<Notifications /> component', () => {
  testCommonComponentAttrs(Notifications, defaultProps);

  describe('basic rendering', () => {
    beforeEach(() => {
      props = {
        ...defaultProps
      };

      wrapper = getComponentWrapper(Notifications, props);
    });

    it('should render the proper amount of notifications', () => {
      props.notifications = [
        generateMessage(),
        generateMessage(),
        generateMessage()
      ];

      wrapper = getComponentWrapper(Notifications, props);
      expect(wrapper.find(Fade)).toHaveLength(props.notifications.length);
    });

    it('should limit notifications to the stack limit', () => {
      props.notifications = [
        generateMessage(),
        generateMessage(),
        generateMessage()
      ];

      props.stackLimit = mockStackLimit;

      wrapper = getComponentWrapper(Notifications, props);
      expect(wrapper.find(Fade)).toHaveLength(mockStackLimit);
      expect(wrapper.find(Fade)).not.toHaveLength(props.notifications);
    });

    it('should return empty without any notifications', () => {
      wrapper = getComponentWrapper(Notifications, props);
      expect(wrapper.find(Fade)).toHaveLength(0);
    });
  });
});
