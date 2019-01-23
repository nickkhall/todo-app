import React from 'react';

// MUI Components
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// Utils
import { getActiveModal } from 'utils/modals';

class Modal extends React.Component {
  isOpen() {
    const { modalStack, name } = this.props;
    const { name: activeModalName } = getActiveModal(modalStack);
    return activeModalName === name;
  }

  render() {
    const {
      actions,
      title,
      children,
      onClose
    } = this.props;

    if (!this.isOpen()) return null;

    return (
      <Dialog
        onExiting={onClose}
        actions={actions}
        open
        scroll="paper"
        style={{ padding: 0 }}
        fullWidth
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick
      >
        <DialogTitle>{ title }</DialogTitle>
        { children }
      </Dialog>
    );
  }
}

export default Modal;
