import React from 'react';
import styles from '../styles/Projects.module.css'
import Project from './ui/Project';
import movieHomePage from "../assets/movie-home-page.PNG"
import libraryHomePage from "../assets/library-home-page.PNG"
import Slider from './Slider';

const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
            <h1 className={styles.projects__header}>Here are some of my<span className='red'>&nbsp;Projects</span></h1>
            <ul>
                <Project 
                    title="Movie" 
                    image={movieHomePage} 
                    technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                    description="Movie is Britain's leading online movie database with information on all your favorite films"
                    websiteLink="https://github.com/freddieb12345/movie-api"
                    githubLink="https://uk-movie-react-app.herokuapp.com/"
                />
                <Project 
                    title="Library" 
                    image={libraryHomePage} 
                    technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                    description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                    websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                    githubLink="https://uk-library-react-app.herokuapp.com/"
                />
            </ul>

            <h1 className={styles.sub__header}><span className={styles.red}>Web 3</span>&nbsp;Experience</h1>

            <Slider />

        </section>
    );
}

export default Projects;
