import React from 'react'
import styles from '../styles/Eligible.module.css'

const entries = [
  { icon: '🎨', title: 'Arts' },
  { icon: '👗', title: 'Fashion' },
  { icon: '🧶', title: 'Crafts' },
  { icon: '🎭', title: 'Performing Arts / Theatre' },
  { icon: '🎥', title: 'Film' },
  { icon: '📸', title: 'Photography / Videography' },
  { icon: '🧵', title: 'Textiles' },
  { icon: '🎨', title: 'Design' },
  { icon: '🖌', title: 'Fine Arts' },
  { icon: '📺', title: 'Media' },
  { icon: '💍', title: 'Jewellery' },
]

export default function Eligible() {
  return (
    <section className={styles.routeSection}>
      <h2>Eligible Sectors</h2>
      <div className={styles.timeline}>
        {entries.map((entry, index) => (
          <div
            key={index}
            className={`${styles.timelineEntry} ${index % 2 === 1 ? styles.even : ''}`}
          >
            <div className={styles.icon}>{entry.icon}</div>
            <div className={styles.entryContent}>
              <h3>{entry.title}</h3>
              <p>Category included</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
