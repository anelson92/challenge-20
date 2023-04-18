import React from 'react';
import styles from '../../styles/styles.module.css'


function About() {
  return (
   <>
   <h1 className={styles['about-header']}>Amanda Nelson</h1>
    <div className={styles['about-container']}>
        <img className={styles['about-img']} src='../../../public/me.png' alt="woman wearing glasses" />
        <p className={styles['about-bio']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ex sit amet tincidunt hendrerit. Aliquam in elementum ligula, nec condimentum dolor. Integer eu blandit libero, id fringilla dui. Pellentesque velit mi, commodo sed dictum.</p>
    </div>
   </>
  );
}

export default About;