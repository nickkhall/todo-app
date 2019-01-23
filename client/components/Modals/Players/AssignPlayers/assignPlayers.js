import React from 'react';

// MUI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Components
import BaseConfirmModal from 'components/Modals/BaseConfirmModal';

// Constants
import { MODALS_ASSIGN_PLAYERS } from 'copy/Components/modals';

class AssignPlayersModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player1Color: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({
      player1Color: value

    });
  }

  handleSubmit() {
    const { player1Color } = this.state;
    const { onSave } = this.props;

    if (player1Color) {
      onSave(player1Color);
    }
  }

  render() {
    const { classes } = this.props;
    const { player1Color } = this.state;

    return (
      <BaseConfirmModal
        title="Assign Player 1 Color"
        name={MODALS_ASSIGN_PLAYERS}
        autoScrollBodyContent
        saveButtonAction={this.handleSubmit}
      >
        <Typography variant="subheading">
          Player 2 will be automatically assigned the unassigned color.
        </Typography>
        <Card className={classes.cardGreen} onClick={() => this.handleChange('green')}>
          <CardContent className={classes.cardContent}>
            <em>Green</em>
            { player1Color && player1Color === 'green' && <span className={classes.playerText}>Player 1</span> }
          </CardContent>
        </Card>
        <Card className={classes.cardYellow} onClick={() => this.handleChange('yellow')}>
          <CardContent className={classes.cardContent}>
            <em>Yellow</em>
            { player1Color && player1Color === 'yellow' && <span className={classes.playerText}>Player 1</span> }
          </CardContent>
        </Card>
      </BaseConfirmModal>
    );
  }
}

export default AssignPlayersModal;
