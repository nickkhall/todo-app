import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { getAllTodos } from 'actions/Todos';
import { setModal } from 'actions/Modals'; 

// Components
import Todos from './todos';

// Styles
import styles from './styles';
import buttonStyles from 'components/Styles/buttons';

// Utils
import { combineStyles } from 'utils/styles';

// Constants
import { MODALS_CREATE_TODO } from 'copy/Components/modals';

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getAllTodos()),
	onCreateClick: () => dispatch(setModal(MODALS_CREATE_TODO))
});

const combinedStyles = combineStyles(buttonStyles, styles);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(combinedStyles)(Todos));
