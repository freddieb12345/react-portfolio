import React, { useEffect } from "react";
import setHandle from '../js/setHandle'
import Web3Project from "./ui/Web3Project";
import { 
  uniSwapHomePage, 
  whitelistHomePage, 
  nftCollectionHomePage, 
  icoHomePage, 
  daoHomePage 
} from "../assets";
import { throttledProgressBar } from "../js/throttleProgessBar";
import calculateProgressBar from "../js/calculateProgessBar";

window.addEventListener("resize", throttledProgressBar);

const Slider = () => {
  useEffect(() => {
    document.querySelectorAll(".progress__bar").forEach(calculateProgressBar);
  }, []);
  
  return (
    <>
      <div className="slider__row reveal">
        <div className="slider__header display-none">
          <div className="progress__bar">
            <div className="progress__item active"></div>
            <div className="progress__item"></div>
            <div className="progress__item"></div>
          </div>
        </div>
        <div className="slider__container">
          <button
            className="handle left-handle"
            onClick={(e) => setHandle(e)}
          >
            <div className="text">&#8249;</div>
          </button>
          
          <div className="slider">
            <Web3Project 
              title="Uniswap Clone" 
              image={uniSwapHomePage} 
              websiteLink="https://uniswap-clone-react-app-ye5m.vercel.app/"
              githubLink="https://github.com/freddieb12345/uniswap_clone"
            />
            <Web3Project 
              title="Whitelist dApp" 
              image={whitelistHomePage} 
              websiteLink="https://whitelist-dapp-eight-sigma.vercel.app/"
              githubLink="https://github.com/freddieb12345/whitelist-dapp"
            />
            <Web3Project 
              title="NFT Collection" 
              image={nftCollectionHomePage} 
              websiteLink="https://nft-collection-tau-liard.vercel.app/"
              githubLink="https://github.com/freddieb12345/nft-collection"
            />
            <Web3Project 
              title="Initial Coin Offering" 
              image={icoHomePage} 
              websiteLink="https://initial-coin-offering-ashen.vercel.app/"
              githubLink="https://github.com/freddieb12345/initial-coin-offering"
            />
            <Web3Project 
              title="Decentralized Autonomous Organization" 
              image={daoHomePage} 
              websiteLink="https://decentralized-autonomous-organization-puce.vercel.app/"
              githubLink="https://github.com/freddieb12345/decentralized-autonomous-organization"
            />
          </div>
          
          <button
            className="handle right-handle"
            onClick={(e) => setHandle(e)}
          >
            <div className="text">&#8250;</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
