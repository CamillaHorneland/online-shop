import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.copyrightText}>
        &copy; {new Date().getFullYear()} The OnlineStore. All rights reserved.
      </div>
      <div className={styles.contactLink}>
        <Link to="/contact">Contact us</Link>
      </div>
    </footer>
  );
}

export default Footer;

