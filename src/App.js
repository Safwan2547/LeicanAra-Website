import React from 'react';
import './tailwind.css';
import './index.css'
import Cursor from './Modules/cursor';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router className="cursor-none">
      <Cursor />


    <div className=" cursor-none bg-MainBeige flex justify-center items-center h-screen prose lg:prose-xl">
    <p className="text-Black text-center font-Satoshi text-9xl font-bold">Branding Meets Soul</p>
  </div>

  </Router>
);
}
export default App;
