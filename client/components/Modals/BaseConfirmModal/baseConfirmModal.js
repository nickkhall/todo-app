import React from 'react';

// MUI Components
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

// Components
import SaveButton from 'components/Common/Buttons/saveButton';
import CancelButton from 'components/Common/Buttons/cancelButton';

// Base Modal
import BaseModal from 'components/Modals/BaseModal';

const handleButtonEvent = (onCancel, buttonAction) => {
  if (buttonAction) {
    const ret = buttonAction();
    if (ret === false) return;
  }

  onCancel();
};

const BaseConfirmModal = ({
  onCancel,
  cancelButtonAction,
  saveButtonAction,
  children,
  title,
  saveButtonText,
  ...ModalProps
}) => (
  <BaseModal
    title={title}
    {...ModalProps}
  >
    <DialogContent>
      {children}
    </DialogContent>
    <DialogActions>
      <CancelButton
        action={() => handleButtonEvent(onCancel, cancelButtonAction)}
        name="cancelButton"
      />
      <SaveButton
        action={() => handleButtonEvent(onCancel, saveButtonAction)}
        text={saveButtonText}
        name="saveButton"
      />
    </DialogActions>
  </BaseModal>
);

export default BaseConfirmModal;
