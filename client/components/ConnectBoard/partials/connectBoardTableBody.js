import React from 'react';

// MUI Components
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// Components
import Piece from 'components/Piece';

const ConnectBoardTableBody = ({ board }) => {
  console.log({ board });
  return (
    <TableBody>
      {
        board.map(r => (
          <TableRow key={Math.random() * (150 - 1) + 1}>
            {
                r.map(c => (
                  <TableCell key={Math.random() * (50 - 1) + 1}>
                    <Piece color={c} />
                  </TableCell>
                ))
              }
          </TableRow>
        ))
      }
    </TableBody>
  );
};

export default ConnectBoardTableBody;
