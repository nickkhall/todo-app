// Utils
// @TODO: This needs to be extracted out into its own JEST module
import { testCommonComponentAttrs } from 'utils/tests';

// Components
import Modal from './baseConfirmModal';

const mockSaveButtonAction = jest.fn();
const mockCloseModal = jest.fn();
const mockCancelButtonAction = jest.fn();

const mockProps = {
  closeModal: mockCloseModal,
  cancelButtonAction: mockCancelButtonAction,
  saveButtonAction: mockSaveButtonAction
};

describe('<BaseConfirmModal />', () => {
  testCommonComponentAttrs(Modal, mockProps);
});
