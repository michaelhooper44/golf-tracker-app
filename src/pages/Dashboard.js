import React from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles['dash']}>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard. Here, you can view your golf scores and statistics.</p>
      {/* Add dashboard content */}
    </div>
  );
}

export default Dashboard;
