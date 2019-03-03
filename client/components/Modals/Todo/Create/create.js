import React from 'react';

// MUI Components
import TextField from '@material-ui/core/TextField';

// Components
import BaseConfirmModal from 'components/Modals/BaseConfirmModal';

// Constants
import { MODALS_CREATE_TODO } from 'copy/Components/modals';
import { FormFields } from './constants';

class CreateTodoModal extends React.Component {
  constructor() {
    super();

    /* eslint-disable react/no-unused-state */
    // Temporary until actions get implemented
    this.state = {
      name: '',
      touched: false
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { value } }, key) {
    this.setState({
      [key]: value,
      touched: true
    });
  }

  /* eslint-disable class-methods-use-this */
  // Temporary until actions get implemented
  handleOnSubmit(e) {
    e.preventDefault();

    const { onCreate } = this.props;
    const { touched } = this.state;

    if (touched) {
      onCreate(this.state);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <BaseConfirmModal
        title="Create Todo"
        name={MODALS_CREATE_TODO}
        saveButtonText="Create"
        autoScrollBodyContent
        saveButtonAction={this.handleOnSubmit}
      >
        <form onSubmit={this.handleOnSubmit}>
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
      </BaseConfirmModal>
    );
  }
}

export default CreateTodoModal;
