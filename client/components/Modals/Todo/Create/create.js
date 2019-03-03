import React from 'react';

// Constants
import { MODALS_CREATE_TODO } from 'copy/Components/modals';

// Components
import BaseConfirmModal from 'components/Modals/BaseConfirmModal';
import CreateTodoForm from './partials/Form';

const CreateTodoModal = () => (
  <BaseConfirmModal
    title="Create Todo"
    name={MODALS_CREATE_TODO}
    saveButtonText="Create"
    autoScrollBodyContent
  >
    <CreateTodoForm />
  </BaseConfirmModal>
);

export default CreateTodoModal;
