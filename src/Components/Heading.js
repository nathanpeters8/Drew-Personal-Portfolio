import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Heading() {
  return (
    <div className='row justify-content-center'>
      <div className='col-12 mt-2 mb-3'>
        <h1>Drew Peters</h1>
      </div>
      <div className='social-links col-12 h2 d-flex justify-content-center gap-5'>
        <a href='#'>
          <FontAwesomeIcon icon={'fab fa-linkedin fa-xl'} />
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={'fab fa-twitter fa-xl'} />
        </a>
      </div>
      <div className='description col-8 text-center mt-3'>
        <p>
          I’m an aspiring journalist studying at the University of Northern Colorado. I specialize in digital and
          broadcast writing as well as photography. My time at UNC has strengthened my storytelling and writing skills
          tremendously. I have also had many opportunities to create and publish my various journalistic works while
          working as a UNC Athletics PR Intern as well as a student journalist for the UNC Mirror.
        </p>
      </div>
    </div>
  );
}

export default Heading;
