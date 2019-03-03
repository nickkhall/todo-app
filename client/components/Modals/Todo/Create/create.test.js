// Utils
import {
  testCommonComponentAttrs,
  getComponentWrapper
} from 'utils/tests';

// Styles
import styles from './styles';

// Components
import CreateTodoForm from './create';

const mockPreventDefault = jest.fn();
const mockValue = 'foo';
const mockEvent = {
  target: { value: mockValue },
  preventDefault: mockPreventDefault
};

const mockOnCreate = jest.fn();

const mockProps = {
  classes: styles,
  onCreate: mockOnCreate
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
      wrapperInstance.handleOnChange(mockEvent, 'name');
      wrapperInstance.handleOnSubmit(mockEvent);
      expect(mockPreventDefault).toHaveBeenCalled();
      expect(mockOnCreate).toHaveBeenCalled();
    });
  });
});
