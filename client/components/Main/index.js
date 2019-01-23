// React Router
import { withRouter } from 'react-router-dom';

// MUI Components
import { withStyles } from '@material-ui/core/styles';

// Components
import Main from './main';

// Local styles
import styles from './styles';

export default withRouter(
  withStyles(styles)(Main)
);
