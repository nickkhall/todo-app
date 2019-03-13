// Utils
// @TODO: This needs to be extracted out into its own JEST module
import {
  testCommonComponentAttrs,
  getComponentWrapper
} from 'utils/tests';

// Components
import CancelButton from 'components/Common/buttons/CancelButton';
import SaveButton from 'components/Common/buttons/SaveButton';
import BaseConfirmModal from './baseConfirmModal';

const mockSaveButtonAction = jest.fn();
const mockCloseModal = jest.fn();
const mockCancelButtonAction = jest.fn();

const mockProps = {
  closeModal: mockCloseModal,
  cancelButtonAction: mockCancelButtonAction,
  saveButtonAction: mockSaveButtonAction
};

let wrapper;
let wrapperInstance;
let props;

describe('<BaseConfirmModal />', () => {
  testCommonComponentAttrs(BaseConfirmModal, mockProps);

  describe('handles button actions', () => {
    beforeEach(() => {
      props = { ...mockProps };
      wrapper = getComponentWrapper(BaseConfirmModal, props);
      wrapperInstance = wrapper.instance();
    });

    it('should handle the cancel button action', () => {
      wrapper.find('[name="cancelButton"]').simulate('click');
      expect(mockCancelButtonAction).toHaveBeenCalled();
    });
  });
});
