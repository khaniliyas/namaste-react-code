import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Log In");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginButton === "Log In"
                ? setLoginButton("Log Out")
                : setLoginButton("Log In");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
