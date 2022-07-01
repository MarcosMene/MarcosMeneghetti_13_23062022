import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";

const Login = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">
              Username
              <input type="text" id="username" autoComplete="off" />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
              <input type="password" id="password" autoComplete="off" />
            </label>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
              <input type="checkbox" id="remember-me" />
              Remember me
            </label>
          </div>

          <Link to="/profile" className="sign-in-button">
            Sign In
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Login;
