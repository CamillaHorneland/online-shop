import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CheckoutSuccess.module.css';

function CheckoutSuccess({ orderDetails }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('cart');
  }, []);

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
  <div className={styles.successContainer}>
    <h2>Order Successful!</h2>
    <p>Your order details will be sendt by mail</p>
    <p>Invoice will be sent by email.</p>
    <button onClick={handleContinueShopping}>Continue Shopping</button>
  </div>
  );
}

export default CheckoutSuccess;



