import React from 'react';

// MUI Components
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Todo = ({ classes, name, completed }) => {
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
        <Typography variant="caption">Completed: </Typography>
        <Typography variant="caption" className={classes[completedClass]}>
          { completed ? 'Yes' : 'No' }
        </Typography>
      </div>
    </Card>
  );
};

export default Todo;
