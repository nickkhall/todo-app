import React from 'react';

// MUI Components
import TextField from '@material-ui/core/TextField';

// Constants
import { FormFields } from './constants';

class CreateTodoForm extends React.Component {
  constructor() {
    super();

    /* eslint-disable react/no-unused-state */
    // Temporary until actions get implemented
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { value } }, key) {
    this.setState({
      [key]: value
    });
  }

  /* eslint-disable class-methods-use-this */
  // Temporary until actions get implemented
  handleSubmit(e) {
    e.preventDefault();
    // @TODO: Create && implement Action for creating Todo.
  }

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {
          FormFields.map(f => (
            <TextField
              className={classes.formField}
              key={f.name}
              onChange={e => this.handleOnChange(e, f.name)}
              {...f}
            />
          ))
        }
      </form>
    );
  }
}

export default CreateTodoForm;
