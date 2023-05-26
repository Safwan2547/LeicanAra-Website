import React from 'react';
import './tailwind.css';
import './index.css';
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cursor from './Modules/cursor';
import Navbar from './Modules/nav';
import ContactPage from './Pages/ContactPage';
import StarfallPage from './Pages/StarFallPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <Router >
    <div className="ml-5 mr-5 sm:m-0  bg-MainBeige cursor-none">
      {/* <Intro/> */}
      <Cursor />
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/ContactPage" element={<ContactPage />} />
        <Route exact path="/StarFallPage" element={<StarfallPage />} />


      </Routes>
      </div>
    </Router>
);
}
export default App;
