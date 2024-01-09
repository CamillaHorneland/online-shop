import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../hooks/CartProvider';
import styles from "./GoCart.module.css"; 
import CheckoutForm from "./CheckoutForm";
import CheckoutSuccess from './CheckoutSeccess';

function GoCheckout() {
  const { removeFromCart, clearCart, getCartProducts } = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState(getCartProducts());
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0);
  const navigate = useNavigate();
  const [orderCompleted, setOrderCompleted] = useState(false);

  useEffect(() => {
    setCartProducts(getCartProducts());
  }, [getCartProducts]);

  useEffect(() => {
    calculateTotalPrices();
  }, [cartProducts]);

  const calculateTotalPrices = () => {
    let total = 0;
    let totalDiscount = 0;

    cartProducts.forEach((product) => {
      const isDiscounted = product.discountedPrice < product.price;
      const price = isDiscounted ? product.discountedPrice : product.price;
      total += price * product.qty;
      totalDiscount += (product.price - price) * product.qty;
    });

    setTotalPrice(total);
    setTotalDiscountedPrice(totalDiscount);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  const isCartEmpty = cartProducts.length === 0;

  const onFormSubmit = () => {
    clearCart();
    removeFromCart({});
    localStorage.removeItem('cartProducts');
    localStorage.removeItem('totalPrice');
    setOrderCompleted(true);
    navigate('/checkout-success');
};

  return (
    <div className={styles.goCheckoutContainer}> 
      {isCartEmpty ? (
        <p>Your cart is empty. Add some products to proceed to checkout.</p>
      ) : orderCompleted ? (
        <CheckoutSuccess orderDetails={{ cartProducts, totalPrice }} />
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartProducts?.map((product, i) => {
              const isDiscounted = product.discountedPrice < product.price;
              const price = isDiscounted ? product.discountedPrice : product.price;

              return (
                <li key={`product-${i}`} className={styles.cartItem}>
                  <div className={styles.productInfo}>
                    <h4>{product.title}</h4>
                    <img src={product.imageUrl} alt={product.title} className={styles.cartImage} />
                    <p>Price: {formatPrice(price)} {isDiscounted ? 'On sale' : ''}</p>
                  </div>
                  <div className={styles.quantityControls}>
                    <span>QTY: {product.qty}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.totalInfo}>
            <h5>Total price: {formatPrice(totalPrice)}</h5>
            <h5>Total discount: {formatPrice(totalDiscountedPrice)}</h5>
          </div>
          <button onClick={() => navigate(`/cart`)}>
            <a>Go back to edit cart..</a>
          </button>
          <CheckoutForm onFormSubmit={onFormSubmit} />
        </>
      )}
    </div>
  );
}

export default GoCheckout;



