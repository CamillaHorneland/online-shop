import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkout" activeClassName="active">
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
