import React, { useEffect, useState } from 'react';
// import styles from "../../styles/Logo.module.css"

const Logo = ({selectedUnit, initialTranslation, finalPosition}) => {
    const [unit, setUnit] = useState();

    document.documentElement.style.setProperty("--initial-translation", initialTranslation)
    document.documentElement.style.setProperty("--final-position", finalPosition)

    useEffect(() => {
        const container = document.getElementById("this")
        console.log(container)
        setUnit(selectedUnit)
    }, [selectedUnit]);

    return (
        <>
            {unit === "2px" ? (<div className="container gap2px two-pixel">
            <div className="row height2px gap2px">
                <div className="cell width2px size-5"></div>
                <div className="cell width2px size-2"></div>
                <div className="cell width2px size-13"></div>
                <div className="cell width2px size-5"></div>
                <div className="cell width2px size-13"></div>
                <div className="cell width2px size-5"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-18 redB"></div>
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-3"></div>
                <div className="cell width2px size-5"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-7"></div>
                <div className="cell width2px size-7"></div>
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-9 redB"></div>
                <div className="cell width2px size-7 redB"></div>
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-11"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-4"></div>
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-9"></div>
                <div className="cell width2px size-7 redB"></div>
                <div className="cell width2px size-6 redB"></div>
                <div className="cell width2px size-3 redB"></div>
                <div className="cell width2px size-11"></div>
                <div className="cell width2px size-9"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-4"></div>
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-2"></div>
                <div className="cell width2px size-7 redB"></div>
                <div className="cell width2px size-5"></div>
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-2"></div>
                <div className="cell width2px size-16"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-10"></div>
                <div className="cell width2px size-12"></div>
                <div className="cell width2px size-7 redB"></div>
                <div className="cell width2px size-5"></div>
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-19"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-10"></div>
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-3"></div>
                <div className="cell width2px size-2 redB"></div>
                <div className="cell width2px size-5 redB"></div>
                <div className="cell width2px size-6 redB"></div>
                <div className="cell width2px size-10"></div>
                <div className="cell width2px size-4"></div>
                <div className="cell width2px size-8"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-4 redB"></div>
                <div className="cell width2px size-4 redB"></div>
                <div className="cell width2px size-5 redB"></div>
                <div className="cell width2px size-12"></div>
                <div className="cell width2px size-10"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-9"></div>
                <div className="cell width2px size-12"></div>
                <div className="cell width2px size-4 redB"></div>
                <div className="cell width2px size-10 redB"></div>
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-10"></div>
                <div className="cell width2px size-4"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-2"></div>
                <div className="cell width2px size-7"></div>
                <div className="cell width2px size-7 redB"></div>
                <div className="cell width2px size-11"></div>
                <div className="cell width2px size-16"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-14"></div>
                <div className="cell width2px size-3 redB"></div>
                <div className="cell width2px size-3 redB"></div>
                <div className="cell width2px size-10"></div>
                <div className="cell width2px size-12"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-5"></div>
                <div className="cell width2px size-3"></div>
                <div className="cell width2px size-7 redB"></div>
                <div className="cell width2px size-15"></div>
                <div className="cell width2px size-6"></div>
                <div className="cell width2px size-4"></div>
            </div>
            <div className="row height2px gap2px">
                <div className="cell width2px size-10"></div>
                <div className="cell width2px size-12"></div>
                <div className="cell width2px size-8"></div>
                <div className="cell width2px size-7"></div>
            </div>
        </div>) 
        : (<div className="container gap15px" id='this'>
            <div className="row height15px gap15px">
                <div className="cell width15px size-5"></div>
                <div className="cell width15px size-2"></div>
                <div className="cell width15px size-13"></div>
                <div className="cell width15px size-5"></div>
                <div className="cell width15px size-13"></div>
                <div className="cell width15px size-5"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-18 redB"></div>
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-3"></div>
                <div className="cell width15px size-5"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-7"></div>
                <div className="cell width15px size-7"></div>
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-9 redB"></div>
                <div className="cell width15px size-7 redB"></div>
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-11"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-4"></div>
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-9"></div>
                <div className="cell width15px size-7 redB"></div>
                <div className="cell width15px size-6 redB"></div>
                <div className="cell width15px size-3 redB"></div>
                <div className="cell width15px size-11"></div>
                <div className="cell width15px size-9"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-4"></div>
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-2"></div>
                <div className="cell width15px size-7 redB"></div>
                <div className="cell width15px size-5"></div>
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-2"></div>
                <div className="cell width15px size-16"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-10"></div>
                <div className="cell width15px size-12"></div>
                <div className="cell width15px size-7 redB"></div>
                <div className="cell width15px size-5"></div>
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-19"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-10"></div>
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-3"></div>
                <div className="cell width15px size-2 redB"></div>
                <div className="cell width15px size-5 redB"></div>
                <div className="cell width15px size-6 redB"></div>
                <div className="cell width15px size-10"></div>
                <div className="cell width15px size-4"></div>
                <div className="cell width15px size-8"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-4 redB"></div>
                <div className="cell width15px size-4 redB"></div>
                <div className="cell width15px size-5 redB"></div>
                <div className="cell width15px size-12"></div>
                <div className="cell width15px size-10"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-9"></div>
                <div className="cell width15px size-12"></div>
                <div className="cell width15px size-4 redB"></div>
                <div className="cell width15px size-10 redB"></div>
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-10"></div>
                <div className="cell width15px size-4"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-2"></div>
                <div className="cell width15px size-7"></div>
                <div className="cell width15px size-7 redB"></div>
                <div className="cell width15px size-11"></div>
                <div className="cell width15px size-16"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-14"></div>
                <div className="cell width15px size-3 redB"></div>
                <div className="cell width15px size-3 redB"></div>
                <div className="cell width15px size-10"></div>
                <div className="cell width15px size-12"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-5"></div>
                <div className="cell width15px size-3"></div>
                <div className="cell width15px size-7 redB"></div>
                <div className="cell width15px size-15"></div>
                <div className="cell width15px size-6"></div>
                <div className="cell width15px size-4"></div>
            </div>
            <div className="row height15px gap15px">
                <div className="cell width15px size-10"></div>
                <div className="cell width15px size-12"></div>
                <div className="cell width15px size-8"></div>
                <div className="cell width15px size-7"></div>
            </div>
        </div>)}
        </>
        // <div className="container gap2px">
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-5"></div>
        //         <div className="cell width2px size-2"></div>
        //         <div className="cell width2px size-13"></div>
        //         <div className="cell width2px size-5"></div>
        //         <div className="cell width2px size-13"></div>
        //         <div className="cell width2px size-5"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-18 redB"></div>
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-3"></div>
        //         <div className="cell width2px size-5"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-7"></div>
        //         <div className="cell width2px size-7"></div>
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-9 redB"></div>
        //         <div className="cell width2px size-7 redB"></div>
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-11"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-4"></div>
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-9"></div>
        //         <div className="cell width2px size-7 redB"></div>
        //         <div className="cell width2px size-6 redB"></div>
        //         <div className="cell width2px size-3 redB"></div>
        //         <div className="cell width2px size-11"></div>
        //         <div className="cell width2px size-9"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-4"></div>
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-2"></div>
        //         <div className="cell width2px size-7 redB"></div>
        //         <div className="cell width2px size-5"></div>
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-2"></div>
        //         <div className="cell width2px size-16"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-10"></div>
        //         <div className="cell width2px size-12"></div>
        //         <div className="cell width2px size-7 redB"></div>
        //         <div className="cell width2px size-5"></div>
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-19"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-10"></div>
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-3"></div>
        //         <div className="cell width2px size-2 redB"></div>
        //         <div className="cell width2px size-5 redB"></div>
        //         <div className="cell width2px size-6 redB"></div>
        //         <div className="cell width2px size-10"></div>
        //         <div className="cell width2px size-4"></div>
        //         <div className="cell width2px size-8"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-4 redB"></div>
        //         <div className="cell width2px size-4 redB"></div>
        //         <div className="cell width2px size-5 redB"></div>
        //         <div className="cell width2px size-12"></div>
        //         <div className="cell width2px size-10"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-9"></div>
        //         <div className="cell width2px size-12"></div>
        //         <div className="cell width2px size-4 redB"></div>
        //         <div className="cell width2px size-10 redB"></div>
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-10"></div>
        //         <div className="cell width2px size-4"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-2"></div>
        //         <div className="cell width2px size-7"></div>
        //         <div className="cell width2px size-7 redB"></div>
        //         <div className="cell width2px size-11"></div>
        //         <div className="cell width2px size-16"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-14"></div>
        //         <div className="cell width2px size-3 redB"></div>
        //         <div className="cell width2px size-3 redB"></div>
        //         <div className="cell width2px size-10"></div>
        //         <div className="cell width2px size-12"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-5"></div>
        //         <div className="cell width2px size-3"></div>
        //         <div className="cell width2px size-7 redB"></div>
        //         <div className="cell width2px size-15"></div>
        //         <div className="cell width2px size-6"></div>
        //         <div className="cell width2px size-4"></div>
        //     </div>
        //     <div className="row height2px gap2px">
        //         <div className="cell width2px size-10"></div>
        //         <div className="cell width2px size-12"></div>
        //         <div className="cell width2px size-8"></div>
        //         <div className="cell width2px size-7"></div>
        //     </div>
        // </div>
    );
}

export default Logo;
