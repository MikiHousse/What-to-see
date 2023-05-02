import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../logo/logo";

import { AppRoute, AuthorizationStatus } from "../../utils/const";
import { AuthInfo } from "../../mock-data";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";

const User = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const { id, avatar_url } = AuthInfo;

  return (
    <header className="page-header movie-card__head">
      <Logo />

      <div className="user-block">
        <div className="user-block__avatar">
          {authorizationStatus !== AuthorizationStatus.AUTH ? (
            <Link to={AppRoute.LOGIN} style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>Sing In</p>
            </Link>
          ) : (
            <Link to={AppRoute.MY_LIST}>
              {" "}
              <img
                key={id}
                src={avatar_url}
                alt="User avatar"
                width="63"
                height="63"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default User;
