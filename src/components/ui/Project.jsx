import React from 'react';
import styles from "../../styles/Projects.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({title, image, technologies, description, websiteLink, githubLink}) => {
    return (
        <li className={`reveal ${styles.project}`}>
            <div className={styles.wrapper}>
                <img src={image} alt="" className={styles.img}/>
                <div className={styles.wrapperBg}></div>
                <div className={styles.description}>
                    <h3 className={styles.descriptionTitle}>
                        {title}
                    </h3>
                    <h4 className={styles.descriptionSubTitle}>
                        {technologies}
                    </h4>
                    <p className={styles.descriptionPara}>
                        {description}
                    </p>
                    <div className={styles.descriptionLinks}>
                        <a href={websiteLink} className={styles.descriptionLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-solid fa-link" />
                        </a>
                        <a href={githubLink} className={styles.descriptionLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Project;
