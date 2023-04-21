import React from "react";
import { useSelector } from "react-redux";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { AppRoute, AuthorizationStatus } from "../../utils/const";

const PrivateRoute = ({ render, path, exact }) => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  return (
    <Route
      pacth={path}
      exact={exact}
      render={(routeProps) =>
        authorizationStatus === AuthorizationStatus.AUTH ? (
          render(routeProps)
        ) : (
          <Redirect to={AppRoute.LOGIN} />
        )
      }
    />
  );
};

export default PrivateRoute;
