import React from "react";
import { AppRoute } from "../../utils/const";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/user-data/user-api-action";
import { Link } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutAction());
  return (
    <div className="user-block__link">
      <Link style={{ color: "white" }} to={AppRoute.MAIN} onClick={logout}>
        Log Out
      </Link>
    </div>
  );
};

export default Logout;
