
// import './App.css';
// import from react 
import { useState } from 'react';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Pages';

function App() {

  const [pages] = useState([
    {
      name: 'About'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Resume'
    },
    {
      name: 'Contact'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
        <Header>
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
