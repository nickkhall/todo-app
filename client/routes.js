// Route components
import Game from 'components/Game';
import NotFound from 'components/NotFound';

// Constants
import { ROUTEPATH_DEFAULT_PAGE } from 'copy/Global/routes';

/**
 * Flag indicating that this path must be matched the "path" exactly.
 * @type {boolean}
 */
const exact = true;

/**
 * The routes configuration.
 * NOTE: The final route (no path) is our application's 404 handler.
 * @const {!Array.<!Object>}
 */
const ROUTES_CONFIG = [
  {
    path: ROUTEPATH_DEFAULT_PAGE,
    component: Game,
    exact
  },

  /* Non-matched routes render a 404 not found (path=null) */
  {
    component: NotFound
  }
];

export default ROUTES_CONFIG;
