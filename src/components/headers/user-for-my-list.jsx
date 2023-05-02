import React from "react";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { AppRoute, AuthorizationStatus } from "../../utils/const";
import { AuthInfo } from "../../mock-data";

const UserBlockMyList = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const { id, avatar_url } = AuthInfo;
  return (
    <header className="page-header user-page__head">
      <Logo />

      <h1 className="page-title user-page__title">My list</h1>

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

export default UserBlockMyList;
