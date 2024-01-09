// CheckoutForm.js
import React, { useState } from 'react';
import styles from "./CheckoutForm.module.css";

function CheckoutForm({ onFormSubmit }) {
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const formData = {
        fullName,
        streetAddress,
        city,
        postalCode,
        phone,
        email,
      };

      console.log(formData);

      setFullName('');
      setStreetAddress('');
      setCity('');
      setPostalCode('');
      setPhone('');
      setEmail('');

      // Kall onFormSubmit hvis det er definert
      if (onFormSubmit) {
        onFormSubmit(formData);
      }
    }
  };

  const validateForm = () => {
    // Implementer valideringslogikk etter behov
    return true;
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full-name" className={styles.formLabel}>
            Full Name
          </label>
          <input
            type="text"
            name="full-name"
            value={fullName}
            placeholder="Your full name"
            onChange={(e) => setFullName(e.target.value)}
            className={styles.formInput}
            required
          />

          <label htmlFor="street-address" className={styles.formLabel}>
            Street Address
          </label>
          <input
            type="text"
            name="street-address"
            value={streetAddress}
            placeholder="Street Address"
            onChange={(e) => setStreetAddress(e.target.value)}
            className={styles.formInput}
            required
          />

          <label htmlFor="city" className={styles.formLabel}>
            City
          </label>
          <input
            type="text"
            name="city"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            className={styles.formInput}
            required
          />

          <label htmlFor="postal-code" className={styles.formLabel}>
            Postal Code
          </label>
          <input
            type="text"
            name="postal-code"
            value={postalCode}
            placeholder="Postal Code"
            onChange={(e) => setPostalCode(e.target.value)}
            className={styles.formInput}
            required
          />

          <label htmlFor="phone" className={styles.formLabel}>
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={phone}
            placeholder="Your phone number"
            onChange={(e) => setPhone(e.target.value)}
            className={styles.formInput}
            required
          />

          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            className={styles.formInput}
            required
          />

          <p>Invoice will be sent by email.</p>

          <button type="submit" className={styles.formButton}>
            Place order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;



