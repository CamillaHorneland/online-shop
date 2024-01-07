import { NavLink } from 'react-router-dom';
import styles from "./Nav.module.css";
import logo from "../../../assets/Logo.png";

const Nav = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="active">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkout" className="active">
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
