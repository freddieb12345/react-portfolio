import React from 'react';
import styles from "../styles/About.module.css"
import { 
    HtmlLogo, 
    CSSLogo, 
    EthersLogo, 
    FirebaseLogo, 
    JavascriptLogo, 
    NextLogo, 
    NodeLogo, 
    PythonLogo, 
    ReactLogo, 
    RobotFrameWorkLogo, 
    SeleniumLogo, 
    SolidityLogo 
} from '../assets';
import Language from './ui/Language';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={`${styles.wrapper} reveal`}>
                <div className={styles.about__content}>
                    <h1 className={`${styles.title}`}>About me</h1>
                    <p className={styles.about__para}>I'm a 25 year-old <span className='redText'>frontend software engineer</span> with a passion for building high quality, <span className='redText'>responsive</span> web applications, with the aim to improve the overall <span className='redText'>user experience.</span></p>
                
                </div>
                <div className={styles.technologies}>
                    <div className={styles.technologiesWrapper}>
                        <h1 className={`${styles.sub__title}`}>Technologies</h1>
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
                            <Language logo={RobotFrameWorkLogo} text="RobotFrameWork"/>
                            <Language logo={SeleniumLogo} text="Selenium"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
