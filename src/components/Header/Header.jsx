import React from "react";
import Logo from "../../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

/**
 * @name Header
 *@description Create a header with a logo, user icon, and SignIn link. When sign in clicked, a sing in page appears. In this page the user can connect to ARGENT BANK.The icon SignOut will appear here with the name of the user only if the user is connected.
 * @returns {JSX.Element}
 */

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, firstName, isSuccess } = useSelector((state) => state.auth);

  //logout function
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    window.localStorage.removeItem(removePersistLocal());

    function removePersistLocal() {
      return "persist:root";
    }
  };

  //send to login page
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
      <div className="nav-user">
        {/* Only appears if user is connected and isSucess is true */}
        {user && isSuccess ? (
          <>
            <FontAwesomeIcon icon={faCircleUser} />
            <Link to="/profile" className="user-nav-profile">
              <span>{firstName}</span>
            </Link>

            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <button className="login-nav-item" onClick={onLogout}>
              SIGN OUT
            </button>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faCircleUser} />
            <button
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
