import { connect } from 'react-redux';

// Actions
import { getAllTodos } from 'actions/Todos';
import Todos from './todos';

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getAllTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
