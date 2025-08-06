import React from "react";
import styles from "../styles/Partners.module.css";
import junoImg from "../assets/juno.png";
import laamImg from "../assets/laam.png";
import lamaImg from "../assets/lama.png";
import vceelaImg from "../assets/vceela.webp";
import pifdImg from "../assets/pifd.png";
import uopImg from "../assets/uop.png";

const brands = [
  { name: "Juno", image: junoImg },
  { name: "Laam", image: laamImg },
  { name: "Lama", image: lamaImg },
  { name: "Vceela", image: vceelaImg },
  { name: "PIFD", image: pifdImg },
  { name: "UOP", image: uopImg },
];


export default function Partners() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>OUR PARTNERS</h2>
        <p className={styles.text}>
          At ImpactX, we proudly collaborate with visionary institutions that share our mission
          to empower Pakistan’s creative industry. These partnerships allow us to support,
          connect, and grow the next generation of artists, innovators, and cultural entrepreneurs.
        </p>
        <div className={styles.logoGrid}>
          {brands.map((brand) => (
            <div className={styles.logoCard} key={brand.name}>
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
