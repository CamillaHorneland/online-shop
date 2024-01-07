import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Nav.module.css";
import logo from "../../../assets/Logo.png";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <GiHamburgerMenu className={styles.hamburgerIcon} onClick={handleToggleMobileMenu} />
      <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.show : ''}`}>

        <li>
          <NavLink to="/" className="active" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="active" onClick={() => setIsMobileMenuOpen(false)}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkout" className="active" onClick={() => setIsMobileMenuOpen(false)}>
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

