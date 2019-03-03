import React from 'react';

// MUI Components
import Fade from '@material-ui/core/Fade';

// Constants
import { DEFAULT_STACK_LIMIT } from './constants';

const Notification = ({
  classes,
  notifications,
  stackLimit = DEFAULT_STACK_LIMIT
}) => {
  if (!notifications || !notifications.length) return null;

  // Limit the notification stack to the user-defined limit, or the default
  // stack limit.
  const stack = notifications.slice(
    Math.max(notifications.length - stackLimit, 0)
  );

  return (
    <div className={classes.wrapper}>
      {
        stack.map(({ message, type, id }) => (
          <Fade
            key={id}
            in
            timeout={{ enter: 1000, exit: 1000 }}
          >
            <div className={classes.notification}>
              <div className={`${classes.content} ${classes[type]}`}>
                {message}
              </div>
            </div>
          </Fade>
        ))
      }
    </div>
  );
};

export default Notification;
