import React from 'react';

// Components
import PageWrapper from 'components/PageWrapper';
import ContentSection from 'components/Layout/ContentSection';
import Board from 'components/Board';
import AssignPlayersModal from 'components/Modals/Players/AssignPlayers';

const Game = ({ player1, player2, onLoad }) => {
  if (!player1 || !player2) {
    onLoad();
  }

  return (
    <PageWrapper>
      {
        player1 && player2 && (
          <ContentSection>
            <Board />
          </ContentSection>
        )
      }
      <AssignPlayersModal />
    </PageWrapper>
  );
};

export default Game;
