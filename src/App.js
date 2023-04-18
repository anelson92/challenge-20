
// import './App.css';
// import from react
import { useState } from 'react';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Portfolio from './components/Pages/Portfolio';

function App() {

const [pages] = useState([
  {
    name: 'About',
    component: About
  },
  {
    name: 'Portfolio',
    component: Portfolio
    },
  {
    name: 'Contact',
    component: Contact
  }
]);

const [currentPage, setCurrentPage] = useState(pages[0]);

const handlePageChange = (page) => {
const newPage = pages.find(p => p.name === page);
setCurrentPage(newPage);
};

return (
  <div className="App">
  <Header handlePageChange={handlePageChange}>
    <Nav 
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />
  </Header>
  <Footer />
  </div>
);
}

export default App;