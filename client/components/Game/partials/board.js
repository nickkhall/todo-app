import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// MUI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Styles
import styles from '../styles';

const Piece = ({ classes, color, player }) => (
  <Card className={classes[color]}>
    <CardContent>
      { player }
    </CardContent>
  </Card>
);

export const PieceJest = Piece;
export default withStyles(styles)(Piece);
