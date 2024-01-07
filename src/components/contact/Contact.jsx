import React, { useState } from 'react';
import styles from './Contact.module.css';

function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const formData = {
        fullName,
        subject,
        email,
        body,
      };

      console.log(formData);

      setFullName('');
      setSubject('');
      setEmail('');
      setBody('');
    }
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'full-name') {
      setFullName(value);
    } else if (name === 'subject') {
      setSubject(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'body') {
      setBody(value);
    }
  }

  function validateForm() {
    if (fullName.length < 3) {
      alert('Full name must be at least 3 characters.');
      return false;
    }

    if (subject.length < 3) {
      alert('Subject must be at least 3 characters.');
      return false;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (body.length < 3) {
      alert('Body must be at least 3 characters.');
      return false;
    }

    return true;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
  <div>
    <div className={styles.formContainer}>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="full-name" className={styles.formLabel}>
          Full Name
        </label>
        <input
          type="text"
          name="full-name"
          value={fullName}
          placeholder="Your full name"
          onChange={onTextInputChange}
          className={styles.formInput}
          required
        />

        <label htmlFor="subject" className={styles.formLabel}>
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          placeholder="Subject"
          onChange={onTextInputChange}
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
          onChange={onTextInputChange}
          className={styles.formInput}
          required
        />

        <label htmlFor="body" className={styles.formLabel}>
          Body
        </label>
        <textarea
          name="body"
          value={body}
          placeholder="Your message"
          onChange={onTextInputChange}
          className={styles.formTextarea}
          required
        />

        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    </div>
  </div>
);
  
}

export default ContactPage;
