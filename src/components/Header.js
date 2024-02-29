import { COMPANY_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Header = () => {
  const [logIn, setlogIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  console.log("Header Rendered");

  return (
    <div className="flex bg-orange-500 border-black border-2">
      <div>
        <Link to="/">
          <img
            className="w-10 bg-sky-400"
            src={COMPANY_LOGO}
            alt="company logo"
          />
        </Link>
      </div>
      <div className="nav-items bg-slate-600">
        <ul className="flex bg-orange-600">
          <li key={0} className="text-2xl border-red-600">
            Online Status: {onlineStatus}
          </li>
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
