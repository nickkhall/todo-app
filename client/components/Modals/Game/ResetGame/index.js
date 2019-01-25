import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { resetGame } from 'actions/Game';

// Components
import ResetGameModal from './resetGame';

// Styles
import styles from './styles';

const mapStateToProps = state => ({
  winner: state.gameReducer.winner,
  winnerColor: state.gameReducer.winnerColor
});

const mapDispatchToProps = dispatch => ({
  onSave: () => dispatch(resetGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResetGameModal));
