import React from 'react';
import './tailwind.css';
import './index.css';
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cursor from './Modules/cursor';
import LandingPage from './Pages/landing';
import Navbar from './Modules/nav';
import Intro from './Pages/Intro';
import Contact from './Pages/Contact';
import Starfall from './Pages/StarFall';



function App() {
  return (
    <Router >
    <div className="ml-5 mr-5 sm:ml-0  overflow-x-hidden bg-MainBeige cursor-none">
      {/* <Intro/> */}
      <Cursor />
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/StarFall" element={<Starfall />} />


      </Routes>
      </div>
    </Router>
);
}
export default App;
