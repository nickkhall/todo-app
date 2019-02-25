import React from 'react';

// MUI Components
import Card from '@material-ui/core/Card';

const Todo = ({ name, completed }) => (
	<Card className={classes.todo}>
		<Typography variant="title">{ name }</Typography>
		{ completed } 
	</Card>
);

export default Todo;

