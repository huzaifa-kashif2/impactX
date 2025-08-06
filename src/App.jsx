import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Teams from "./components/Teams";
import Home from "./components/Home";
import About from "./components/About";
import Offerings from "./components/Offerings";
import Eligible from "./components/Eligible"; // Assuming this is the correct import path
import Partners from "./components/Partners";
export default function App() {
  return (
    <div>
      <Navbar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>
      <hr />
      <Element name="offerings" >
        <Offerings />
      </Element>

      <Element name="sectors">
        <Eligible />
      </Element>

      <Element name="partners" className={styles.section}>
      <Partners />
      </Element>

      <Element name="team">
        <Teams />
      </Element>

      <Element name="apply">
        <Contact />
      </Element>

      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}
