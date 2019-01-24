import React from 'react';

// MUI Components
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

// Components
import ConnectBoardTableBody from './partials/connectBoardTableBody';

const ConnectBoard = ({ board }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>A</TableCell>
        <TableCell>B</TableCell>
        <TableCell>C</TableCell>
        <TableCell>D</TableCell>
        <TableCell>E</TableCell>
        <TableCell>F</TableCell>
        <TableCell>G</TableCell>
      </TableRow>
    </TableHead>
    <ConnectBoardTableBody board={board} />
  </Table>
);

export default ConnectBoard;
