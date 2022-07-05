import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import "./Signup.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/spinner/Spinner";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { email, password, firstName, lastName } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/profile");
    }
    //all info back to initial state of action reset
    dispatch(reset()); /// nao sei se vai aqui
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, //we want the other fields
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      toast.error("You need enter a valable email");
    } else if (password.length < 3) {
      toast.error("Passwords must be at least 4 characters");
    } else if (firstName.length === 0) {
      toast.error("first name is required");
    } else if (lastName.length === 0) {
      toast.error("first name is required");
    } else {
      const userData = {
        email,
        password,
        firstName,
        lastName,
      };

      dispatch(signup(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faIdBadge} className="fa-lg" />
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">
              Username
              <input
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                value={email}
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
          <div className="input-wrapper">
            <label htmlFor="firstname">
              First name
              <input
                autoComplete="off"
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                placeholder="Enter first name"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">
              Last name
              <input
                autoComplete="off"
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                placeholder="Enter last name"
                onChange={onChange}
              />
            </label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign Up
          </button>
          <div className="sign-button">
            <span>
              Already user? <Link to="/login">Sign in</Link>
            </span>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
