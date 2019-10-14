import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => {
        debugger
        var token = localStorage["token"];
        if (token || matchProps.location.pathname == "/sign-up" || matchProps.location.pathname == "/sign-in") {
          return (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          );
        } else {
          return (
            <Redirect to={{
              pathname: '/sign-in',
              state: { from: matchProps.location }
            }} />
          )
        }
      }}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
