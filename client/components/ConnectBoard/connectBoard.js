import React from 'react';

// MUI Components
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

// Components
import ConnectBoardTableBody from './partials/connectBoardTableBody';

const ConnectBoard = ({ classes, board, onColumnClick }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell
          colSpan={1}
          className={classes.column}
          onClick={({ currentTarget: { innerText } }) => onColumnClick(innerText)}
        >
          A
        </TableCell>
        <TableCell
          colSpan={1}
          className={classes.column}
          onClick={({ currentTarget: { innerText } }) => onColumnClick(innerText)}
        >
          B
        </TableCell>
        <TableCell
          colSpan={1}
          className={classes.column}
          onClick={({ currentTarget: { innerText } }) => onColumnClick(innerText)}
        >
          C
        </TableCell>
        <TableCell
          colSpan={1}
          className={classes.column}
          onClick={({ currentTarget: { innerText } }) => onColumnClick(innerText)}
        >
          D
        </TableCell>
        <TableCell
          colSpan={1}
          className={classes.column}
          onClick={({ currentTarget: { innerText } }) => onColumnClick(innerText)}
        >
          E
        </TableCell>
        <TableCell
          colSpan={1}
          className={classes.column}
          onClick={({ currentTarget: { innerText } }) => onColumnClick(innerText)}
        >
          F
        </TableCell>
        <TableCell
          colSpan={1}
          className={classes.column}
          onClick={({ currentTarget: { innerText } }) => onColumnClick(innerText)}
        >
          G
        </TableCell>
      </TableRow>
    </TableHead>
    <ConnectBoardTableBody board={board} />
  </Table>
);

export default ConnectBoard;
