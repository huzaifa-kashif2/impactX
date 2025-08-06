import React from 'react';
import styles from '../styles/Eligible.module.css'; // Adjust the path as necessary

const entries = [
  { icon: '🎨', title: 'Arts', quote: '"فن کی طاقت سے انقلاب!"' },
  { icon: '👗', title: 'Fashion', quote: '"لباس میں کہانی چھپی ہے"' },
  { icon: '🧶', title: 'Crafts', quote: '"ہنر میں حسن بسا ہے"' },
  { icon: '🎭', title: 'Performing Arts / Theatre', quote: '"سٹیج پہ زندگی بولتی ہے"' },
  { icon: '🎥', title: 'Film', quote: '"کہانی سے روشنی تک"' },
  { icon: '📸', title: 'Photography / Videography', quote: '"ہر تصویر ایک لمحہ ہے"' },
  { icon: '🧵', title: 'Textiles', quote: '"رنگ، دھاگہ اور روایت"' },
  { icon: '🎨', title: 'Design', quote: '"تخلیق ہر لکیر میں"' },
  { icon: '🖌', title: 'Fine Arts', quote: '"تصویر میں جذبے کی زبان"' },
  { icon: '📺', title: 'Media', quote: '"الفاظ اور آواز کا جادو"' },
  { icon: '💍', title: 'Jewellery', quote: '"زیور میں چھپی تہذیب"' },
];

export default function Eligible() {
  return (
    <section className={styles.routeSection}>
      <h2> Eligible Sectors</h2>
      <div className={styles.timeline}>
        {entries.map((entry, index) => (
          <div
            key={index}
            className={`${styles.timelineEntry} ${index % 2 === 1 ? styles.even : ''}`}
          >
            <div className={styles.icon}>{entry.icon}</div>
            <div className={styles.entryContent}>
              <h3>{entry.title}</h3>
              <p>{entry.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
