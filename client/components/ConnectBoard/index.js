import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Components
import ConnectBoard from './connectBoard';

// Styles
import styles from './styles';

const mapStateToProps = state => ({
  board: state.boardReducer
});

export default connect(mapStateToProps, null)(withStyles(styles)(ConnectBoard));
