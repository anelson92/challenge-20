
// import React, { useState } from 'react';
// import About from '../components/Pages/About'
// import Contact from '../components/Pages/Contact'
// import Portfolio from '../components/Pages/Portfolio'
// import Header from '../components/Header'
// import HomePage from '../components/Pages/Homepage'
// import Button from '@mui/material/Button'


// function Navigation() {

//     const [currentPage, setCurrentPage] = useState('Home');

//     const handlePageChange = (page) =>  {
//         setCurrentPage(page);
//         console.log(page)
//         console.log(currentPage)
//     }

//     const navBar  = () => {
        
//         if(currentPage === 'Home'){
//             return <HomePage></HomePage>
//         }
//         if(currentPage === 'About') {
//             return <About></About>
//         }
//         if(currentPage === 'Portfolio') {
//             return <Portfolio></Portfolio>
//         }
//         if(currentPage === 'Contact') {
//             return <Contact></Contact>
//         }
//     }

//     return (
//         <>
//        <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
//        {navBar()}
//        </>
//       );
//     }

// export default Navigation;