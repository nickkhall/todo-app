// MUI
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

/**
 * The theme provider for the app.
 * Please consider making your global style changes here, as opposed to through
 * stylesheets.
 * @const {!Object}
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    secondary: {
      light: green.A200,
      main: green.A400,
      dark: green.A700
    }
  }
});

export default theme;
