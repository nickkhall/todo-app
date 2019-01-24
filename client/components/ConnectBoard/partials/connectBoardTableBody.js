import React from 'react';

// MUI Components
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// Components
import Piece from 'components/Piece';

const rows = Array(6).fill(null);
const columns = 'abcdefg'.split('');

const ConnectBoardTableBody = ({ board }) => (
  <TableBody>
    {
      rows.map((r, rI) => (
        <TableRow key={`${r}${rI + 1}`}>
          { columns.map(c => (
            <TableCell key={`${c}${rI + 1}`}>
              <Piece color={board[`${c}${rI + 1}`]} />
            </TableCell>
          )) }
        </TableRow>
      ))
    }
  </TableBody>
);

export default ConnectBoardTableBody;
