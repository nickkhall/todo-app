import React from 'react';

// MUI Components
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import Main from 'components/Main';

const PageWrapper = ({ children, classes }) => (
  <div className={classes.pageWrapper}>
    <CssBaseline />
    <Main>
      { children }
    </Main>
  </div>
);

export default PageWrapper;
