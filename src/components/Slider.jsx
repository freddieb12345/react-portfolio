import React, { useRef } from "react";
import setHandle from '../js/setHandle'
import Web3Project from "./ui/Web3Project";
import whitelistHomePage from "../assets/whitelist-home-page.PNG"
import nftCollectionHomePage from "../assets/nft-collection-home-page.PNG"
import icoHomePage from "../assets/ico-home-page.PNG"
import daoHomePage from "../assets/dao-home-page.PNG"
import exchangeHomePage from "../assets/exchange-home-page.PNG"

const Slider = () => {
  const progressBarRef = useRef()
  const sliderRef = useRef()

  return (
    <>
      <div className="slider__row reveal">
        <div className="slider__header display-none">
          <div className="progress__bar" ref={progressBarRef}>
            <div className="progress__item active"></div>
            <div className="progress__item"></div>
            <div className="progress__item"></div>
          </div>
        </div>
        <div className="slider__container">
          <button
            className="handle left-handle"
            onClick={(e) => setHandle(e, progressBarRef, sliderRef)}
          >
            <div className="text">&#8249;</div>
          </button>
          
          <div className="slider" ref={sliderRef}>
            <Web3Project 
                title="Whitelist dApp" 
                image={whitelistHomePage} 
                technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                githubLink="https://uk-library-react-app.herokuapp.com/"
            />
            <Web3Project 
                title="NFT Collection" 
                image={nftCollectionHomePage} 
                technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                githubLink="https://uk-library-react-app.herokuapp.com/"
            />
            <Web3Project 
                title="Initial Coin Offering" 
                image={icoHomePage} 
                technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                githubLink="https://uk-library-react-app.herokuapp.com/"
            />
            <Web3Project 
                title="Decentralized Autonomous Organization" 
                image={daoHomePage} 
                technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                githubLink="https://uk-library-react-app.herokuapp.com/"
            />
            <Web3Project 
                title="Decentralized Exchange" 
                image={exchangeHomePage} 
                technologies="HTML, CSS, JAVASCRIPT, REACT, NODEJS, AXIOS"
                description="Library is Britain's leading online library platform with thousands of books to choose from, at the lowest prices"
                websiteLink="https://github.com/freddieb12345/react-book-e-commerce"
                githubLink="https://uk-library-react-app.herokuapp.com/"
            />
          </div>
          
          <button
            className="handle right-handle"
            onClick={(e) => setHandle(e, progressBarRef, sliderRef)}
          >
            <div className="text">&#8250;</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
