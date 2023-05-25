import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=" flex align-middle justify-between cursor-none fixed top-5 left-5 right-5 lg:p-3p-1 " >
            <Link to="/" className=' buttonC font-Satoshi text-2xl lg:text-3xl font-medium cursor-none'>LeicanAra</Link>
            <div className="links flex justify-between">
                <Link to="/Contact" className=' hidden lg:block buttonC font-Satoshi text-2xl font-medium cursor-none'>Contact</Link>
                {/* <Link to="/StarFall" className='buttonC font-Satoshi text-2xl font-medium cursor-none'>StarFall</Link> */}

            </div>
        </nav>
    );
};

export default Navbar;