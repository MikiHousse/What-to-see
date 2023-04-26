import React from "react";
import { AppRoute, AuthorizationStatus } from "../../utils/const";
import { AuthInfo } from "../../mock-data";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/user-data/user-api-action";

const User = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const { id, avatar_url } = AuthInfo;

  return (
    <header className="page-header movie-card__head">
      <Logo />

      <div className="user-block">
        <div className="user-block__avatar">
          {authorizationStatus !== AuthorizationStatus.AUTH ? (
            <Link to={AppRoute.LOGIN}>
              <p style={{ color: "white" }}>Войти</p>
            </Link>
          ) : (
            <Link to={AppRoute.LOGIN} onClick={() => dispatch(logoutAction())}>
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
          {/* <Link to={AppRoute.LOGIN}>
            {AuthInfo.map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.avatar_url}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              );
            })}
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default User;
