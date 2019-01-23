import React from 'react';

// React router
import {
  HashRouter,
  Switch
} from 'react-router-dom';

// Components
import RouteMiddleware from 'components/RouteMiddleware';

// Routes config
import ROUTES_CONFIG from 'routes';

const RouteManager = ({
  classes,
  authed,
  hasRights
}) => (
  <HashRouter>
    <div className={classes.routeManager}>
      <Switch>
        { ROUTES_CONFIG.map(routeProps => (
          <RouteMiddleware
            key={routeProps.path || '404'}
            authed={authed}
            hasRights={hasRights}
            {...routeProps}
          />
        ))}
      </Switch>
    </div>
  </HashRouter>
);

export default RouteManager;
