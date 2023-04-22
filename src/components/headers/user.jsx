import React from "react";
import { AppRoute } from "../../utils/const";
import { AuthInfo } from "../../mock-data";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <header className="page-header movie-card__head">
      <Logo />

      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={AppRoute.LOGIN}>
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
          </Link>
        </div>
      </div>
    </header>
  );
};

export default User;
