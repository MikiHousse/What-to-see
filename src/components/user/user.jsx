import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppRoute } from "../../utils/const";

import {
  getAuthorizationStatus,
  getUserInfo,
} from "../../redux/user-data/user-selectors";
import { fetchUserInfo } from "../../redux/user-data/user-api-action";
import { userIsAuth } from "../../utils/utils";

const User = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfo);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const { id, avatar_url } = userInfo;

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <>
      {!userIsAuth(authorizationStatus) ? (
        <Link to={AppRoute.LOGIN} style={{ textDecoration: "none" }}>
          <p style={{ color: "white" }}>Sing In</p>
        </Link>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default User;
