import React from 'react';
import './tailwind.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cursor from './Modules/cursor';
import LandingPage from './Pages/landing';
import Navbar from './Modules/nav';



function App() {
  return (
    <Router>
      <Cursor />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </Router>
);
}
export default App;
