import './App.css';
import NavBar from './Components/NavBar';
import Heading from './Components/Heading';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



library.add(faLinkedin, faTwitter);

function App() {
  return (
    <div className='App'>
      <div className='container-xxl'>
        <NavBar />
        <Heading />
      </div>
    </div>
  );
}

export default App;
