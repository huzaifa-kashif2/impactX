import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "home", nav_name: "Home" },
  { name: "about", nav_name: "About" },
  { name: "offerings", nav_name: "Why Us" },
  { name: "sectors", nav_name: "Sectors" },
  { name: "partners", nav_name: "Partners" },
  { name: "team", nav_name: "Team" },
  { name: "apply", nav_name: "Apply" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link
          to="home"
          smooth={true}
          duration={200}
          spy={true}
          offset={-80}
          onClick={closeMenu}
        >
          <img src={logo} alt="ImpactX Logo" className={styles.logoImg} />
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {navItems.map((item) => (
          <li key={item.name} className={styles.navItem}>
            <Link
              to={item.name}
              smooth={true}
              duration={200}
              spy={true}
              offset={-80}
              activeClass={styles.active}
              onClick={closeMenu}
            >
              {item.nav_name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
