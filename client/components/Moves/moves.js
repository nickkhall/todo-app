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
      isOpen: false,
      currentMove: ''
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  toggleMenu() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleOnChange({ target: { value } }) {
    this.setState({
      currentMove: value,
      isOpen: false
    });
  }

  render() {
    const { isOpen, currentMove } = this.state;
    const { classes } = this.props;

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
            value={currentMove}
            onChange={this.handleOnChange}
            onClose={this.toggleMenu}
            menuProps={{ style: { width: '62%' } }}
          >
            {
            ['A - 2', 'A - 3', 'A - 4'].map(column => (
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
