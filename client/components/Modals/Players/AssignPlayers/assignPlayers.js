import React from 'react';

// MUI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Components
import BaseConfirmModal from 'components/Modals/BaseConfirmModal';

// Constants
import { MODALS_ASSIGN_PLAYERS } from 'copy/Components/modals';

const AssignPlayersModal = ({ classes }) => (
  <BaseConfirmModal
    title="Assign Players"
    name={MODALS_ASSIGN_PLAYERS}
    autoScrollBodyContent
  >
    <Card className={classes.red}>
      <CardContent>
        Red
      </CardContent>
    </Card>
    <Card className={classes.yellow}>
      <CardContent>
        Yellow
      </CardContent>
    </Card>
  </BaseConfirmModal>
);

export default AssignPlayersModal;
