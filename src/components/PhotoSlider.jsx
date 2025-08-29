import React from "react";
import styles from "../styles/PhotoSlider.module.css";

import img1 from "../assets/scroll_img.jpg";
import img2 from "../assets/scroll_img1.jpg";
import img3 from "../assets/scroll_img2.jpg";

const ALL = [img1, img2, img3];

export default function PawWall() {
  const tiles = ALL.map((src, i) => ({
    id: i,
    src,
  }));

  const scrollingTiles = [...tiles, ...tiles,...tiles,...tiles, ...tiles,...tiles,...tiles, ...tiles,...tiles];

  return (
    <div className={styles.scrollerWrap}>
      <div className={styles.scroller}>
        {scrollingTiles.map((it) => (
          <div key={it.id + "-" + Math.random()} className={styles.scrollerItem}>
            <img src={it.src} alt={it.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
