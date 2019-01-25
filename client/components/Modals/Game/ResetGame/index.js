import { connect } from 'react-redux';

// Actions
import { resetGame } from 'actions/Game';

// Components
import RestGameModal from './resetGame';

const mapStateToProps = state => ({
  winner: state.playersReducer.winner
});

const mapDispatchToProps = dispatch => ({
  onSave: () => dispatch(resetGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetGameModal);
