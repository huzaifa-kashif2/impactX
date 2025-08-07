import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.mainSection}>
    <section className={styles.contactSection}>
      <h2>Get In Touch</h2>

      <form action="https://formspree.io/f/your-form-id" method="POST">
        <div className={styles.formGrid}>
          <div>
            <input type="text" name="name" placeholder="👤 Your Name" required />
          </div>
          <div>
            <input type="email" name="email" placeholder="✉ Your Email" required />
          </div>
        </div>
        <input type="text" name="subject" placeholder="📝 Subject" required />
        <textarea name="message" placeholder="💭 Write your message here..." required />
        <button type="submit">📮 Send Message</button>
      </form>
    </section>
    </div>
  );
}
