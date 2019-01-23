import React from 'react';

// React router
import { Route } from 'react-router-dom';

export const renderRoute = (Component, routeProps) => <Component {...routeProps} />;

const RouteMiddleware = ({
  component: Component,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={() => renderRoute(Component, routeProps)}
  />
);

export default RouteMiddleware;
