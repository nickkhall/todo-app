import React from 'react';

// MUI Components
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

// Components
import ConnectBoardTableBody from './partials/connectBoardTableBody';

const columnArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const ConnectBoard = ({ classes, board, onColumnClick }) => (
  <Table>
    <TableHead>
      <TableRow>
        {
          columnArr.map(c => (
            <TableCell
              colSpan={1}
              className={classes.column}
              onClick={({ currentTarget: { innerText } }) => onColumnClick(innerText)}
            >
              { c }
            </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
    <ConnectBoardTableBody board={board} />
  </Table>
);

export default ConnectBoard;
