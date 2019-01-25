import React from 'react';

// MUI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Components
import BaseConfirmModal from 'components/Modals/BaseConfirmModal';

// Constants
import { MODALS_RESET_GAME } from 'copy/Components/modals';

const ResetGameModal = ({ winner, onSave }) => (
  <BaseConfirmModal
    title="WINNER!"
    name={MODALS_RESET_GAME}
    autoScrollBodyContent
    saveButtonAction={onSave}
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
  </BaseConfirmModal>
);

export default ResetGameModal;
