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
import ProjectPage from './Pages/Projects/ProjectPage';

function App() {
  return (
    <Router >
    <div className=" sm:m-0 bg-white  ">
      {/* <Intro/> */}
      <Cursor />
      <Navbar />
      
      
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/ContactPage" element={<ContactPage />} />
        <Route exact path="/FAQPage" element={<FAQPage />} />
        <Route exact path="/StarFallPage" element={<StarfallPage />} />
        <Route exact path="/:projectKey" element={<ProjectPage />} />



      </Routes>
      
      
      </div>
    </Router>
);
}
export default App;
