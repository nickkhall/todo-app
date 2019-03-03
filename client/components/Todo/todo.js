import React from 'react';

// MUI Components
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Utils
import { getPrettyDate } from 'utils/dates';

const Todo = ({
  classes,
  name,
  completed,
  createdAt
}) => {
  const completedClass = completed ? 'completed' : 'incomplete';
  return (
    <Card className={classes.todo}>
      <Typography
        className={classes.todoTitle}
        variant="title"
        component="h2"
      >
        { name }
      </Typography>
      <Divider />
      <div>
        <Typography variant="body">Completed: </Typography>
        <Typography variant="body" className={classes[completedClass]}>
          { completed ? 'Yes' : 'No' }
        </Typography>
      </div>
      <Typography variant="caption">
        Created At: { getPrettyDate(createdAt) }
      </Typography>
    </Card>
  );
};

export default Todo;
