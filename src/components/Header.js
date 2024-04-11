import COMPANY_LOGO from "../utils/assets/images/company-logo.png";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/contexts/UserContext";

const Header = () => {
  const [logIn, setlogIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(!open);

  const {loggedInUser} = useContext(UserContext)
  // console.log(loggedInUser);
  
  // console.log("Header Rendered");

  return (
    <div className="md:flex md:fixed z-10 md:top-0 md:left-auto w-full justify-between items-center bg-slate-300 shadow-slate-400 shadow-lg">
      <div>
        <Link to="/">
          <img className="w-20 md:w-24" src={COMPANY_LOGO} alt="company logo" />
        </Link>
      </div>

      <div
        onClick={() => handleOpenMenu()}
        className="text-5xl absolute top-4 right-3 md:hidden cursor-pointer"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      <div className="w-5/6 lg:text-xl pr-10">
        <ul
          className={`${
            open ? "top-auto" : "top-[-496px]"
          } flex flex-col md:flex-row md:justify-around md:pb-0 pb-3 absolute md:static
          bg-white md:bg-[transparent] md:gap-10 w-full md:w-auto pl-3 md:border-none border-2 border-blue-400 rounded-b-2xl transition-all duration-500 ease-in-out z-10`}
        >
          <li key={0} className="cursor-pointer my-4 md:my-0 text-sm max-w-fit text-white bg-gray-600 p-1 rounded-lg">
            Online Status: {onlineStatus}
          </li>
          <li key={1} className="cursor-pointer hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li key={2} className="cursor-pointer hover:text-blue-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li key={3} className="cursor-pointer hover:text-blue-500">
            <Link to="/about">About Us</Link>
          </li>
          <li key={4} className="cursor-pointer hover:text-blue-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li key={5} className="cursor-pointer text-orange-500 hover:text-violet-500 text-3xl ">
            <Link to="/my-cart" className="flex items-end">
              <ion-icon name="cart-outline"></ion-icon>
              <span className="text-2xl">()</span>
            </Link>
          </li>
          <li key={6} className="cursor-pointer hover:text-blue-500">
            {loggedInUser}
          </li>
          <li
            key={7}
            className="cursor-pointer border-solid border border-gray-500 px-12 w-fit h-fit hover:bg-orange-200 hover:ease-in-out rounded-lg"
          >
            <button
              className="log-button w-fit"
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