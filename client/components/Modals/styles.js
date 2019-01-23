import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';

export default {
  cardContent: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px !important',
    width: '100%',
    '& > *': {
      display: 'inline-block'
    }
  },
  cardYellow: {
    alignItems: 'center',
    background: yellow[500],
    display: 'flex',
    margin: '10px 0',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  cardGreen: {
    alignItems: 'center',
    background: green[500],
    color: '#FFF',
    display: 'flex',
    margin: '10px 0',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  playerText: {
    background: '#000',
    borderRadius: '3px',
    fontStyle: 'bold',
    color: '#FFF',
    padding: '5px'
  }
};
