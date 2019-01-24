import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { setModal } from 'actions/Modals';

// Constants
import { MODALS_ASSIGN_PLAYERS } from 'copy/Components/modals';

// Components
import Game from './game';

// Styles
import styles from './styles';

const mapStateToProps = state => ({
  player1: state.playersReducer.player1,
  player2: state.playersReducer.player2,
  currentPlayer: state.playersReducer.currentPlayer
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(setModal(MODALS_ASSIGN_PLAYERS))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Game));
