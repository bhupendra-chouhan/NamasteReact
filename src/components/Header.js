import { COMPANY_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [logIn, setlogIn] = useState(false);

  console.log("Header Rendered")

  return (
    <div className="header">
      <div>
        <img className="logo" src={COMPANY_LOGO} alt="company logo" />
      </div>
      <div className="nav-items">
        <ul>
        <li key={0}><a href="/">Home</a></li>
          <li key={1}><a href="/about">About Us</a></li>
          <li key={2}><a href="/contact">Contact Us</a></li>
          <li key={3}><a href="/cart">CartIcon</a></li>
          <li key={4}><button className="log-button" onClick={() => {setlogIn(!logIn)}
          }>
            {logIn? "Logout": "Login"}
          </button></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
