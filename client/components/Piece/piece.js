import React from 'react';

// MUI Components
import Chip from '@material-ui/core/Chip';

const Piece = ({ classes, color }) => color && <Chip className={classes[color]} />;

export default Piece;
