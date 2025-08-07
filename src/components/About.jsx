import React from 'react';
import styles from '../styles/About.module.css'; 
import aboutImage from '../assets/about-us.jpg'; 

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <img src={aboutImage} alt="ImpactX Vision" className={styles.aboutImage} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Who We Are</h2>
        <p className={styles.description}>
          Our vision at <strong>ImpactX</strong> is to empower generations of Innovators, Creative Entrepreneurs, and Artists 
          by providing a supportive and dynamic ecosystem. At ImpactX, we’re not just offering a workspace; 
          we are building a vibrant community and offering technical and knowledge support to drive 
          Pakistan’s creative industry to new heights.
        </p>
      </div>
    </section>
  );
}
