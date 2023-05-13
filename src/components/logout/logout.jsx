import React from "react";
import { AppRoute } from "../../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/user-data/user-api-action";
import { Link } from "react-router-dom";
import { userIsAuth } from "../../utils/utils";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";

const Logout = () => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const logout = () => dispatch(logoutAction());

  return (
    <>
      {userIsAuth(authorizationStatus) ? (
        <div className="user-block__link">
          <Link
            style={{ color: "#c9b37e", textDecoration: "none" }}
            to={AppRoute.MAIN}
            onClick={logout}
          >
            Log Out
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Logout;
