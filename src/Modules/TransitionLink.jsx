import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TransitionLink = ({to, children, className}) => {
  const [opacity, setOpacity] = useState('opacity-0');
    const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (opacity === 'opacity-100') {
      setTimeout(() => {
        navigate(to);
        setOpacity('opacity-0');
      }, 1000);
    }
  }, [opacity, navigate, to]);

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
        <div className={`fixed top-0 left-0 w-screen h-screen bg-MainBeige transition-opacity duration-300 ${opacity}`}></div>
      }
    </>
  );
};

export default TransitionLink;
