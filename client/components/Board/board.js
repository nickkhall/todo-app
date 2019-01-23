import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// MUI Components

// Components
import ContentSection from 'components/Layout/ContentSection';
import Moves from 'components/Moves';

// Styles
import styles from './styles';

const Board = ({ classes, pieces, player }) => (
  <ContentSection>
    <Moves />
  </ContentSection>
);

export const BoardJest = Board;
export default withStyles(styles)(Board);
