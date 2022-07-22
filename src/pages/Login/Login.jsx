import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/spinner/Spinner";

//regex to user email and password
const USER_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/;

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    //useRef Access the reference value and focus the input with ref={userRef}
    userRef.current.focus();
  }, []);

  //everytime userEmail changes, it will test the REGEX email. The test() method executes a search for a match between a regular expression and a specified string
  useEffect(() => {
    const result = USER_REGEX.test(userEmail);
    setValidEmail(result);
  }, [userEmail]);

  //everytime password changes it will test the REGEX password
  useEffect(() => {
    const result = PWD_REGEX.test(userPassword);
    setValidPassword(result);
  }, [userPassword]);

  //everytime password and email change it will test both REGEX
  useEffect(() => {
    setErrMsg("");
  }, [userEmail, userPassword]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());

      //if just password is invalid
      if (!setValidPassword) {
        toast.error(message);
      }

      //if just email is invalid
      if (!setValidEmail) {
        toast.error(message);
      }
    }

    if (isSuccess || user) {
      navigate("/profile");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(userEmail);
    const v2 = PWD_REGEX.test(userPassword);

    const userData = {
      email: userEmail,
      password: userPassword,
    };

    if (!v1 || !v2) {
      toast.error("You must fill email and password");
    } else {
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
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "hide"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">
              Email
              <span className={validEmail || !userEmail ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              ref={userRef}
              placeholder="Enter your email"
              onChange={(e) => setUserEmail(e.target.value)}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              value={userEmail}
            />
            <p
              id="uidnote"
              className={
                userFocus && userEmail && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              Must be a valid email.
            </p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
              <span
                className={validPassword || !userPassword ? "hide" : "invalid"}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              autoComplete="off"
              type="password"
              id="password"
              placeholder="Enter password"
              onChange={(e) => setUserPassword(e.target.value)}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              value={userPassword}
            />
            <p
              id="pwdnote"
              className={
                passwordFocus && !validPassword ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must include letters and numbers.
            </p>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            type="submit"
            //button disabled until email and password filled
            disabled={!validEmail || !validPassword ? true : false}
            className="sign-in-button"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
