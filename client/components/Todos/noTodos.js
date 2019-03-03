import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// MUI Components
import Typography from '@material-ui/core/Typography';

// Styles
import styles from './styles';

const NoTodos = ({ classes }) => (
  <Typography
    className={classes.noTodos}
    variant="title"
  >
    No Todos. Please create a Todo to add to the list.
  </Typography>
);

export const NoTodosJest = NoTodos;

export default withStyles(styles)(NoTodos);
