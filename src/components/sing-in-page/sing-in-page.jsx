import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Logo from "../logo/logo";
import Footer from "../footer/footer";

import { loginAction } from "../../redux/user-data/user-api-action";

const SingInPage = () => {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  const [correctData, setCorrectData] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const onSubmit = (authorizationData) =>
    dispatch(loginAction(authorizationData));

  const handleSubmit = (e) => {
    e.preventDefault();

    setCorrectData(false);
    setValidPassword(false);

    const isPasswordValidLength = passwordRef.current.textLength !== 0;
    const isWithoutPassword = passwordRef.current.value.trim().length > 0;

    const isLoginValid = loginRef.current.textLength !== 0;
    const isPasswordValid = isPasswordValidLength && isWithoutPassword;

    if (isLoginValid && isPasswordValid) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      if (isLoginValid && !isWithoutPassword) {
        return setValidPassword(true);
      } else {
        return setCorrectData(true);
      }
    }
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
              {correctData ? <p>Неверный логин или пароль</p> : ""}
              {validPassword ? <p>Пароль не может быть пустым</p> : ""}
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
                disabled={validPassword}
              >
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
