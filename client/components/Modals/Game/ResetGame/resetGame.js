import React from 'react';

// MUI Components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Components
import BaseModal from 'components/Modals/baseModal';

// Constants
import { MODALS_RESET_GAME } from 'copy/Components/modals';

const ResetGameModal = ({
  classes,
  winner,
  winnerColor,
  onSave
}) => (
  <BaseModal
    name={MODALS_RESET_GAME}
    autoScrollBodyContent
  >
    <Typography className={classes.resetGameTitle} variant="display2">
      Congratulations!
    </Typography>
    <div className={classes.resetGameTextGroup}>
      <Typography className={classes[winnerColor]} variant="display1">
        { winner && winner }
      </Typography>
      <Typography variant="display1">is the winner!</Typography>
    </div>
    <Typography className={classes.resetGameText} variant="title">
      Please restart the game to play again.
    </Typography>
    <Button
      className={classes.resetRestartBtn}
      onClick={onSave}
    >
      Restart
    </Button>
  </BaseModal>
);

export default ResetGameModal;
