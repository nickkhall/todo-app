import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';

// Components
import BaseConfirmModal from 'components/Modals/BaseConfirmModal';

// Constants
import { MODALS_DELETE_TODO } from 'copy/Components/modals';

const DeleteTodoModal = ({
  classes,
  currentTodo,
  onDeleteClick
}) =>
  currentTodo && (
    <BaseConfirmModal
      title="Confirm Todo Deletion"
      name={MODALS_DELETE_TODO}
      saveButtonText="Delete"
      saveButtonAction={onDeleteClick}
    >
      <div className={classes.deleteTodoModal}>
        <Typography variant="subheading">
          Are you sure you want to delete
          <em className={classes.todoName}> { currentTodo.name } </em>
          ?
        </Typography>
      </div>
    </BaseConfirmModal>
  );

export default DeleteTodoModal;
