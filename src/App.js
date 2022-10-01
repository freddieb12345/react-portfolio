import './styles/App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { reveal } from "./js/reveal"
import React, { useState } from "react"

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

  const toggleModal = () => {
    setToggle((prev) => !prev)
    
    function formAndLogoToggle() { 
      setFormToggle(true)
      setLogoToggle(false)
    }

    if(!toggle) {
      setModalToggle(true)
      setLogoToggle(true)
      setHeaderToggle(false)
      
      setTimeout(() => {
        formAndLogoToggle()
      }, 1500)

    } else if(toggle) {
      setModalToggle(false)
      setLogoToggle(false)
      setFormToggle(false)
      setLogoToggle(false)
      
      setTimeout(() => {
        setHeaderToggle(true)
      }, 500)
    }
  }

  return (
    <div className="App">
      <Nav toggleModal = {toggleModal} />
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
