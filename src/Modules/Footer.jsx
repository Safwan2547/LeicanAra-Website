import React from 'react';
import logo from '../Assets/Logo.svg';
import instagram_logo from '../Assets/Instagram_Glyph_Black.svg';

function Footer() {
  return (
    <footer className="relative p-10 sm:p-10 flex justify-normal items-center  bg-white text-nightfall py-24">
      <div className="container mx-auto flex justify-between">
        {/* Braided star image */}
        <div className="flex space-x-2 sm:justify-evenly sm:w-1/3">
          <img className='w-16 sm:w-16' src={logo} alt="LeicanAra logo" />
        </div>
        
        {/* Text section */}
        <div className='text-NightFall text-center sm:text-xl align-start items-center justify-start hidden sm:flex'>
          <p>Designed and Developed by LeicanAra<br />All Rights Reserved</p>
        </div>
        
        {/* Footer icons */}
        <div className="w-1/3 flex justify-center flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12">
          <a className="hover:scale-110 transition-all duration-300 buttonC" target="_blank" href='https://instagram.com/leicanara?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr'>
            <img className='hover:scale-[120%] hover:fill-LunarTwilight cursor-none transition-all duration-[400ms] buttonC w-8 sm:w-8' src={instagram_logo} alt="Instagram logo for LeicanAra" />
          </a>
          
          <a href="https://www.behance.net/gallery/177745281/LeicanAra-A-Journey-Beyond-Design/modules/1003956415" target="_blank" className="buttonC cursor-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 
          0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 
          2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444
           2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 
           2.868-3.016.05-3.016z"/></svg>
          </a>
        </div>
      </div>
      
      {/* Text section for small screens */}
      <div className='text-NightFall text-center sm:text-xl text-sm w-100 align-start absolute bottom-10 items-end justify-start pt-10 sm:hidden flex'>
        <p>Designed and Developed by LeicanAra<br />All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
