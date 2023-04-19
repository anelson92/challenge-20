import React from 'react';
// styling
import styles from '../../styles/styles.module.css'
// images
import amanda from '../../assets/me.png'


function About() {
  return (
   <>
   <h1 className={styles['about-header']}>About Me</h1>
    <div className={styles['about-container']}>
        <img className={styles['about-img']} src={amanda} alt="woman wearing glasses" />
        <p className={styles['about-bio']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ex sit amet tincidunt hendrerit. 
        Aliquam in elementum ligula, nec condimentum dolor. Integer eu blandit libero, id fringilla dui. Pellentesque velit mi, commodo sed dictum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ex sit amet tincidunt hendrerit. Aliquam in elementum ligula, nec condimentum dolor. 
        Integer eu blandit libero, id fringilla dui. Pellentesque velit mi, commodo sed dictum.</p>
    </div>
   </>
  );
}

export default About;