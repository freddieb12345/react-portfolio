import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../../styles/Contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
  const form = useRef();
    const formName = useRef()
    const formEmail = useRef()
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    if(failure || success) {
      document.getElementById("modal_logo").classList.add('display-noneImportant')
    }

    const formStep1 = (e) => {
        e.preventDefault();
        function displayNone() {
            document.getElementById("form-name").classList.add('display-none')
            document.getElementById("form-email").classList.remove('display-none')
            setTimeout(() => {
                formEmailOpacity()
            }, 500)
        }

        function formEmailOpacity() {
            document.documentElement.style.setProperty("--form2-opacity", "1")
        }

        document.documentElement.style.setProperty("--form1-opacity", "0")
        
        setTimeout(() => {
            displayNone()
        }, 500)
    }
    
    
    const formStep2 = (e) => {
        e.preventDefault();
        function displayNone() {
            document.getElementById("form-email").classList.add('display-none')
            document.getElementById("form-message").classList.remove('display-none')
            setTimeout(() => {
                formMessageOpacity()
            }, 500)
        }

        function formMessageOpacity() {
            document.documentElement.style.setProperty("--form3-opacity", "1")
        }

        document.documentElement.style.setProperty("--form2-opacity", "0")
        
        setTimeout(() => {
            displayNone()
        }, 500)
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
    {!loading && !success && !failure && (<form ref={form} className={`${styles.contactForm} display-none`} id="contact-form">
        <div className={`${styles.name}`}  id="form-name" ref={formName}>
          <label className={styles.nameLabel}>What's Your Name</label>
          <input className={styles.nameInput} type="text" name="user_name" autoComplete='off'/>
          <button className={`${styles.formButton} click`} onClick={formStep1}>Next</button>
        </div>
        <div className={`${styles.email} display-none`} ref={formEmail} id="form-email">
          <label className={styles.emailLabel}>Email</label>
          <input type="email" name="user_email" className={styles.emailInput}/>
          <button className={`${styles.formButton} click`} onClick={formStep2}>Next</button>
        </div>
        <div className={`${styles.message} display-none`} id="form-message">
          <label className={styles.messageLabel}>Message</label>
          <textarea className={styles.messageInput} name="message" />
          <button className={`${styles.formButton} click`} onClick={sendEmail}>Send</button>
        </div>
      </form>)}

        {loading && (<div className={styles.spinnerWrapper}>
        <FontAwesomeIcon icon="fa-solid fa-spinner" />
      </div>)}

      {success && (<h1 className={styles.success}>
        Your message has been sent!
      </h1>)}

      {failure && (<h1>
        Your message failed to send!
      </h1>)}
    </>
  );
};

export default Contact;
