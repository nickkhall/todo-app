import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

class Moves extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { classes } = this.props;

    return (
      <section className={classes.moves}>
        <Typography variant="display1">Column</Typography>
        <Icon
          onClick={this.openMenu}
        >
          expand_more
        </Icon>
        <Menu open={isOpen}>
          { ['A - 2', 'A - 3', 'A - 4'].map(column => <MenuItem key={1}>{ column }</MenuItem>) }
        </Menu>
      </section>
    );
  }
}

export default Moves;
