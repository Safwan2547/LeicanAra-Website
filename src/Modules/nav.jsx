import React, { useRef,useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true),400); // 
        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className={`transition-opacity ease-expo duration-1000  ${isMounted ? 'opacity-100' : 'opacity-0'} 
        flex align-middle justify-between cursor-none fixed top-5 left-5 right-5 sm:top-8`} >
            <Link to="/" className=' buttonC font-Satoshi text-xl sm:text-3xl font-medium cursor-none'>LeicanAra</Link>
            <div className="links flex justify-between items-center">
            <Link to="/SomePath" className=' sm:hidden bg-none border-solid border-2 border-black opacity-75 text-white font-bold w-6 h-6 p-1 rounded-full'>
                  {/* Icon goes here if needed */}
                </Link>
                <Link to="/Contact" className=' hidden lg:block buttonC font-Satoshi text-2xl font-medium cursor-none'>Contact</Link>
                {/* <Link to="/StarFall" className='buttonC font-Satoshi text-2xl font-medium cursor-none'>StarFall</Link> */}

            </div>
        </nav>
    );
};

export default Navbar;