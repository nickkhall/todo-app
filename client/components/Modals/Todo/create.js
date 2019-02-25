import React from 'react';

// Components
import BaseConfirmModal from 'components/Modals/BaseConfirmModal';

// Constants
import { MODALS_CREATE_TODO } from 'copy/Components/modals';

const CreateTodoModal = () => (
	<BaseConfirmModal
		name={MODALS_CREATE_TODO}
		title="Create Todo"
		autoScrollBodyContent
	>
		<h1>Create Todo</h1>		
	</BaseConfirmModal>
);

export default CreateTodoModal;

