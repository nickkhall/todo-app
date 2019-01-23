import React from 'react';
import { Provider } from 'react-redux';

// MUI Components
import { MuiThemeProvider } from '@material-ui/core/styles';

// App theme.
import theme from 'theme';

// Components
import RouteManager from 'components/RouteManager';

// Styles
import './index.css';

// We export the App without a Provider for tests.
// This pattern allows us to test the component without having to test
// Redux itself.
export const App = () => (
  <MuiThemeProvider theme={theme}>
    <RouteManager />
  </MuiThemeProvider>
);

// The Redux-connected app.
const ConnectedApp = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ConnectedApp;
