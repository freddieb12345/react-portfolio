import React from "react";
import styles from "../styles/Nav.module.css";
import { toggleContrast } from "../js/toggleContrast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogo from "./ui/NavLogo";

const Nav = ({ toggleModal }) => {
  let navModalToggle;
  function toggleNavModal() {
    navModalToggle = !navModalToggle
    if(navModalToggle) {
      document.getElementById("bars").classList.add("display-none")
      document.getElementById("nav-modal").classList.remove("display-none")
    } else {
      document.getElementById("bars").classList.remove("display-none")
      document.getElementById("nav-modal").classList.add("display-none")
    }
  }

  return (
    <nav>
      {/* <Logo selectedUnit="2px"/> */}
      <NavLogo />
      <div className={`click red ${styles.btnMenu}`} onClick={toggleNavModal}>
        <FontAwesomeIcon icon="fa-solid fa-bars" id="bars"/>
      </div>
      <div className={`display-none ${styles.navModal}`} id="nav-modal">
        <div className={`click ${styles.cross}`} id="cross" onClick={toggleNavModal}>
          <FontAwesomeIcon icon="fa-solid fa-x" />
        </div>

        <ul className={styles.modalList} id="modal-list">
          <li className={`${styles.modalList__item} ${styles.modalList__itemAbout}`}>
            <a
              href="/#about"
              className={`${styles.modalList__itemAnchor} ${styles.link__hoverEffect} ${styles.link__hoverEffect} `}
            >
              About
            </a>
          </li>
          <li className={styles.modalList__item}>
            <a
              href="/#"
              className={`${styles.modalList__itemAnchor} ${styles.link__hoverEffect}`}
            >
              Projects
            </a>
          </li>
          <li className={styles.modalList__item}>
            <a
              href="/#"
              className={`${styles.modalList__itemAnchor} ${styles.link__hoverEffect}`}
              onClick={toggleModal}
            >
              Contact
            </a>
          </li>
          <li className={styles.modalList__item} onClick={toggleContrast}>
            <a
              href="/#"
              className={`${styles.modalList__itemAnchor} ${styles.link__hoverEffect}`}
            >
              <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
            </a>
          </li>
        </ul>
      </div>
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
            href="/#projects"
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
