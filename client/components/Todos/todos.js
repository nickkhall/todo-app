import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';

// Components
import PageWrapper from 'components/PageWrapper';
import CenteredContent from 'components/Layout/CenteredContent';
import Loader from 'components/Loading';

class Todos extends React.Component {
	componentDidMount() {
	  if (!this.props.todos) {
			this.props.onLoad();
		}
	}

	render () {
		const { todos } = this.props; 
		if (!todos) return <Loader />

		return (
			<PageWrapper>
				<CenteredContent>
					<Typography variant="display1">Todos</Typography>
					{
						todos.map(t => <Todo {...t} />)
					}
				</CenteredContent>
			</PageWrapper>
		);
	}
};

export default Todos;
