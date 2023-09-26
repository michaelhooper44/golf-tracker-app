import React, { useState } from 'react';
import styles from './Profile.module.css';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={styles['profile-container']}>
        <img className={styles['profile-image']}src={user.picture} alt={user.name} />
        <h2 className={styles['user-name']}>{user.name}</h2>
        <p className={styles['user-email']}>{user.email}</p>
        <LogoutButton ></LogoutButton>
      </div>
     
    )
  );
//   // Define state for user information
//   const [userInfo, setUserInfo] = useState({
//     username: 'john_doe',
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     handicap: 12.5,
    
//   });

//   return (
//     <div className={styles['profile']}>
//       <h2>User Profile</h2>
//       <div>
//         <strong>Username:</strong> {userInfo.username}
//       </div>
//       <div>
//         <strong>Name:</strong> {userInfo.name}
//       </div>
//       <div>
//         <strong>Email:</strong> {userInfo.email}
//       </div>
//       <div>
//         <strong>Handicap:</strong> {userInfo.handicap}
//       </div>
//       <LogoutButton></LogoutButton>
//       {/* Add more user profile fields here */}
//     </div>
//   );
 }

export default Profile;
