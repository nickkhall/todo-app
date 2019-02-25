// Colors
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

export default {
	todo: {
		background: grey[200],
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: '20px',
		margin: '10px 0',
		'& > *': { margin: '5px 0' },
		'& span': {
			display: 'inline-block',
			margin: '0 5px'
		}
	},
	todoTitle: {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		maxWidth: '400px'
	},
	completed: {
		color: green[500]
	},
	incomplete: {
		color: red[500]}
};
