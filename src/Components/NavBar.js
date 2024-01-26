import React from 'react';

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
              {/* <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Home
                </a>
              </li> */}
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About Me
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
