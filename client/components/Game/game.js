import React from 'react';

// Components
import PageWrapper from 'components/PageWrapper';
import ContentSection from 'components/Layout/ContentSection';
import AssignPlayersModal from 'components/Modals/Players/AssignPlayers';

const Game = ({ player1, player2, onLoad }) => {
  if (!player1 || !player2) {
    onLoad();
  }

  return (
    <PageWrapper>
      <ContentSection>
        <AssignPlayersModal />
      </ContentSection>
    </PageWrapper>
  );
};

export default Game;
