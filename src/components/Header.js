import React, { useState } from 'react';
import About from '../components/Pages/About';
import Contact from '../components/Pages/Contact';
import Portfolio from '../components/Pages/Portfolio';
import HomePage from '../components/Pages/Homepage';
import Button from '@mui/material/Button';
import styles from '../styles/styles.module.css';


const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(page);
    console.log(currentPage);
  };

  const navBar = () => {
    if (currentPage === 'Home') {
      return <HomePage />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <header className={styles.header}>
          <h1 style={{ fontSize: '40px' }}>Amanda Nelson</h1>
          <div className={styles.nav}>
            <Button onClick={() => handlePageChange('Home')} variant="text">
              Home
            </Button>
            <Button onClick={() => handlePageChange('About')} variant="text">
              About
            </Button>
            <Button onClick={() => handlePageChange('Portfolio')} variant="text">
              Portfolio
            </Button>
            <Button onClick={() => handlePageChange('Contact')} variant="text">
              Contact
            </Button>
          </div>
        </header>
      </nav>
      {navBar()}
    </>
  );
};

export default Navigation;
