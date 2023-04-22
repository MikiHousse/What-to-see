import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { AppRoute } from "../../utils/const";
import { AuthorizationStatus } from "../../utils/const";
import { loginAction } from "../../redux/user-data/user-api-action";
import Logo from "../logo/logo";
import Footer from "../footer/footer";

const SingInPage = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  const userIsAuth = (authorizationStatus) => {
    authorizationStatus === AuthorizationStatus.AUTH;
  };

  if (userIsAuth(authorizationStatus)) {
    return <Redirect to={AppRoute.MAIN} />;
  }

  const onSubmit = (authorizationData) =>
    dispatch(loginAction(authorizationData));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={loginRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={passwordRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SingInPage;
