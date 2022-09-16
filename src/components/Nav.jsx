import React from "react";
import styles from "../styles/Nav.module.css";
import { toggleContrast } from "../js/toggleContrast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Logo from "./ui/Logo";
import NavLogo from "./ui/NavLogo";
import {toggleModal} from "../js/toggleModal"

const Nav = () => {
  return (
    <nav>
      {/* <Logo selectedUnit="2px"/> */}
      <NavLogo />
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
