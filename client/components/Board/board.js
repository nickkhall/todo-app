import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// MUI Components
import Divider from '@material-ui/core/Divider';

// Components
import ContentSection from 'components/Layout/ContentSection';
import Moves from 'components/Moves';
import ConnectBoard from 'components/ConnectBoard';

// Styles
import styles from './styles';

const Board = ({ classes, pieces, player }) => (
  <ContentSection>
    <Moves />
    <Divider />
    <ConnectBoard />
  </ContentSection>
);

export const BoardJest = Board;
export default withStyles(styles)(Board);
