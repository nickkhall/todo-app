// Colors
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

export default {
  todo: {
    background: grey[100],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10px 0',
    padding: '20px',
    width: '100%',
    '& > *': { margin: '5px 0' },
    '& span': {
      display: 'inline-block',
      margin: '0 5px'
    },
    '&:hover': {
      background: grey[300],
      cursor: 'pointer'
    }
  },
  todoTitle: {
    maxWidth: '550px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  completed: {
    color: green[500]
  },
  incomplete: { color: red[500] }
};
