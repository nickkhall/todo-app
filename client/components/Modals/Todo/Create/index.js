import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { createSingleTodo } from 'actions/Todos';
import { closeModal } from 'actions/Modals';

// Components
import CreateTodoModal from './create';

// Styles
import styles from './styles';

const mapDispatchToProps = dispatch => ({
  onCreate: (...args) => {
    dispatch(closeModal());
    return dispatch(createSingleTodo(...args));
  }
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateTodoModal));
