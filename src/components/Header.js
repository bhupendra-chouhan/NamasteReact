import { COMPANY_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Header = () => {
  const [logIn, setlogIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  console.log("Header Rendered");

  return (
    <div className="header">
      <div>
        <Link to="/">
          <img className="logo" src={COMPANY_LOGO} alt="company logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li key={0}>Online Status: {onlineStatus}</li>
          <li key={1}>
            <Link to="/">Home</Link>
          </li>
          <li key={2}>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li key={3}>
            <Link to="/about">About Us</Link>
          </li>
          <li key={4}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li key={5}>
            <Link to="/my-cart">CartIcon</Link>
          </li>
          <li key={6}>
            <button
              className="log-button"
              onClick={() => {
                setlogIn(!logIn);
              }}
            >
              {logIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
