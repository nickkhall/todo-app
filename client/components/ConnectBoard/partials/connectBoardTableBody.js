import React from 'react';

// MUI Components
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ConnectBoardTableBody = ({ board }) => (
  <TableBody>
    {
      board.map(({ column }) => (
        <TableRow>
          {
              column.map(c => (
                <TableCell key={c}>
                  { c }
                </TableCell>
              ))
            }
        </TableRow>
      ))
    }
  </TableBody>
);

export default ConnectBoardTableBody;
