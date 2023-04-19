import React from 'react';
import styles from '../../styles/styles.module.css'
// images
import github from '../../assets/github.png'
import email from '../../assets/email.png'


function Contact() {

  return (
    <>

    <h1 className={styles['contact-header']}>Contact Me</h1>,

    <a className={styles['contact-methods']} href="mailto:amanda92nelson@gmail.com">
      <img className={styles['contact-methods']} src={email} alt="pink 'email' text" />
    </a>
    <a className={styles['contact-methods']} href="https://github.com/anelson92">
      <img className={styles['contact-methods']} src={github} alt="pink 'github' text" />
    </a>
  
    </>
  )
}

export default Contact;
