import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';

class Moves extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  toggleMenu() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleOnChange({ target: { value } }) {
    const { onSave } = this.props;
    if (value) {
      onSave(value);
    }
  }

  render() {
    const { isOpen } = this.state;
    const { classes, playersMove } = this.props;

    return (
      <section className={classes.moves}>
        <Typography>Choose Your Move: </Typography>
        <FormGroup
          className={classes.movesForm}
          row
        >
          <Select
            className={classes.movesFormSelect}
            open={isOpen}
            onOpen={this.toggleMenu}
            value={playersMove}
            onChange={this.handleOnChange}
            onClose={this.toggleMenu}
            menuprops={{ style: { width: '62%' } }}
          >
            {
            ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(column => (
              <MenuItem
                key={column}
                value={column}
              >
                { column }
              </MenuItem>
            ))
          }
          </Select>
        </FormGroup>
        <Button className={classes.movesSubmitBtn} onClick={this.handleSubmit} type="submit">
          Submit
        </Button>
      </section>
    );
  }
}

export default Moves;
