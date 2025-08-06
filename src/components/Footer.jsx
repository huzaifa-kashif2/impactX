import React from "react";
import styles from "../styles/Footer.module.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} ImpactX. All rights reserved. | Empowering Creators Globally.
      </p>
    </footer>
  );
}
