import './styles/App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { reveal } from "./js/reveal"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  window.addEventListener("scroll", reveal);
  const [toggle, setToggle] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [logoToggle, setLogoToggle] = useState(false);
  const [formToggle, setFormToggle] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(true);
  
  const toggleModalWithDelay = (delay) => {
    setTimeout(() => {
      toggleModal()
    }, delay)
  }

  function formAndLogoToggle() { 
    setFormToggle(true)
    setLogoToggle(false)
  }

  function toggleModalOff() {
    setModalToggle(false)
    setLogoToggle(false)
    setFormToggle(false)
    setLogoToggle(false)
    
    setTimeout(() => {
      setHeaderToggle(true)
    }, 500)
  }

  function toggleModalOn() {
    setModalToggle(true)
    setLogoToggle(true)
    setHeaderToggle(false)
    
    setTimeout(() => {
      formAndLogoToggle()
    }, 1500)
  }

  const toggleModal = () => {
    setToggle((prev) => !prev)

    if(!toggle) {
      toggleModalOn()

    } else if(toggle) {
      toggleModalOff()
    }
  }

  useEffect(() => {
    console.table({
      "modalToggle": modalToggle,
      "logoToggle":logoToggle,
      "formToggle":formToggle,
      "headerToggle": headerToggle
    });
  }, [modalToggle, logoToggle, formToggle, headerToggle]);

  return (
    <div className="App">
      <a href="/#">
          <button className={`mail__icon click`} onClick={toggleModal}>
              <FontAwesomeIcon icon="fa-solid fa-envelope"/>
          </button>
      </a>
      <Nav toggleModal = {toggleModal} toggleModalOff={toggleModalOff}/>
      <Landing 
        modalToggle = {modalToggle} 
        logoToggle={logoToggle} 
        formToggle={formToggle} 
        headerToggle={headerToggle}
        toggleModal={toggleModal}
      />
      <About />
      <Projects />
      <Footer toggleModalWithDelay={toggleModalWithDelay}/>
    </div>
  );
}

export default App;
