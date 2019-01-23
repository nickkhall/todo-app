import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { setPlayers } from 'actions/Players';

// Utils
import { combineStyles } from 'utils/styles';

// Components
import buttonStyles from 'components/Styles/buttons';
import AssignPlayersModal from './assignPlayers';

// Styles
import styles from '../../styles';

const mapDispatchToProps = dispatch => ({
  onSave: (...args) => dispatch(setPlayers(...args))
});

const combinedStyles = combineStyles(styles, buttonStyles);

export default connect(null, mapDispatchToProps)(withStyles(combinedStyles)(AssignPlayersModal));
