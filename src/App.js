import './App.css';
import NavBar from './Components/NavBar';
import Heading from './Components/Heading';
import AboutMe from './Components/AboutMe';
import Photography from './Components/Photography';
import NewsPackages from './Components/NewsPackages';
import Stories from './Components/Stories';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';




library.add(faLinkedin, faTwitter);

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container-xxl'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Heading />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/photography' element={<Photography />} />
            <Route path='/news' element={<NewsPackages />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/contact' element={<h1>Contact</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
