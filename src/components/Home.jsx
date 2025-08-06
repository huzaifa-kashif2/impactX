import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png"; // Update path as needed
import { scroller } from 'react-scroll';


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
        </h1>{" "}
<button
  className={styles.cta}
  onClick={() => {
    scroller.scrollTo('apply', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }}
>
  Apply Now 🎨
</button>
      </div>
    </section>
  );
}
