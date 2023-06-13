import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TransitionLink = ({to, children, className}) => {
  const [opacity, setOpacity] = useState('opacity-0');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [display, setDisplay] = useState('block'); // Initialize display state

  const navigate = useNavigate();
  useEffect(() => {
    if (opacity === 'opacity-100') {
      setTimeout(() => {
        navigate(to);
        setOpacity('opacity-0');
      }, 500);
    }
  }, [opacity, navigate, to]);
  useEffect(() => {
    if (opacity === 'opacity-0') {
      // When opacity reaches 'opacity-0', update display state to 'none'
      setDisplay('none');
    }
  }, [opacity]);

  return (
    <>
      <Link 
        to={to} 
        onClick={(e) => {
          e.preventDefault();
          setIsTransitioning(true);

          setTimeout(() => setOpacity('opacity-100'), 10);
      }}
        
        className={className}>
        {children}
      </Link>
      {isTransitioning && 
        <div className={`fixed top-0 left-0 w-screen h-screen bg-black transition-opacity duration-500 ${opacity}`} style={{ display }}></div>
      }
    </>
  );
};

export default TransitionLink;
