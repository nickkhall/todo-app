import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import ContentSection from 'components/Layout/ContentSection';
import ConnectBoard from 'components/ConnectBoard';

// Styles
import styles from './styles';

const Board = () => (
  <ContentSection>
    <ConnectBoard />
  </ContentSection>
);

export const BoardJest = Board;
export default withStyles(styles)(Board);
