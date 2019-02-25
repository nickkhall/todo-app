import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Components
import PageWrapper from 'components/PageWrapper';
import CenteredContent from 'components/Layout/CenteredContent';
import Loader from 'components/Loading';
import Todo from 'components/Todo';
import CreateTodoModal from 'components/Modals/Todo/create';

class Todos extends React.Component {
	componentDidMount() {
		if (!this.props.todos) {
			this.props.onLoad();
		}
	}

	render () {
		const {
			classes,
			todos,
			onCreateClick
		} = this.props;

		if (!todos) return <Loader />

		return (
			<PageWrapper>
				<CenteredContent>
					<aside className={classes.todosAside}>
						<div className={classes.todosAsideContent}>
							<Typography variant="display1">Todos</Typography>
							<Button
								className={classes.btn}
								onClick={onCreateClick}
							>
								Create
							</Button>
						</div>
					</aside>
					{
						todos.map(t => <Todo key={t.id} {...t} />)
					}
				</CenteredContent>
				<CreateTodoModal />
			</PageWrapper>
		);
	}
};

export default Todos;
