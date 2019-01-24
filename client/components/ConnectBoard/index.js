import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { addPiece } from 'actions/Board';

// Components
import ConnectBoard from './connectBoard';

// Styles
import styles from './styles';

const mapStateToProps = state => ({
  board: state.boardReducer
});

const mapDispatchToProps = dispatch => ({
  onColumnClick: (...args) => dispatch(addPiece(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ConnectBoard));
