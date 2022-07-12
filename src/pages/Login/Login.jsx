import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, profile, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/spinner/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, firstName, lastName, isError, isSuccess, isLoading, message } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      //all info back to initial state of action reset
      dispatch(reset());
    }

    if (isSuccess || user) {
      navigate("/profile");
    }
  }, [
    user,
    firstName,
    lastName,
    isError,
    isSuccess,
    message,
    navigate,
    dispatch,
  ]);

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
    } else {
      const userData = {
        email,
        password,
      };

      dispatch(login(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="fa-lg" />
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">
              Email
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
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {/* <div className="sign-button">
            <span>
              Not a member yet? <Link to="/signup">Sign up</Link>
            </span>
          </div> */}
        </form>
      </section>
    </main>
  );
};

export default Login;
