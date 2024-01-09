import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../hooks/CartProvider';
import styles from "./GoCart.module.css"
import { useNavigate } from "react-router-dom";

function GoCart() {
  const navigate = useNavigate();
  const { quantity, addToCart, removeFromCart, getCartProducts } = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState(getCartProducts());
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0);

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
      totalDiscount += (product.price - product.discountedPrice) * product.qty;
    });

    setTotalPrice(total);
    setTotalDiscountedPrice(totalDiscount);
  };

  const addProduct = (product) => {
  const updatedCart = addToCart(product);
  if (updatedCart) {
    setCartProducts(updatedCart.products);
  }
};

const removeProduct = (product) => {
  const updatedCart = removeFromCart(product);
  if (updatedCart) {
    setCartProducts(updatedCart.products);
  }
};

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  return (
    <>
      <ul className={styles.cartList}>
        {cartProducts?.map((product, i) => {
          const isDiscounted = product.discountedPrice < product.price;
          const price = isDiscounted ? product.discountedPrice : product.price;

          return (
            <li key={`product-${i}`} className={styles.cartItem}>
              <div className={styles.productInfo}>
                <h4>{product.title}</h4>
                <img src={product.imageUrl} alt={product.title} />
                <p>Price: {formatPrice(price)} {isDiscounted ? 'On sale' : ''}</p>
              </div>
              <div className={styles.quantityControls}>
                <span>QTY: {product.qty}</span>
                <button onClick={() => { removeProduct(product); }}>-</button>
                <button onClick={() => { addProduct(product) }}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.totalInfo}>
        <h5>Total price: {formatPrice(totalPrice)}</h5>
        <h5>Total discount: {formatPrice(totalDiscountedPrice)}</h5>
      </div>
      <button onClick={() => { 
        navigate(`/checkout`);
        window.location.reload();}}
        ><a>Go to checkout..</a>
      </button>
    </>
  );
}

export default GoCart; 

          


