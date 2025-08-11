import React from 'react';
import styles from '../styles/Teams.module.css';

import saleem from '../assets/saleem.jpg';
import muneeb from '../assets/muneeb.jpg';
import shoaib from '../assets/shoaib.jpg';
import mahnoor from '../assets/mahnoor.jpg';

export default function Teams() {
  const teamMembers = [
    {
      name: 'Mr. Saleem Ranjha',
      role: 'Co-founder & Ecosystem Enabler',
      image: saleem,
    },
    {
      name: 'Mr. Muneeb Wahed Khan',
      role: 'Co-founder & Growth Strategist',
      image: muneeb,
    },
    {
      name: 'Mr. Shoaib Ata',
      role: 'Head of Operations & Community',
      image: shoaib,
    },
    {
      name: 'Ms. Mahnoor Yazdani',
      role: 'Head of Partnerships & Program',
      image: mahnoor,
    },
  ];

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.heading}>Meet the Minds Behind ImpactX</h2>
      <div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <img src={member.image} alt={member.name} className={styles.image} />
            <p className={styles.name}>{member.name}</p>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
