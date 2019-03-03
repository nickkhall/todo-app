// Import React for <div /> elem in mockProps
import React from 'react';

// Material UI Components
import Dialog from '@material-ui/core/Dialog';

// Utils
// @TODO: This needs to be extracted out into its own JEST module
import {
  testingFunc,
  testCommonComponentAttrs,
  getComponentWrapper
} from 'utils/tests';

// Components
import Modal from './baseModal';

// Mock functions
const testCloseModal = testingFunc('onClose');
const mockCloseModalFn = jest.fn();

describe('<Modal /> component', () => {
  const mockProps = {
    title: 'Mock Title',
    children: <div>Hello Modal!</div>,
    onClose: mockCloseModalFn
  };

  const wrapper = getComponentWrapper(Modal, mockProps);

  testCommonComponentAttrs(Modal, mockProps);

  it('should render all components properly', () => {
    expect(wrapper.find(Dialog)).toHaveLength(1);
  });

  it(testCloseModal, () => {
    expect(mockCloseModalFn).not.toHaveBeenCalled();
    const wrapperInstance = wrapper.instance();
    wrapperInstance.props.onClose();
    expect(mockCloseModalFn).toHaveBeenCalled();
  });
});
