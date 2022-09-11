import React from 'react';
import styles from "../styles/Landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
    return (
        <section className={styles.landing}>
            <header>
                <div className={styles.header__content}>
                    <h1 className={styles.title}>Hey</h1>
                    <h1 className={`red ${styles.title}`}>I'm Freddie</h1>
                    <p className={styles.header__para}>Frontend Web-Developer</p>
                </div>
                <a href="">
                    <button className={`${styles.mail__icon} ${styles.click}`}>
                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    </button>
                </a>
                <a href="" className={styles.scroll__iconWrapper}>
                    <div className={`${styles.scroll__icon} ${styles.click}`}></div>
                </a>
            </header>
        </section>
    );
}

export default Landing;
