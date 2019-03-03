// Utils
import {
  testCommonComponentAttrs,
  getComponentWrapper
} from 'utils/tests';

// Styles
import styles from './styles';

// Components
import CreateTodoForm from './form';

const mockProps = {
  classes: styles
};

const mockPreventDefault = jest.fn();
const mockValue = 'foo';
const mockEvent = {
  target: { value: mockValue },
  preventDefault: mockPreventDefault
};

let wrapper;
let wrapperInstance;

describe('<CreateTodoForm />', () => {
  testCommonComponentAttrs(CreateTodoForm, mockProps);

  beforeEach(() => {
    wrapper = getComponentWrapper(CreateTodoForm, mockProps);
    wrapperInstance = wrapper.instance();
  });

  describe('handles class methods', () => {
    it('should handle an onChange', () => {
      expect(wrapperInstance.state.name).toBe('');
      wrapperInstance.handleOnChange(mockEvent, 'name');
      expect(wrapperInstance.state.name).toBe(mockValue);
    });

    it('should handle an onSubmit', () => {
      // @NOTE: This will be updated after action is added.
      wrapperInstance.handleOnSubmit(mockEvent);
      expect(mockPreventDefault).toHaveBeenCalled();
    });
  });
});
