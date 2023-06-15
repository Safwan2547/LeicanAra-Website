import React from 'react';
import './tailwind.css';
import './index.css';
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Cursor from './Modules/cursor';
import Navbar from './Modules/nav';
import ContactPage from './Pages/ContactPage';
import StarfallPage from './Pages/StarFallPage';
import HomePage from './Pages/HomePage';
import FAQPage from './Pages/FAQPage';

function App() {
  return (
    <Router >
    <div className=" sm:m-0  bg-MainBeige cursor-none">
      {/* <Intro/> */}
      <Cursor />
      <Navbar />
      
      
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/ContactPage" element={<ContactPage />} />
        <Route exact path="/FAQPage" element={<FAQPage />} />
        <Route exact path="/StarFallPage" element={<StarfallPage />} />



      </Routes>
      
      
      </div>
    </Router>
);
}
export default App;
