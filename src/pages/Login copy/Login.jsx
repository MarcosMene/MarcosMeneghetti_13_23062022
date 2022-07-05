import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import { useState, useEffect } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { username, password, rememberMe } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">
              Username
              <input
                autoComplete="off"
                type="email"
                id="username"
                name="username"
                value={username}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
              <input
                autoComplete="off"
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                onChange={onChange}
              />
              Remember me
            </label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
