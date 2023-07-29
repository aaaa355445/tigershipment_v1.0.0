import React from 'react';
import Sidebar from '../../../components/shared/Sidebar/Sidebar.jsx';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <Sidebar />
        <div className={styles.dashboardContainer}>
            
        </div>
    </div>
  )
}

export default Dashboard;