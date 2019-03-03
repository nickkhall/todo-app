import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { createSingleTodo } from 'actions/Todos';

// Components
import CreateTodoModal from './create';

// Styles
import styles from './styles';

const mapDispatchToProps = dispatch => ({
  onCreate: (...args) => dispatch(createSingleTodo(...args))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateTodoModal));
