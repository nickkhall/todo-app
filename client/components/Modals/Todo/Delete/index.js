import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { deleteSingleTodo } from 'actions/Todos';

// Components
import DeleteTodoModal from './delete';

// Styles
import styles from './styles';

const mapStateToProps = state => ({
  currentTodo: state.todosReducer.currentTodo
});

export const mapDispatchToProps = dispatch => ({
  onDeleteClick: () => dispatch(deleteSingleTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DeleteTodoModal));
