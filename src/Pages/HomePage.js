import React from 'react';
import LandingPage from './HomePage/landing';
import AboutPage from './HomePage/About';
//The Home Page bundles all the other parts of the homePage and connects it together
function HomePage() {
    return (
        <div>
            <LandingPage />
            <AboutPage />
        </div>
    );
}

export default HomePage;
