import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <img src={logo} alt="ImpactX Logo" className={styles.logo} />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          <img src={logo} alt="ImpactX Logo" className={styles.inlineLogo} />
          is Pakistan’s first Co-working Space & Incubation Center of its kind,
          dedicated to empowering the <span>Creative Industry</span>.
        </h1>
        <a
          href="https://docs.google.com/forms/d/11JuhCAkRe85Qq8mIhPBSWd604xx7oZj3-7DKw_NyUmo/viewform?ts=68a816bb&edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaLink}
        >
          Apply Now 🎨
        </a>
      </div>
    </section>
  );
}
