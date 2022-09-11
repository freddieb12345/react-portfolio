import React from "react";
import styles from "../styles/Nav.module.css";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  let constrastToggle;
  function toggleContrast() {
    console.log("hello");
    constrastToggle = !constrastToggle;
    if (constrastToggle) {
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#242424"
      );
      document.documentElement.style.setProperty("--font-color", "white");
      document.documentElement.style.setProperty("--logo-invert", "100%");
      document.documentElement.style.setProperty("--scroll-icon-color", "white");
      document.documentElement.style.setProperty("--mail-color", "#feeeee");
      document.documentElement.style.setProperty("--mail-text-color", "#DE5656");
    } else {
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#feeeee"
      );
      document.documentElement.style.setProperty("--font-color", "black");
      document.documentElement.style.setProperty("--logo-invert", "0%");
      document.documentElement.style.setProperty("--scroll-icon-color", "#DE5656");
      document.documentElement.style.setProperty("--mail-color", "#DE5656");
      document.documentElement.style.setProperty("--mail-text-color", "#feeeee");
    }
  }
  return (
    <nav>
      <figure>
        <img src={Logo} alt="logo" className={styles.logo}/>
      </figure>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.list__itemAbout}`}>
          <a
            href=""
            className={`${styles.list__itemAnchor} ${styles.link__hoverEffect} ${styles.link__hoverEffect} `}
          >
            About
          </a>
        </li>
        <li className={styles.list__item}>
          <a
            href=""
            className={`${styles.list__itemAnchor} ${styles.link__hoverEffect}`}
          >
            Projects
          </a>
        </li>
        <li className={styles.list__item}>
          <a
            href=""
            className={`${styles.list__itemAnchor} ${styles.link__hoverEffect}`}
          >
            Contact
          </a>
        </li>
        <li className={styles.list__item} onClick={toggleContrast}>
          <a
            className={`${styles.list__itemAnchor} ${styles.link__hoverEffect}`}
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
