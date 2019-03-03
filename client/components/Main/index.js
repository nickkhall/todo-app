import { connect } from 'react-redux';

// React Router
import { withRouter } from 'react-router-dom';

// MUI Components
import { withStyles } from '@material-ui/core/styles';

// Components
import Main from './main';

// Local styles
import styles from './styles';

const mapStateToProps = state => ({
  notifications: state.notificationsReducer.notifications
});

export default withRouter(
  connect(mapStateToProps, null)(withStyles(styles)(Main))
);
