import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Components
import PageWrapper from 'components/PageWrapper';
import CenteredContent from 'components/Layout/CenteredContent';
import Loader from 'components/Loading';
import Todo from 'components/Todo';
import CreateTodoModal from 'components/Modals/Todo/Create';
import NoTodos from './noTodos';

class Todos extends React.Component {
  componentDidMount() {
    const { onLoad, todos } = this.props;
    if (!todos) {
      onLoad();
    }
  }

  render() {
    const {
      classes,
      todos,
      onCreateClick
    } = this.props;

    if (!todos) return <Loader />;

    return (
      <PageWrapper>
        <CenteredContent>
          <aside className={classes.todosAside}>
            <Typography variant="display1">Todos</Typography>
            <Button
              className={classes.btn}
              onClick={onCreateClick}
            >
                Create
            </Button>
          </aside>
          {
            todos.length
              ? todos.map(t => <Todo key={t.id} {...t} />)
              : <NoTodos />
          }
        </CenteredContent>
        <CreateTodoModal />
      </PageWrapper>
    );
  }
}

export default Todos;
