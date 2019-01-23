import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { setPlayers } from 'actions/Players';

// Components
import AssignPlayersModal from './assignPlayers';

// Styles
import styles from '../../styles';

const mapDispatchToProps = dispatch => ({
  onSave: (...args) => dispatch(setPlayers(...args))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(AssignPlayersModal));
