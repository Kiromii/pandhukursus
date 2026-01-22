import React from 'react';
import { Navigate } from 'react-router-dom';

// DashboardPage deprecated — redirect to My Courses
const DashboardPage = () => {
  return <Navigate to="/my-courses" replace />;
};

export default DashboardPage;
