import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Golf Score Tracker</h1>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              {/* Add more navigation links here */}
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

