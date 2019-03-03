// MUI Colors
import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

// Utils
import { hexToRGB } from 'utils/styles';

// Constants
import { BACKGROUND_OPACITY } from './constants';

export default theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none', /* Allow click to bleed through to elements below */
    position: 'absolute',
    top: '10px',
    zIndex: 4000,

    /* On larger displays, notifications appear at the bottom left. */
    [theme.breakpoints.up('sm')]: {
      top: 'auto',
      bottom: '10px',
      left: 0,
      minWidth: '400px'
    }
  },
  content: {
    color: '#fff',
    fontSize: '1.1em',
    padding: '20px',
    margin: '10px',
    borderRadius: '3px',
    pointerEvents: 'auto'
  },
  success: {
    backgroundColor: hexToRGB(green[600], BACKGROUND_OPACITY)
  },
  error: {
    backgroundColor: hexToRGB(red[600], BACKGROUND_OPACITY)
  },
  info: {
    backgroundColor: hexToRGB(blue[600], BACKGROUND_OPACITY)
  },
  warning: {
    backgroundColor: hexToRGB(amber[700], BACKGROUND_OPACITY)
  }
});
