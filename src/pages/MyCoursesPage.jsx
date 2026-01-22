import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import Footer from '../components/Footer';

// Data kursus yang diikuti pengguna
const myCoursesData = [
  {
    id: 1,
    title: 'Data Science dan Machine Learning dengan Python',
    author: 'Jason Williams',
    category: 'Sains',
    progress: 45,
    totalLessons: 29,
    completedLessons: 13,
    duration: '8 jam 15 mnt',
    lastAccessed: '2 jam yang lalu',
  },
  {
    id: 2,
    title: 'Menciptakan Skema Warna untuk Proyek UX Design',
    author: 'Pamela Foster',
    category: 'Desain',
    progress: 20,
    totalLessons: 24,
    completedLessons: 5,
    duration: '6 jam 30 mnt',
    lastAccessed: '1 hari yang lalu',
  },
  {
    id: 3,
    title: 'Culture & Leadership: Strategi untuk Bisnis Sukses',
    author: 'Rose Simmons',
    category: 'Bisnis',
    progress: 100,
    totalLessons: 35,
    completedLessons: 35,
    duration: '10 jam',
    lastAccessed: '1 minggu yang lalu',
    completed: true,
  },
];

// Komponen kartu kursus
const MyCourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className={`my-course-card ${course.completed ? 'completed' : ''}`}>
      {/* Gambar placeholder kursus */}
      <div className="my-course-image">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        {course.completed && (
          <div className="completed-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Selesai
          </div>
        )}
        <span className="course-category-tag">{course.category}</span>
      </div>

      {/* Informasi kursus */}
      <div className="my-course-content">
        <h3 className="my-course-title">{course.title}</h3>
        <p className="my-course-author">oleh {course.author}</p>

        {/* Progress bar */}
        <div className="my-course-progress">
          <div className="progress-info">
            <span>
              {course.completedLessons}/{course.totalLessons} materi
            </span>
            <span>{course.progress}%</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
          </div>
        </div>

        {/* Meta info */}
        <div className="my-course-meta">
          <span className="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {course.duration}
          </span>
          <span className="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {course.lastAccessed}
          </span>
        </div>

        {/* Tombol aksi */}
        <div className="my-course-actions">
          {course.completed ? (
            <>
              <button className="btn btn-secondary btn-small" onClick={() => navigate(`/course/${course.id}`)}>
                Lihat Ulang
              </button>
              <button className="btn btn-outline-primary btn-small">Unduh Sertifikat</button>
            </>
          ) : (
            <button className="btn btn-primary btn-small" onClick={() => navigate(`/course/${course.id}`)}>
              Lanjutkan Belajar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const MyCoursesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const { user, logout } = useContext(AuthContext);
  const userName = user?.fullName || 'Pelajar';

  // Fungsi untuk logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Filter kursus berdasarkan tab yang dipilih
  const getFilteredCourses = () => {
    switch (activeTab) {
      case 'in-progress':
        return myCoursesData.filter((c) => !c.completed);
      case 'completed':
        return myCoursesData.filter((c) => c.completed);
      default:
        return myCoursesData;
    }
  };

  const filteredCourses = getFilteredCourses();

  // Menghitung statistik
  const totalCourses = myCoursesData.length;
  const inProgressCourses = myCoursesData.filter((c) => !c.completed).length;
  const completedCourses = myCoursesData.filter((c) => c.completed).length;

  return (
    <div className="my-courses-page">
      {/* Header dengan navigasi */}
      <header className="app-header">
        <div className="container header-inner">
          <Link to="/" className="header-brand">
            <img src={`${process.env.PUBLIC_URL}/img/logo/LogoPandhu.png`} alt="Pandhu" className="brand-logo" />
            <span className="brand-name">Pandhu</span>
          </Link>
          <nav className="header-nav">
            <Link to="/" className="header-nav-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Beranda
            </Link>
            <Link to="/my-courses" className="header-nav-link active">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Kursus Saya
            </Link>
          </nav>
          <div className="header-user">
            <Link to="/profile" className="header-user-btn">
              <div className="header-avatar">{userName.charAt(0)}</div>
              <span className="header-user-name">{userName}</span>
            </Link>
            <button className="header-logout-btn" onClick={handleLogout} title="Keluar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="my-courses-main">
        <div className="container">
          {/* Hero Section */}
          <div className="my-courses-hero">
            <div className="my-courses-hero-content">
              <h1>📚 Kursus Saya</h1>
              <p>Kelola dan lanjutkan perjalanan belajarmu bersama Pandhu</p>
            </div>
            <div className="my-courses-hero-actions">
              <button className="btn btn-outline-light" onClick={() => navigate('/')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Ke Beranda
              </button>
              <button className="btn btn-primary" onClick={() => navigate('/')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                Jelajahi Kursus Baru
              </button>
            </div>
          </div>

          {/* Statistik kursus */}
          <div className="courses-stats-row">
            <div className="course-stat-item">
              <span className="stat-number">{totalCourses}</span>
              <span className="stat-text">Total Kursus</span>
            </div>
            <div className="course-stat-item">
              <span className="stat-number">{inProgressCourses}</span>
              <span className="stat-text">Sedang Dipelajari</span>
            </div>
            <div className="course-stat-item">
              <span className="stat-number">{completedCourses}</span>
              <span className="stat-text">Selesai</span>
            </div>
          </div>

          {/* Tab filter */}
          <div className="courses-tabs">
            <button className={`tab-button ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
              Semua ({totalCourses})
            </button>
            <button className={`tab-button ${activeTab === 'in-progress' ? 'active' : ''}`} onClick={() => setActiveTab('in-progress')}>
              Sedang Dipelajari ({inProgressCourses})
            </button>
            <button className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => setActiveTab('completed')}>
              Selesai ({completedCourses})
            </button>
          </div>

          {/* Daftar kursus */}
          {filteredCourses.length > 0 ? (
            <div className="my-courses-grid">
              {filteredCourses.map((course) => (
                <MyCourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <h3>Belum ada kursus</h3>
              <p>Mulai belajar dengan mendaftar kursus baru</p>
              <button className="btn btn-primary" onClick={() => navigate('/')}>
                Jelajahi Kursus
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyCoursesPage;
