import { COMPANY_LOGO } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div>
      <img className="logo" src={COMPANY_LOGO} alt="company logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li key={0}>Home</li>
        <li key={1}>About Us</li>
        <li key={2}>Contact Us</li>
        <li key={3}>CartIcon</li>
      </ul>
    </div>
  </div>
);

export default Header;