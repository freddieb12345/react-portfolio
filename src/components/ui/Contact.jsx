import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../../styles/Contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from "../../assets/circle.svg"
import semiCircle from "../../assets/semi-circle.svg"
import triangle from "../../assets/triangle.svg"
import squiggly from "../../assets/squiggly.svg"

const Contact = ({toggleModal}) => {
  const form = useRef();
  const formName = useRef()
  const formEmail = useRef()
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const scaleFactor = 1 / 20;

  function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for(let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const booleanInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px) rotate(${x / scaleFactor}deg)`
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm("service_zgpkgjw", "template_cm4wn4j", form.current, "cwI6VZszb2Lg7X3fo")
      .then((result) => {
          setLoading(false)
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setLoading(false)
          setFailure(true)
      });
  };

  return (
    <>
      <div className={styles.contact} onMouseMove={moveBackground}>
        <div className={styles.contactLeft}>
          <div className={styles.wrapper}>
            <div className={styles.envelopeWrapper}>
              <div className={`${styles.one} ${styles.lid}`}></div>
              <div className={`${styles.two} ${styles.lid}`}></div>
              <div className={styles.envelope}>
              </div>
              <div className={styles.letter}>
                <p>Contact Me</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className={styles.contactRight}>
          <div className={`${styles.icon} click`} onClick={toggleModal}>
              <FontAwesomeIcon icon="fa-solid fa-x"/>
          </div>
          <img src={semiCircle} alt="" className={`shape ${styles.shape} ${styles.shape0}`}/>
          <img src={circle} alt="" className={`shape ${styles.shape} ${styles.shape1}`}/>
          <img src={squiggly} alt="" className={`shape ${styles.shape} ${styles.shape2}`}/>
          <img src={circle} alt="" className={`shape ${styles.shape} ${styles.shape3}`}/>
          <img src={triangle} alt="" className={`shape ${styles.shape} ${styles.shape4}`}/>
          <img src={circle} alt="" className={`shape ${styles.shape} ${styles.shape5}`}/>
          <img src={squiggly} alt="" className={`shape ${styles.shape} ${styles.shape6}`}/>
          <img src={circle} alt="" className={`shape ${styles.shape} ${styles.shape7}`}/>
          <img src={semiCircle} alt="" className={`shape ${styles.shape} ${styles.shape8}`}/>
          <img src={squiggly} alt="" className={`shape ${styles.shape} ${styles.shape9}`}/>
          <img src={circle} alt="" className={`shape ${styles.shape} ${styles.shape10}`}/>
          <img src={semiCircle} alt="" className={`shape ${styles.shape} ${styles.shape11}`}/>
          {!loading && !success && !failure && 
            (
              <form ref={form} className={`${styles.contactForm}`} id="contact-form">
                <h2 className={styles.formTitle}>
                  Get in touch
                </h2>
                <div className={`${styles.name}`}  id="form-name" ref={formName}>
                  <input className={styles.nameInput} type="text" name="user_name" autoComplete='off' placeholder='Name'/>
                </div>
                <div className={`${styles.email}`} ref={formEmail} id="form-email">
                  <input type="email" name="user_email" className={styles.emailInput} autoComplete='off' placeholder='Email'/>
                </div>
                <div className={`${styles.message}`} id="form-message">
                  <textarea className={styles.messageInput} name="message" autoComplete='off' placeholder='Message'/>
                </div>
                <button className={`${styles.formButton} click`} onClick={sendEmail}>
                  <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                </button>
              </form>
            )
          }

          {loading && 
            (
              <div className={styles.spinnerWrapper}>
                <FontAwesomeIcon icon="fa-solid fa-spinner" />
              </div>
            )
          }

          {
            success && 
            (
              <h1 className={styles.success}>
                Your message has been sent!
              </h1>
            )
          }

          {
            failure && 
            (
              <h1>
                Your message failed to send!
              </h1>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Contact;
