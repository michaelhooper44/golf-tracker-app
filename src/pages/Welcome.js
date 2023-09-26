import React, { useEffect } from 'react';
import LoginButton from './LoginButton'; 
import styles from './Welcome.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

function Welcome() {
  const { isAuthenticated, loginWithRedirect, logout} = useAuth0();

  useEffect(() => {
    const showHeader = document.querySelector('.App-header');
    showHeader.style.display = 'none';

    // Make sure to set it back to true when the component unmounts if needed
    return () => {
      showHeader.style.display = 'block';
    };
  }, []);

  return (
    <div className={styles['welcome-container']}>
      <h1 className={styles['welcome-message']}>Welcome to Athens GolfTracker</h1>
      <p className={styles['track']}>Track your golf scores and stats with ease.</p>
      {isAuthenticated ? (
        <div className={styles['back-container']}>
          <BackButton></BackButton>
          <LogoutButton></LogoutButton>
        </div>
      ) : (
        <LoginButton className={styles['login-button']} />
      )}
    </div>
      
  );
}

export default Welcome;