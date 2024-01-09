import { useEffect, useContext } from 'react';
import { useLocalStorage } from "../../../hooks/LocaleStorage";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../../../hooks/CartProvider";

const Cart = () => {
    const [cart, changeCart] = useLocalStorage('cart', {products: []});

    return (
        <div className="cart"></div>
    )
};

const CartIcon = ({ children }) => {
  const { quantity, clearCart } = useContext(CartContext);


  useEffect(() => {
  }, [quantity]);

  return (
    <span className="cartIcon" >
      {children}
      <CiShoppingCart style={{ fontSize: '30px' }} />
      <i>{quantity}</i>
    </span>
  );
};

export { Cart, CartIcon };