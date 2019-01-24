import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { addPiece } from 'actions/Board';

// Styles
import styles from './styles';

// Components
import Moves from './moves';

const mapDispatchToProps = dispatch => ({
  onSave: (...args) => dispatch(addPiece(...args))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Moves));
