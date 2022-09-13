import React from 'react';
import styles from '../styles/Projects.module.css'
import Project from './ui/Project';
import movieHomePage from "../assets/movie-home-page.PNG"
import libraryHomePage from "../assets/library-home-page.PNG"
// import whitelistHomePage from "../assets/whitelist-home-page.PNG"
// import nftCollectionHomePage from "../assets/nft-collection-home-page.PNG"
// import icoHomePage from "../assets/ico-home-page.PNG"
// import daoHomePage from "../assets/dao-home-page.PNG"
// import exchangeHomePage from "../assets/exchange-home-page.PNG"

const Projects = () => {
    return (
        <section className={styles.projects}>
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
                {/* <Project 
                    title="Whitelist dApp" 
                    image={whitelistHomePage} 
                    technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                    description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                    websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                    githubLink="https://uk-library-react-app.herokuapp.com/"
                />
                <Project 
                    title="NFT Collection" 
                    image={nftCollectionHomePage} 
                    technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                    description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                    websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                    githubLink="https://uk-library-react-app.herokuapp.com/"
                />
                <Project 
                    title="Initial Coin Offering" 
                    image={icoHomePage} 
                    technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                    description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                    websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                    githubLink="https://uk-library-react-app.herokuapp.com/"
                />
                <Project 
                    title="Decentralized Autonomous Organization" 
                    image={daoHomePage} 
                    technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                    description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                    websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                    githubLink="https://uk-library-react-app.herokuapp.com/"
                />
                <Project 
                    title="Decentralized Exchange" 
                    image={exchangeHomePage} 
                    technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                    description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                    websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                    githubLink="https://uk-library-react-app.herokuapp.com/"
                /> */}
            </ul>
        </section>
    );
}

export default Projects;
