import React from 'react';
import styles from "../styles/About.module.css"
import HtmlLogo from "../assets/html5.png"
import CSSLogo from "../assets/css3.png"
import EthersLogo from "../assets/ethers.png"
import FirebaseLogo from "../assets/firebase.png"
import JavascriptLogo from "../assets/javascript.png"
import NextLogo from "../assets/nextjs.png"
import NodeLogo from "../assets/node.png"
import PythonLogo from "../assets/python.png"
import ReactLogo from "../assets/react.png"
import RoborFrameWorkLogo from "../assets/robotFrameWork.png"
import SeleniumLogo from "../assets/selenium.png"
import SolidityLogo from "../assets/solidity.png"
import Language from './ui/Language';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={`${styles.wrapper} reveal`}>
                <div className={styles.about__content}>
                    <h1 className={`red ${styles.title}`}>About me</h1>
                    <p className={styles.about__para}>I'm a 25 year-old <span className='red'>frontend software engineer</span> with a passion for building high quality, <span className='red'>responsive</span> web applications, with the aim to improve the overall <span className='red'>user experience.</span></p>
                
                </div>
                <div className={styles.technologies}>
                    <h1 className={`red ${styles.sub__title}`}>Technologies</h1>
                    <div className={styles.languages}>
                        <Language logo={HtmlLogo} text="HTML"/>
                        <Language logo={CSSLogo} text="CSS"/>
                        <Language logo={JavascriptLogo} text="Javascript"/>
                        <Language logo={ReactLogo} text="React.js"/>
                        <Language logo={NextLogo} text="Next.js"/>
                        <Language logo={FirebaseLogo} text="Firebase"/>
                        <Language logo={SolidityLogo} text="Solidity"/>
                        <Language logo={EthersLogo} text="Ethers.js"/>
                        <Language logo={PythonLogo} text="Python"/>
                        <Language logo={NodeLogo} text="Node.js"/>
                        <Language logo={RoborFrameWorkLogo} text="RobotFrameWork"/>
                        <Language logo={SeleniumLogo} text="Selenium"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
