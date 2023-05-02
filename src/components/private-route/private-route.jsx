import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { AppRoute, AuthorizationStatus } from "../../utils/const";

const PrivateRoute = ({ path, exact, children }) => {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route exact={exact} path={path}>
      {authorizationStatus === AuthorizationStatus.AUTH ? (
        children
      ) : (
        <Redirect to={AppRoute.LOGIN} />
      )}
    </Route>
  );
};

export default PrivateRoute;
