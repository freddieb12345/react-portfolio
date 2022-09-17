import React from 'react';
import styles from "../styles/Landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalLogo from './ui/ModalLogo';
import Contact from './ui/Contact';
import {toggleModal} from "../js/toggleModal"


const Landing = () => {
    return (
        <section className={styles.landing}>
            <header id='header'>
                <div className={styles.header__content}>
                    <h1 className={styles.title}>Hey</h1>
                    <h1 className={`red ${styles.title}`}>I'm Freddie</h1>
                    <p className={styles.header__para}>Frontend Web-Developer</p>
                </div>
                <a href="/#">
                    <button className={`${styles.mail__icon} click`}>
                        <FontAwesomeIcon icon="fa-solid fa-envelope"/>
                    </button>
                </a>
            </header>
            <div className={styles.modal}>
                <ModalLogo />
                <Contact />
                <a className={`${styles.icon} click`} onClick={toggleModal}>
                    <FontAwesomeIcon icon="fa-solid fa-x"/>
                </a>
            </div>
        </section>
    );
}

export default Landing;
