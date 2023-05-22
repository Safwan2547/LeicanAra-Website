import React from 'react';
import './tailwind.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cursor from './Modules/cursor';
import LandingPage from './Pages/landing';



function App() {
  return (
    <Router>
      <Cursor />

      <Routes>
        
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </Router>
);
}
export default App;
