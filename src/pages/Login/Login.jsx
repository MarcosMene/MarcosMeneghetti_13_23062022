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
import { login, userRememberMe, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/spinner/Spinner";

const USER_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/;

const Login = () => {
  const rememberMeLogin = JSON.parse(localStorage.getItem("rememberMe"));

  const userRef = useRef();
  const errRef = useRef();

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userEmail);

    setValidEmail(result);
  }, [userEmail]);

  useEffect(() => {
    const result = PWD_REGEX.test(userPassword);

    setValidPassword(result);
  }, [userPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [userEmail, userPassword]);

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);

      if (!setValidPassword) {
        toast.error(message);
      }
      if (!setValidEmail) {
        toast.error(message);
      }

      //all info back to initial state of action reset
      dispatch(reset());
    } else if (isSuccess) {
      localStorage.removeItem("rememberMe");
      navigate("/profile");
      if (checked) {
        localStorage.removeItem("rememberMe");
        dispatch(userRememberMe());
        navigate("/profile");
      }
    }

    // if (isSuccess || user) {
    //   navigate("/profile");
    // }
  }, [user, isError, isSuccess, message, navigate, dispatch, checked]);

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState, //we want the other fields
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(userEmail);
    const v2 = PWD_REGEX.test(userPassword);

    if (!v1 || !v2) {
      toast.error("You must fill email and password");
      return;
    }

    const userData = {
      email: userEmail,
      password: userPassword,
    };

    dispatch(login(userData));

    // if (email.length === 0) {
    //   toast.error("You need enter a valable email");
    // } else if (password.length < 3) {
    //   toast.error("Passwords must be at least 4 characters");
    // } else {
    //   const userData = {
    //     email,
    //     password,
    //   };

    //   dispatch(login(userData));
    // }
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }

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
              {/* <span className={validEmail ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span> */}
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
              onChange={(e) =>
                rememberMeLogin ? user.email : setUserEmail(e.target.value)
              }
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
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
              {/* <span className={validPassword ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span> */}
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
              // name="password"
              placeholder="Enter password"
              onChange={(e) => setUserPassword(e.target.value)}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
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
            disabled={!validEmail || !validPassword ? true : false}
            className="sign-in-button"
          >
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
