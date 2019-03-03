import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Styles
import styles from 'components/Styles/paper';

// MUI Components
import Paper from '@material-ui/core/Paper';

const CenteredContent = ({ children, classes }) => (
  <div className={classes.centeredContent}>
    <Paper className={classes.paperDefault}>
      {children}
    </Paper>
  </div>
);

export default withStyles(styles)(CenteredContent);
