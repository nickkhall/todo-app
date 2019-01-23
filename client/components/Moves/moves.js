import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
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
    console.log({ value });
  }

  render() {
    const { isOpen, currentMove } = this.state;
    const { classes } = this.props;

    return (
      <section className={classes.moves}>
        <Typography variant="title">Choose Your Next Move</Typography>
        <FormControl className={classes.movesForm}>
          <Select
            open={isOpen}
            onOpen={this.toggleMenu}
            value={currentMove}
            onClose={this.toggleMenu}
          >
            {
              ['A - 2', 'A - 3', 'A - 4'].map(column => (
                <MenuItem
                  key={column}
                  value={column}
                  onClick={this.handleOnChange}
                >
                  { column }
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </section>
    );
  }
}

export default Moves;
