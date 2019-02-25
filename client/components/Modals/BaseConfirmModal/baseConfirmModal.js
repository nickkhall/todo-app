import React from 'react';

// MUI Components
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

// Components
import BaseModal from 'components/Modals/baseModal';
import SaveButton from 'components/Common/Buttons/saveButton';
import CancelButton from 'components/Common/Buttons/cancelButton';

// Base Modal

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
  saveButtonText,
  children,
  title,
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
      <CancelButton action={() => handleButtonEvent(onCancel, cancelButtonAction)} />
      <SaveButton
        text={saveButtonText}
        action={() => handleButtonEvent(onCancel, saveButtonAction)}
      />
    </DialogActions>
  </BaseModal>
);

export default BaseConfirmModal;
