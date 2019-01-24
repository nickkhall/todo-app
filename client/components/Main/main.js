import React from 'react';

const Main = ({ children, classes }) => (
  <main className={classes.main}>
    { children }
  </main>
);

export default Main;
