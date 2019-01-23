import React from 'react';

// Components
import PageWrapper from 'components/PageWrapper';
import Board from 'components/Board';
import AssignPlayersModal from 'components/Modals/Players/AssignPlayers';

const Game = ({ player1, player2, onLoad }) => {
  if (!player1 || !player2) {
    onLoad();
  }

  return (
    <PageWrapper>
      { player1 && player2 && <Board /> }
      { !player1 && !player2 && <AssignPlayersModal /> }
    </PageWrapper>
  );
};

export default Game;
