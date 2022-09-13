import React from 'react';
import styles from "../../styles/Logo.module.css"

const Logo = ({unit}) => {
    document.documentElement.style.setProperty("--unit", unit)
    console.log(unit)

    removeTranslation();
    
    function removeTranslation() {
        setTimeout(
            setTranslation1
        , 500)
        setTimeout(
            setTranslation2
        , 1000)
        setTimeout(
            setTranslation3
        , 1500)
    }
    
    function setTranslation1() {
        document.documentElement.style.setProperty("--translation-1", "0%")
    }
    
    function setTranslation2() {
        document.documentElement.style.setProperty("--translation-2", "0%")
    }
    
    function setTranslation3() {
        document.documentElement.style.setProperty("--translation-3", "0%")
    }
    
    return (
        <div className="container">
            <div className="row row-1">
                <div className="cell size-5"></div>
                <div className="cell size-2"></div>
                <div className="cell size-13"></div>
                <div className="cell size-5"></div>
                <div className="cell size-13"></div>
                <div className="cell size-5"></div>
            </div>
            <div className="row row-2">
                <div className="cell size-6"></div>
                <div className="cell size-6"></div>
                <div className="cell size-6"></div>
                <div className="cell size-18 redB"></div>
                <div className="cell size-7"></div>
                <div className="cell size-3"></div>
                <div className="cell size-5"></div>
            </div>
            <div className="row row-3">
                <div className="cell size-7"></div>
                <div className="cell size-7"></div>
                <div className="cell size-6"></div>
                <div className="cell size-9 redB"></div>
                <div className="cell size-7 redB"></div>
                <div className="cell size-8"></div>
                <div className="cell size-11"></div>
            </div>
            <div className="row row-4">
                <div className="cell size-3"></div>
                <div className="cell size-8"></div>
                <div className="cell size-9"></div>
                <div className="cell size-7 redB"></div>
                <div className="cell size-6 redB"></div>
                <div className="cell size-3 redB"></div>
                <div className="cell size-11"></div>
                <div className="cell size-9"></div>
            </div>
            <div className="row row-5">
                <div className="cell size-8"></div>
                <div className="cell size-4"></div>
                <div className="cell size-6"></div>
                <div className="cell size-2"></div>
                <div className="cell size-7 redB"></div>
                <div className="cell size-5"></div>
                <div className="cell size-6"></div>
                <div className="cell size-2"></div>
                <div className="cell size-16"></div>
            </div>
            <div className="row row-6">
                <div className="cell size-10"></div>
                <div className="cell size-12"></div>
                <div className="cell size-7 redB"></div>
                <div className="cell size-5"></div>
                <div className="cell size-6"></div>
                <div className="cell size-19"></div>
            </div>
            <div className="row row-7">
                <div className="cell size-10"></div>
                <div className="cell size-8"></div>
                <div className="cell size-3"></div>
                <div className="cell size-2 redB"></div>
                <div className="cell size-5 redB"></div>
                <div className="cell size-6 redB"></div>
                <div className="cell size-10"></div>
                <div className="cell size-4"></div>
                <div className="cell size-8"></div>
            </div>
            <div className="row row-8">
                <div className="cell size-6"></div>
                <div className="cell size-8"></div>
                <div className="cell size-6"></div>
                <div className="cell size-4 redB"></div>
                <div className="cell size-4 redB"></div>
                <div className="cell size-5 redB"></div>
                <div className="cell size-12"></div>
                <div className="cell size-10"></div>
            </div>
            <div className="row row-9">
                <div className="cell size-9"></div>
                <div className="cell size-12"></div>
                <div className="cell size-4 redB"></div>
                <div className="cell size-10 redB"></div>
                <div className="cell size-8"></div>
                <div className="cell size-10"></div>
                <div className="cell size-4"></div>
            </div>
            <div className="row row-10">
                <div className="cell size-8"></div>
                <div className="cell size-2"></div>
                <div className="cell size-7"></div>
                <div className="cell size-7 redB"></div>
                <div className="cell size-11"></div>
                <div className="cell size-16"></div>
            </div>
            <div className="row row-11">
                <div className="cell size-12"></div>
                <div className="cell size-3 redB"></div>
                <div className="cell size-3 redB"></div>
                <div className="cell size-10"></div>
                <div className="cell size-12"></div>
            </div>
            <div className="row row-12">
                <div className="cell size-8"></div>
                <div className="cell size-5"></div>
                <div className="cell size-3"></div>
                <div className="cell size-7 redB"></div>
                <div className="cell size-15"></div>
                <div className="cell size-6"></div>
            </div>
            <div className="row row-13">
                <div className="cell size-10"></div>
                <div className="cell size-12"></div>
                <div className="cell size-8"></div>
                <div className="cell size-7"></div>
            </div>
        </div>
        // <div className={styles.container} onMouseOver={removeTranslation()}>
        //     HELLO
        //     <div className={`${styles.row} ${styles.row1}`}>
        //         <div className={`${styles.cell} ${styles.size5}`}></div>
        //         <div className={`${styles.cell} ${styles.size2}`}></div>
        //         <div className={`${styles.cell} ${styles.size13}`}></div>
        //         <div className={`${styles.cell} ${styles.size5}`}></div>
        //         <div className={`${styles.cell} ${styles.size13}`}></div>
        //         <div className={`${styles.cell} ${styles.size5}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row2}`}>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size16} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size7}`}></div>
        //         <div className={`${styles.cell} ${styles.size3}`}></div>
        //         <div className={`${styles.cell} ${styles.size5}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row3}`}>
        //         <div className={`${styles.cell} ${styles.size7}`}></div>
        //         <div className={`${styles.cell} ${styles.size7}`}></div>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size9} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size7} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size8}`}></div>
        //         <div className={`${styles.cell} ${styles.size11}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row4}`}>
        //         <div className={`${styles.cell} ${styles.size3}`}></div>
        //         <div className={`${styles.cell} ${styles.size8}`}></div>
        //         <div className={`${styles.cell} ${styles.size9}`}></div>
        //         <div className={`${styles.cell} ${styles.size7} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size6} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size3} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size11}`}></div>
        //         <div className={`${styles.cell} ${styles.size9}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row5}`}>
        //         <div className={`${styles.cell} ${styles.size8}`}></div>
        //         <div className={`${styles.cell} ${styles.size4}`}></div>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size2}`}></div>
        //         <div className={`${styles.cell} ${styles.size7} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size5}`}></div>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size2}`}></div>
        //         <div className={`${styles.cell} ${styles.size16}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row6}`}>
        //         <div className={`${styles.cell} ${styles.size10}`}></div>
        //         <div className={`${styles.cell} ${styles.size12}`}></div>
        //         <div className={`${styles.cell} ${styles.size7} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size5}`}></div>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size10}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row7}`}>
        //         <div className={`${styles.cell} ${styles.size10}`}></div>
        //         <div className={`${styles.cell} ${styles.size8}`}></div>
        //         <div className={`${styles.cell} ${styles.size3}`}></div>
        //         <div className={`${styles.cell} ${styles.size2} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size5} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size6} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size10}`}></div>
        //         <div className={`${styles.cell} ${styles.size4}`}></div>
        //         <div className={`${styles.cell} ${styles.size8}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row8}`}>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size8}`}></div>
        //         <div className={`${styles.cell} ${styles.size6}`}></div>
        //         <div className={`${styles.cell} ${styles.size4} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size4} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size5} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size12} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size10} ${styles.red}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row9}`}> 
        //         <div className={`${styles.cell} ${styles.size9}`}></div> 
        //         <div className={`${styles.cell} ${styles.size12}`}></div> 
        //         <div className={`${styles.cell} ${styles.size4} ${styles.red}`}></div> 
        //         <div className={`${styles.cell} ${styles.size10} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size8}`}></div> 
        //         <div className={`${styles.cell} ${styles.size10}`}></div> 
        //         <div className={`${styles.cell} ${styles.size4}`}></div> 
        //     </div>
        //     <div className={`${styles.row} ${styles.row10}`}> 
        //         <div className={`${styles.cell} ${styles.size8}`}></div> 
        //         <div className={`${styles.cell} ${styles.size2}`}></div> 
        //         <div className={`${styles.cell} ${styles.size7}`}></div> 
        //         <div className={`${styles.cell} ${styles.size7} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size11}`}></div>
        //         <div className={`${styles.cell} ${styles.size16}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row11}`}>
        //         <div className={`${styles.cell} ${styles.size12}`}></div>
        //         <div className={`${styles.cell} ${styles.size3} ${styles.red}`}></div> 
        //         <div className={`${styles.cell} ${styles.size3} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size10}`}></div>
        //         <div className={`${styles.cell} ${styles.size12}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row12}`}>
        //         <div className={`${styles.cell} ${styles.size8}`}></div>
        //         <div className={`${styles.cell} ${styles.size5}`}></div>
        //         <div className={`${styles.cell} ${styles.size3}`}></div>
        //         <div className={`${styles.cell} ${styles.size7} ${styles.red}`}></div>
        //         <div className={`${styles.cell} ${styles.size15}`}></div>
        //         <div className={`${styles.cell} ${styles.size16}`}></div>
        //     </div>
        //     <div className={`${styles.row} ${styles.row13}`}>
        //         <div className={`${styles.cell} ${styles.size10}`}></div>
        //         <div className={`${styles.cell} ${styles.size12}`}></div> 
        //         <div className={`${styles.cell} ${styles.size8}`}></div>
        //         <div className={`${styles.cell} ${styles.size7}`}></div>
        //     </div>
        // </div>

    );
}

export default Logo;
