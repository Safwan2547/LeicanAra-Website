import React, { useRef,useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransitionCover from './TransitionCover';
import TransitionLink from './TransitionLink';

// import DropdownMenu from './DropDown';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
      console.log(isDropdownOpen)
    };
    const closeDropdown = () => {
      setIsDropdownOpen(false);
      console.log(isDropdownOpen)
    };


    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true),400); // 
        
      
        
      
        return () => {
          clearTimeout(timer)
        };
    
    }, []); 



    return (
        <nav className={`cursor-none transition-opacity ease-expo duration-1000  ${isMounted ? 'opacity-100' : 'opacity-0'} 
        flex align-middle justify-between cursor-none fixed top-5 left-5 right-5 sm:top-8 sm:mr-5 sm:ml-5 z-10`} >
            
            <TransitionLink to="/" className=' webkit-antialiased transform transition-button duration-500 hover:scale-110 hover:text-LunarTwilight  buttonC font-Satoshi text-xl sm:text-3xl font-extralight cursor-none'>LeicanAra</TransitionLink>
            <div className="links  flex justify-between items-center space-x-8">
            <Link to="" className=' opacity-80 sm:hidden bg-none  text-white font-bold w-6 h-6 p-1 rounded-full relative'>
          

            
            <div className="absolute inset-x-0 top-1/2 bg-black h-0.5 w-5 transform -rotate-90"></div>
            <div className="absolute inset-x-0 top-1/2 bg-black h-0.5 w-5 transform flex justify-between"></div>

            
                </Link>
                {<TransitionLink to="/FAQPage"  className='hover:text-LunarTwilight transform transition-button duration-500 hover:scale-110 hidden lg:block buttonC font-Satoshi text-2xl font-medium cursor-none '>faq</TransitionLink> }

                <TransitionLink 
                  to="/ContactPage" 
                  className='hover:text-LunarTwilight transform transition-button duration-500 hover:scale-110 hidden lg:block buttonC font-Satoshi text-2xl font-medium cursor-none '>
                  contact
                </TransitionLink>

            </div>
            <button
              onClick={isDropdownOpen ? closeDropdown : toggleDropdown}
              className={`buttonC bg-NightFall hover:bg-LunarTwilight  hover:scale-110 z-51 dropdown-button transition-color duration-500 focus:outline-none w-8 h-8 rounded-full border-solid border-black 
             
               `}
            >
            {/* Dropdown button content */}
          </button>
          <div
            className={`fixed top-0 left-0  h-screen rounded-sm bg-LunarTwilight bg-opacity-90 backdrop-blur-lg transform transition-all  duration-700 ease-in-out ${
            isDropdownOpen ? 'w-2/3' : 'w-0'
             } origin-top-right z-10 `}
          >
            {/* Dropdown content */}
         </div>
        </nav>
    );
};

export default Navbar;