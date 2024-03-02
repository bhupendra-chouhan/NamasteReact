import { COMPANY_LOGO } from "../utils/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Header = () => {
  const [logIn, setlogIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  console.log("Header Rendered");

  return (
    <div className="flex w-full items-center justify-between bg-slate-300">
      <div>
        <Link to="/">
          <img
            className="w-24"
            src={COMPANY_LOGO}
            alt="company logo"
          />
        </Link>
      </div>
      <div className="w-4/6 pr-10 text-2xl">
        <ul className="flex list-none justify-between">
          <li key={0} className="cursor-pointer">
            Online Status: {onlineStatus}
          </li>
          <li key={1} className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li key={2} className="cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li key={3} className="cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li key={4} className="cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li key={5} className="cursor-pointer">
            <Link to="/my-cart">CartIcon</Link>
          </li>
          <li key={6} className="cursor-pointer border-solid border border-gray-500 px-12 py min-w-fit">
            <button
              className="log-button w-32 px-3"
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
