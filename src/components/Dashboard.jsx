import React from 'react';
import { Link, Outlet,  } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Sidebar links */}
      <div style={{ width: '20%', backgroundColor: 'royalblue', height: '100vh', padding: '20px' }}>
        <Link to="/addfaculty" style={{ color: 'white', display: 'block', marginBottom: '10px' }}>Add Faculty</Link>
        <Link to="/facultylist" style={{ color: 'white', display: 'block' }}>Faculty List</Link>
      </div>
      {/* Content area where nested routes will render */}
      <div style={{ width: '80%', height: '100vh' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
