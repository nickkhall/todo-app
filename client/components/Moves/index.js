import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { addPiece } from 'actions/Board';

// Styles
import styles from './styles';

// Components
import Moves from './moves';

const mapStateToProps = state => ({
  playersMove: state.boardReducer.playersMove
});

const mapDispatchToProps = dispatch => ({
  onSave: (...args) => dispatch(addPiece(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Moves));
