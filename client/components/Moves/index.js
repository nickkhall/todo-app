import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Styles
import styles from './styles';

// Components
import Moves from './moves';

const mapStateToProps = state => ({
  columnA: state.boardReducer.columnA,
  columnB: state.boardReducer.columnB,
  columnC: state.boardReducer.columnC,
  columnD: state.boardReducer.columnD,
  columnF: state.boardReducer.columnF,
  columnG: state.boardReducer.columnG
});

export default connect(mapStateToProps, null)(withStyles(styles)(Moves));
