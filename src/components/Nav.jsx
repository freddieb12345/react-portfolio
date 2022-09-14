import React from "react";
import styles from "../styles/Nav.module.css";
import { toggleContrast } from "../js/toggleContrast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./ui/Logo";

const Nav = () => {
  let modalToggle;
  function toggleModal() {
    modalToggle = !modalToggle;
    console.log(modalToggle)
    if(modalToggle) {
      document.documentElement.style.setProperty("--modal-opacity", "1");
      document.documentElement.style.setProperty("--body-overflow", "hidden");
      document.getElementById("this").classList.add('fifteen-pixel')
      // document.documentElement.style.setProperty("--display", "block");
    } else {
      // document.documentElement.style.setProperty("--display", "none");
      document.documentElement.style.setProperty("--modal-opacity", "0");
      document.documentElement.style.setProperty("--body-overflow", "auto");
      document.getElementById("this").classList.remove('fifteen-pixel')
    }

  }
  return (
    <nav>
      <Logo selectedUnit="2px"/>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.list__itemAbout}`}>
          <a
            href="/#about"
            className={`${styles.list__itemAnchor} ${styles.link__hoverEffect} ${styles.link__hoverEffect} `}
          >
            About
          </a>
        </li>
        <li className={styles.list__item}>
          <a
            href="/#"
            className={`${styles.list__itemAnchor} ${styles.link__hoverEffect}`}
          >
            Projects
          </a>
        </li>
        <li className={styles.list__item}>
          <a
            href="/#"
            className={`${styles.list__itemAnchor} ${styles.link__hoverEffect}`}
            onClick={toggleModal}
          >
            Contact
          </a>
        </li>
        <li className={styles.list__item} onClick={toggleContrast}>
          <a
            href="/#"
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
