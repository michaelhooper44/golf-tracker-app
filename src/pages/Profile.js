import React, { useState } from 'react';
import styles from './Profile.module.css';

function Profile() {
  // Define state for user information
  const [userInfo, setUserInfo] = useState({
    username: 'john_doe',
    name: 'John Doe',
    email: 'johndoe@example.com',
    handicap: 12.5,
    
  });

  return (
    <div className={styles['profile']}>
      <h2>User Profile</h2>
      <div>
        <strong>Username:</strong> {userInfo.username}
      </div>
      <div>
        <strong>Name:</strong> {userInfo.name}
      </div>
      <div>
        <strong>Email:</strong> {userInfo.email}
      </div>
      <div>
        <strong>Handicap:</strong> {userInfo.handicap}
      </div>
      {/* Add more user profile fields here */}
    </div>
  );
}

export default Profile;
