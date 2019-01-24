import React from 'react';

// MUI Components
import Typography from '@material-ui/core/Typography';

// Components
import PageWrapper from 'components/PageWrapper';
import Board from 'components/Board';
import AssignPlayersModal from 'components/Modals/Players/AssignPlayers';

const Game = ({
  classes,
  player1,
  player2,
  currentPlayer,
  onLoad
}) => {
  if (!player1 || !player2) {
    onLoad();
  }

  return (
    <PageWrapper>
      <Typography variant="display1">Connect Four</Typography>
      <Typography variant="title">
        Current Player:
        <em className={classes[currentPlayer]}>{ currentPlayer && `${currentPlayer.substring(0, 1).toUpperCase()}${currentPlayer.substring(1)}` }</em>
      </Typography>
      { player1 && player2 && <Board /> }
      { !player1 && !player2 && <AssignPlayersModal /> }
    </PageWrapper>
  );
};

export default Game;
