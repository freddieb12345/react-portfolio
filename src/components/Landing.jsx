import React from 'react';
import styles from "../styles/Landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalLogo from './ui/ModalLogo';
import Contact from './ui/Contact';

const Landing = ({modalToggle, logoToggle, formToggle, headerToggle, toggleModal}) => {
    const headerOn = headerToggle
    const modalWithLogo = modalToggle && logoToggle && !headerToggle && !formToggle
    const modalWithForm = modalToggle && !logoToggle && !headerToggle && formToggle


    return (
        <section className={styles.landing}>
            {headerOn &&
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
            }
                
            {modalWithLogo && 
                <div className={styles.modal}>
                    <ModalLogo />
                </div>
            }

            {modalWithForm && 
                <div className={styles.modal}>
                    <Contact toggleModal={toggleModal}/>
                </div>
            }
        </section>
    );
}

export default Landing;
