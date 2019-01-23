import React from 'react';

// MUI Components
import Paper from '@material-ui/core/Paper';

export default ({ children, classes }) => (
  <div className={classes.verticalScroll}>
    <Paper className={classes.paperDefault}>{children}</Paper>
  </div>
);
