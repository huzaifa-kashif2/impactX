import React from 'react'
import styles from '../styles/Eligible.module.css'

const entries = [
  { icon: '🎨', title: 'Painting' },
  { icon: '👗', title: 'Fashion' },
  { icon: '🧵', title: 'Crafts' },
  { icon: '🎭', title: 'Performing Arts' },
  { icon: '🧶', title: 'Textiles' },
  { icon: '🏛️', title: 'Architecture' },
  { icon: '🥁', title: 'Music' },
  { icon: '🎥', title: 'Film' },
  { icon: '📸', title: 'Photography' },
  { icon: '📹', title: 'Videography' },
  { icon: '🖥️', title: 'Media' },
  { icon: '✏️', title: 'Design' },
  { icon: '🏠', title: 'Interior Design' },
  { icon: '💍', title: 'Jewelry' },
]

export default function Eligible() {
  return (
    <section className={styles.routeSection}>
      <h2>Eligible Sectors</h2>
      <div className={styles.cardsGrid}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{entry.icon}</div>
            <h3>{entry.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
