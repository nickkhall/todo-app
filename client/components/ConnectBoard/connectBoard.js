import React from 'react';

// MUI Components
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

// Components
import ConnectBoardTableBody from './partials/connectBoardTableBody';

const ConnectBoard = ({ classes, board }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell
          className={classes.column}
          onClick={e => console.log({ e })}
        >
          A
        </TableCell>
        <TableCell
          className={classes.column}
          onClick={e => console.log({ e })}
        >
          B
        </TableCell>
        <TableCell
          className={classes.column}
          onClick={e => console.log({ e })}
        >
          C
        </TableCell>
        <TableCell
          className={classes.column}
          onClick={e => console.log({ e })}
        >
          D
        </TableCell>
        <TableCell
          className={classes.column}
          onClick={e => console.log({ e })}
        >
          E
        </TableCell>
        <TableCell
          className={classes.column}
          onClick={e => console.log({ e })}
        >
          F
        </TableCell>
        <TableCell
          className={classes.column}
          onClick={e => console.log({ e })}
        >
          G
        </TableCell>
      </TableRow>
    </TableHead>
    <ConnectBoardTableBody board={board} />
  </Table>
);

export default ConnectBoard;
