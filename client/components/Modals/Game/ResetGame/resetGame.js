import React from 'react';

// MUI Components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Components
import BaseModal from 'components/Modals/baseModal';

// Constants
import { MODALS_RESET_GAME } from 'copy/Components/modals';

const ResetGameModal = ({ winner, onSave }) => (
  <BaseModal
    title="WINNER!"
    name={MODALS_RESET_GAME}
    autoScrollBodyContent
  >
    <Typography variant="display2">
      Congratulations!
    </Typography>
    <Typography variant="display1">
      { winner && winner }
      {' '}
      is the winner!
    </Typography>
    <Typography variant="title">
      Please reset the game to play again.
    </Typography>
    <Button onClick={onSave}>
      Restart
    </Button>
  </BaseModal>
);

export default ResetGameModal;
