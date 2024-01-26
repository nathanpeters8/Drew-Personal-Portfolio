import './App.css';
import NavBar from './Components/NavBar';
import Heading from './Components/Heading';
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
            <Route path='/about' element={<h1>About Me</h1>} />
            <Route path='/photography' element={<h1>Photography</h1>} />
            <Route path='/news' element={<h1>News Packages</h1>} />
            <Route path='/stories' element={<h1>Latest Stories</h1>} />
            <Route path='/contact' element={<h1>Contact</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
