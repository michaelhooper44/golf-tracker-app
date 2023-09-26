import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';

function App() {
  const auth0Config = {
    domain: 'dev-3j8qu7etub1rlz6h.us.auth0.com',
    clientId: 'JpT083i4rO66WeFh26nCYL7YPqN9YMuS',
  };

  const [showHeader, setShowHeader] = useState(true);

  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      redirectUri={window.location.origin}
    >
    <Router>
      <div className="App">
      {showHeader && (
        <header className="App-header">
          <h1>Athens GolfTracker</h1>
          <nav>
            <ul>
            <li><Link to="/welcome">Welcome</Link></li>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              {/* Add more navigation links here */}
            </ul>
          </nav>
          <hr></hr>
        </header>
      )}
        <Routes>
        <Route path="/welcome" element={<Welcome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
    </Auth0Provider>
  );
}

export default App;

