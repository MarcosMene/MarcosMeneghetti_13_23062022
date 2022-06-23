import React from "react";
import Logo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = () => {
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

      <div>
        <Link to="/sign-in" className="main-nav-item">
          <FontAwesomeIcon icon={faCircleUser} />

          <span>Sign In</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
