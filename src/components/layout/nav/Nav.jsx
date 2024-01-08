import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import { CartIcon } from "./Cart";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
      <Logo big={false} />
      <GiHamburgerMenu className={styles.hamburgerIcon} onClick={handleToggleMobileMenu} />
      <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.show : ''}`}>

        <li>
          <NavLink to="/" className="active" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
        </li>
         <li>
          <NavLink to="/checkout" className="active" onClick={() => setIsMobileMenuOpen(false)}>
            Checkout
          </NavLink>
        </li>
         <li>
          <NavLink to="/cart" className="active" onClick={() => setIsMobileMenuOpen(false)}>
            Cart
          </NavLink>
        </li>
      </ul>
      <NavLink to="/cart" className={`active ${styles.cartLink}`} onClick={() => setIsMobileMenuOpen(false)}>
        <CartIcon />
      </NavLink>
    </nav>
  );
};

export default Nav;

