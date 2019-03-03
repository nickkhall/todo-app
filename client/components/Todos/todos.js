import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

// Components
import PageWrapper from 'components/PageWrapper';
import CenteredContent from 'components/Layout/CenteredContent';
import Loader from 'components/Loading';
import Todo from 'components/Todo';
import CreateTodoModal from 'components/Modals/Todo/Create';
import DeleteTodoModal from 'components/Modals/Todo/Delete';
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
      onCreateClick,
      onDeleteClick
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
              ? todos.map(t => (
                <div className={classes.todoContainer} key={t.id}>
                  <Todo {...t} />
                  <Icon
                    className={classes.todoDelete}
                    onClick={() => onDeleteClick(t)}
                  >
                    delete_forever
                  </Icon>
                </div>
              ))
              : <NoTodos />
          }
        </CenteredContent>
        <CreateTodoModal />
        <DeleteTodoModal />
      </PageWrapper>
    );
  }
}

export default Todos;
