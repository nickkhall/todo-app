import React from 'react';

// Components
import BaseConfirmModal from 'components/Modals/BaseConfirmModal';

// Constants
import { MODALS_DELETE_TODO } from 'copy/Components/modals';

const DeleteTodoModal = ({ name }) => (
  <BaseConfirmModal
    title="Confirm Todo Deletion"
    name={MODALS_DELETE_TODO}
    saveButtonText="Delete"
  >
    Are you sure you want to delete { name }?
  </BaseConfirmModal>
);

export default DeleteTodoModal;
