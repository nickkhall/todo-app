import React from 'react';

const Main = ({
  children,
  classes
}) => (
  <main className={classes.main}>
    <div className={classes.toolbar} />
    { children }
  </main>
);

export default Main;
