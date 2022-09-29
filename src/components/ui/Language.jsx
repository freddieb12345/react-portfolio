import React from 'react';
import styles from "../../styles/Language.module.css"

const Language = ({logo, text}) => {
    return (
        <figure className={styles.language}>
            <img src={logo} alt="" className={styles.language__img}/>
            <span className={`${styles.language__name}`}>{text}</span>
        </figure>
    );
}

export default Language;
