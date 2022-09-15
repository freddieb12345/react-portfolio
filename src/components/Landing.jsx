import React from 'react';
import styles from "../styles/Landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from './ui/Logo';

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
                <a href="/#about" className={styles.scroll__iconWrapper}>
                    <div className={`${styles.scroll__icon} ${styles.click}`}></div>
                </a>
            </header>
            <div className={styles.modal}>
                <Logo selectedUnit="10px"/>
                <h3 className={styles.nodal__header}>Contact me below!</h3>
            </div>
        </section>
    );
}

export default Landing;
