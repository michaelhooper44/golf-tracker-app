import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Athens GolfTracker</h1>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              {/* Add more navigation links here */}
            </ul>
          </nav>
          <hr></hr>
        </header>

        <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

