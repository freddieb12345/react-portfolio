import React from 'react';
import styles from "../styles/Footer.module.css"
import NavLogo from './ui/NavLogo';
import {toggleModalWithDelay} from "../js/toggleModal"

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles.footer__row}`}>
                    <NavLogo />
                    <div className={styles.footer__socialList}>
                        <a href="/https://github.com/freddieb12345" className={`
                            ${styles.footer__socialLink} 
                            ${styles.link__hoverEffect} 
                            ${styles.link__hoverEffectWhite}
                        `}
                        target="_blank">
                            Github
                        </a>
                        <a href="/www.linkedin.com/in/freddie-brewin" className={`
                            ${styles.footer__socialLink} 
                            ${styles.link__hoverEffect} 
                            ${styles.link__hoverEffectWhite}
                        `}
                        target="_blank">
                            LinkedIn
                        </a>
                        <a href="/#" className={`
                            ${styles.footer__socialLink} 
                            ${styles.link__hoverEffect} 
                            ${styles.link__hoverEffectWhite}
                        `}
                        onClick={() => toggleModalWithDelay(500)}
                        >
                            Contact
                        </a>
                        <a href="/#" className={`
                            ${styles.footer__socialLink} 
                            ${styles.link__hoverEffect} 
                            ${styles.link__hoverEffectWhite}
                        `}
                        target="_blank">
                            Resume
                        </a>
                    </div>
                    <div className={styles.footer__copyright}>
                        Copyright &copy; Freddie Brewin 2022
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
