import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// Dashboard page removed — use MyCoursesPage instead
import CourseDetailPage from './pages/CourseDetailPage';
import PaymentPage from './pages/PaymentPage';
import MyCoursesPage from './pages/MyCoursesPage';
import ProfilePage from './pages/ProfilePage';
import ScrollToTop from './components/ScrollToTop';
import AIChatbox from './components/AIChatbox';

// Membuat context untuk status autentikasi pengguna
export const AuthContext = createContext();

function App() {
  // State untuk menyimpan status login dan data pengguna
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Fungsi untuk login
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  // Fungsi untuk logout
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/payment/:id" element={<PaymentPage />} />
            <Route path="/my-courses" element={<MyCoursesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <ScrollToTop />
          <AIChatbox />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
