import React from 'react';


function Footer() {
    const date = new Date();
    const currentDate = date.getFullYear();
    return (
      <footer className='footer'>
        <p className='footer-text'>Copyright  &copy;
          {currentDate} Argent Bank</p>
      </footer>
    )
  }
  
  export default Footer

