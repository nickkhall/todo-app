import React from 'react';

// Components
import Notification from 'components/Notifications';

const Main = ({
  children,
  classes,
  notifications
}) => (
  <main className={classes.main}>
    <Notification notifications={notifications} />
    { children }
  </main>
);

export default Main;
