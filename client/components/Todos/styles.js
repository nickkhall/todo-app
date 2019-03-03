// MUI Colors
import red from '@material-ui/core/colors/red';

export default {
  todoContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  todoDelete: {
    alignItems: 'center',
    background: red[500],
    borderRadius: '3px',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '15px',
    padding: '20px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  todosAside: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  noTodos: {
    padding: '20px 0'
  }
};
