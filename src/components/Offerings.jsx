import React from 'react';
import styles from '../styles/Offerings.module.css'; 
import { FaBrain, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

export default function Offerings() {
  return (
    <section className={styles.offeringsSection}>
      <h2 className={styles.heading}>Why ImpactX?</h2>
      <p className={styles.subheading}>
        Because creatives deserve a space that thinks like them, grows with them, and dreams in color.
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <FaBrain className={styles.icon} />
          <h3>Tailored Learning Experience</h3>
          <p>
            Customized programming and content designed specifically to address the unique entrepreneurial
            challenges and opportunities within Pakistan’s creative industry.
          </p>
        </div>

        <div className={styles.card}>
          <FaMoneyBillWave className={styles.icon} />
          <h3>Cash Investment</h3>
          <p>
            Direct financial support to help founders launch, grow or scale their ventures, covering critical
            early-stage expenses.
          </p>
        </div>

        <div className={styles.card}>
          <FaUsers className={styles.icon} />
          <h3>Community Ecosystem</h3>
          <p>
            Join a thriving network of creative industry leaders, mentors, academic experts, and like-minded
            entrepreneurs, offering continuous guidance and opportunities for collaboration and growth.
          </p>
        </div>
      </div>
    </section>
  );
}
