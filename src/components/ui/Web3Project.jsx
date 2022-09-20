import React from 'react';
import styles from "../../styles/Web3Projects.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Web3Project = ({title, image, technologies, description, websiteLink, githubLink}) => {
    return (
        <>
            <div className={styles.slider__imgWrapper}>
                <img src={image} alt="" className={styles.slider__img}/>
                <div className={styles.backdrop}>
                    <div className={styles.backdropContent}>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.contentLinks}>
                            <a href={websiteLink} className={styles.contentLink} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon="fa-solid fa-link" />
                            </a>
                            <a href={githubLink} className={styles.contentLink} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon="fa-brands fa-github" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Web3Project;
