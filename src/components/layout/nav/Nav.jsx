import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeclassname="active">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkout" activeclassname="active">
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
