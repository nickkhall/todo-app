import React from 'react';

// MUI Components
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

// Components
import ConnectBoardTableBody from './partials/connectBoardTableBody';

class ConnectBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: []
    };
  }

  generateBoard() {
    const { board } = this.state;
  }

  render() {
    const { classes } = this.props;
    return (
      <Table>
        <TableHead>
          <TableCell>A</TableCell>
          <TableCell>B</TableCell>
          <TableCell>C</TableCell>
          <TableCell>D</TableCell>
          <TableCell>E</TableCell>
          <TableCell>F</TableCell>
          <TableCell>G</TableCell>
        </TableHead>
        <ConnectBoardTableBody />
      </Table>
    );
  }
}

export default ConnectBoard;
