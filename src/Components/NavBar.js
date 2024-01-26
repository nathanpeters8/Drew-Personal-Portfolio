import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className='navbar navbar-expand-md'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-expanded='false'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/photography'>
                  Photography
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/news'>
                  News Packages
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/stories'>
                  Latest Stories
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
