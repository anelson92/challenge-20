import React from 'react';
import styles from '../styles/styles.module.css'


function Project({project}) {
  return (
        <>
            <h1 className={styles['project-title']}>{project.title}</h1>
            <div className={styles['project-container']}>
            <img className={styles['project-img']} src={project.img}></img>
            <div>
            <h2 className={styles['project-text']} >{project.description}</h2>
            <h2><a target="_blank" href={project.url}>Project Link</a></h2>
            </div>
            </div>
        </>
  );
}

export default Project;