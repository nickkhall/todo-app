import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { setModal } from 'actions/Modals';
import {
  getAllTodos,
  setCurrentTodo
} from 'actions/Todos';

// Utils
import { combineStyles } from 'utils/styles';

// Constants
import {
  MODALS_CREATE_TODO,
  MODALS_DELETE_TODO
} from 'copy/Components/modals';

// Styles
import buttonStyles from 'components/Styles/buttons';
import styles from './styles';

// Components
import Todos from './todos';

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getAllTodos()),
  onCreateClick: () => dispatch(setModal(MODALS_CREATE_TODO)),
  onDeleteClick: (...args) => {
    dispatch(setCurrentTodo(...args));
    return dispatch(setModal(MODALS_DELETE_TODO));
  }
});

const combinedStyles = combineStyles(buttonStyles, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(combinedStyles)(Todos));
