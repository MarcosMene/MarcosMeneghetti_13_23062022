import React from "react";
import Logo from "../../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, firstName, isSuccess } = useSelector((state) => state.auth);

  //on logout function
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {/* <Link to="/" className="main-nav-logo"> */}
      {/* </Link> */}
      <div className="nav-user">
        {user && isSuccess ? (
          <>
            <FontAwesomeIcon icon={faCircleUser} />
            <span>{firstName}</span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <button className="login-nav-item" onClick={onLogout}>
              SIGN OUT
            </button>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faCircleUser} />
            <button
              to="/login"
              className="login-nav-item sign-in-logo"
              onClick={navigateLogin}
            >
              SIGN IN
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
