import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import Footer from '../components/Footer';

// Data kursus yang diikuti pengguna dengan gambar
const myCoursesData = [
  {
    id: 1,
    title: 'Data Science dan Machine Learning dengan Python',
    author: 'Jason Williams',
    category: 'Sains',
    categoryColor: '#8b5cf6',
    progress: 45,
    totalLessons: 29,
    completedLessons: 13,
    duration: '8 jam 15 mnt',
    lastAccessed: '2 jam yang lalu',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'Pelajari dasar-dasar Data Science dan Machine Learning menggunakan Python',
    skills: ['Python', 'Pandas', 'Machine Learning', 'Deep Learning'],
    rating: 4.9,
    students: 2340,
  },
  {
    id: 2,
    title: 'Menciptakan Skema Warna untuk Proyek UX Design',
    author: 'Pamela Foster',
    category: 'Desain',
    categoryColor: '#ec4899',
    progress: 20,
    totalLessons: 24,
    completedLessons: 5,
    duration: '6 jam 30 mnt',
    lastAccessed: '1 hari yang lalu',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    description: 'Kuasai seni pemilihan warna untuk menciptakan desain UI/UX yang memukau',
    skills: ['Color Theory', 'UI Design', 'Figma', 'Brand Identity'],
    rating: 4.8,
    students: 1856,
  },
  {
    id: 3,
    title: 'Culture & Leadership: Strategi untuk Bisnis Sukses',
    author: 'Rose Simmons',
    category: 'Bisnis',
    categoryColor: '#10b981',
    progress: 100,
    totalLessons: 35,
    completedLessons: 35,
    duration: '10 jam',
    lastAccessed: '1 minggu yang lalu',
    completed: true,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    description: 'Bangun kepemimpinan yang kuat dan budaya perusahaan yang sukses',
    skills: ['Leadership', 'Team Building', 'Communication', 'Strategy'],
    rating: 4.9,
    students: 3120,
  },
];

// Komponen kartu kursus yang lebih menarik
const MyCourseCard = ({ course, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="premium-course-card" style={{ animationDelay: `${index * 0.1}s` }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Kontainer Gambar - Menampilkan thumbnail kursus */}
      <div className="card-image-container">
        <img
          src={course.thumbnail}
          alt={course.title}
          className={`card-thumbnail ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop`;
          }}
        />
        <div className="card-image-overlay" />

        {/* Badge Kategori - Menampilkan kategori kursus */}
        <span className="category-badge" style={{ backgroundColor: course.categoryColor }}>
          {course.category}
        </span>

        {/* Badge Selesai - Ditampilkan jika kursus sudah selesai */}
        {course.completed && (
          <div className="completed-ribbon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Selesai</span>
          </div>
        )}

        {/* Aksi Cepat - Muncul saat hover (bookmark, share) */}
        <div className={`card-quick-actions ${isHovered ? 'visible' : ''}`}>
          <button className="quick-action-btn" title="Bookmark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
          <button className="quick-action-btn" title="Share">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>

        {/* Tombol Preview - Muncul saat hover */}
        <div className={`play-preview ${isHovered ? 'visible' : ''}`}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      {/* Konten Kartu - Informasi detail kursus */}
      <div className="card-content">
        {/* Info Pengajar */}
        <div className="card-author">
          <div className="author-avatar" style={{ background: course.categoryColor }}>
            {course.author.charAt(0)}
          </div>
          <span className="author-name">{course.author}</span>
          <div className="rating-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>{course.rating}</span>
          </div>
        </div>

        {/* Judul Kursus */}
        <h3 className="card-title">{course.title}</h3>

        {/* Deskripsi Singkat */}
        <p className="card-description">{course.description}</p>

        {/* Tag Kemampuan yang Dipelajari */}
        <div className="card-skills">
          {course.skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="skill-tag">
              {skill}
            </span>
          ))}
          {course.skills.length > 3 && <span className="skill-tag more">+{course.skills.length - 3}</span>}
        </div>

        {/* Bagian Progress - Menampilkan kemajuan belajar */}
        <div className="card-progress-section">
          <div className="progress-header">
            <span className="progress-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {course.completedLessons}/{course.totalLessons} materi
            </span>
            <span className="progress-percentage" style={{ color: course.progress === 100 ? '#10b981' : '#3b82f6' }}>
              {course.progress}%
            </span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${course.progress}%`,
                background: course.progress === 100 ? 'linear-gradient(90deg, #10b981, #34d399)' : 'linear-gradient(90deg, #3b82f6, #60a5fa)',
              }}
            />
          </div>
        </div>

        {/* Info Tambahan - Durasi dan jumlah siswa */}
        <div className="card-meta">
          <div className="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{course.duration}</span>
          </div>
          <div className="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>{course.students.toLocaleString()} siswa</span>
          </div>
        </div>

        {/* Tombol Aksi - Lanjutkan belajar atau lihat ulang */}
        <div className="card-actions">
          {course.completed ? (
            <>
              <button className="btn-action secondary" onClick={() => navigate(`/practice/${course.id}`)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Lihat Ulang
              </button>
              <button className="btn-action outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Sertifikat
              </button>
            </>
          ) : (
            <button className="btn-action primary full" onClick={() => navigate(`/practice/${course.id}`)}>
              <span>Lanjutkan Belajar</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label, color, delay }) => (
  <div className="stat-card-new" style={{ animationDelay: `${delay}s` }}>
    <div className="stat-icon-wrapper" style={{ background: `${color}15`, color: color }}>
      {icon}
    </div>
    <div className="stat-info">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  </div>
);

const MyCoursesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const { user, logout } = useContext(AuthContext);
  const userName = user?.fullName || 'Pelajar';

  // Fungsi untuk logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Filter kursus berdasarkan tab dan search
  const getFilteredCourses = () => {
    let filtered = myCoursesData;

    // Filter by tab
    switch (activeTab) {
      case 'in-progress':
        filtered = filtered.filter((c) => !c.completed);
        break;
      case 'completed':
        filtered = filtered.filter((c) => c.completed);
        break;
      default:
        break;
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.author.toLowerCase().includes(searchQuery.toLowerCase()) || c.category.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return filtered;
  };

  const filteredCourses = getFilteredCourses();

  // Menghitung statistik
  const totalCourses = myCoursesData.length;
  const inProgressCourses = myCoursesData.filter((c) => !c.completed).length;
  const completedCourses = myCoursesData.filter((c) => c.completed).length;
  const totalHours = myCoursesData.reduce((acc, c) => {
    const hours = parseFloat(c.duration.split(' ')[0]);
    return acc + hours;
  }, 0);

  return (
    <div className="my-courses-page-new">
      {/* Header Premium - Navigasi utama halaman */}
      <header className="premium-header">
        <div className="container header-container">
          <Link to="/" className="header-brand">
            <img src={`${process.env.PUBLIC_URL}/img/logo/LogoPandhu.png`} alt="Pandhu" className="brand-logo" />
            <span className="brand-name">Pandhu</span>
          </Link>

          <nav className="header-nav-new">
            <Link to="/" className="nav-link-new">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Beranda</span>
            </Link>
            <Link to="/my-courses" className="nav-link-new active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <span>Kursus Saya</span>
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/profile" className="user-profile-link">
              <div className="user-avatar-header">{userName.charAt(0)}</div>
              <span className="user-name-header">{userName}</span>
            </Link>
            <button className="logout-btn-new" onClick={handleLogout} title="Keluar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="main-content-new">
        <div className="container">
          {/* Bagian Statistik - Menampilkan ringkasan kursus */}
          <section className="hero-section-new">
            {/* Grid Statistik - Menampilkan ringkasan kursus */}
            <div className="stats-grid-new">
              <StatCard
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                }
                value={totalCourses}
                label="Total Kursus"
                color="#3b82f6"
                delay={0.1}
              />
              <StatCard
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                value={inProgressCourses}
                label="Sedang Dipelajari"
                color="#f59e0b"
                delay={0.2}
              />
              <StatCard
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                }
                value={completedCourses}
                label="Selesai"
                color="#10b981"
                delay={0.3}
              />
              <StatCard
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                }
                value={`${totalHours}+`}
                label="Jam Belajar"
                color="#8b5cf6"
                delay={0.4}
              />
            </div>
          </section>

          {/* Bagian Toolbar - Pencarian, filter, dan pengaturan tampilan */}
          <section className="toolbar-section">
            <div className="toolbar-left">
              <div className="search-box-new">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input type="text" placeholder="Cari kursus..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
            </div>

            <div className="toolbar-center">
              <div className="tab-buttons-new">
                <button className={`tab-btn-new ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
                  <span>Semua</span>
                  <span className="tab-count">{totalCourses}</span>
                </button>
                <button className={`tab-btn-new ${activeTab === 'in-progress' ? 'active' : ''}`} onClick={() => setActiveTab('in-progress')}>
                  <span>Sedang Dipelajari</span>
                  <span className="tab-count">{inProgressCourses}</span>
                </button>
                <button className={`tab-btn-new ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => setActiveTab('completed')}>
                  <span>Selesai</span>
                  <span className="tab-count">{completedCourses}</span>
                </button>
              </div>
            </div>

            <div className="toolbar-right">
              <div className="view-toggle">
                <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')} title="Grid View">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>
                <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')} title="List View">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </button>
              </div>
              <button className="btn-explore-new" onClick={() => navigate('/')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
                Jelajahi Kursus
              </button>
            </div>
          </section>

          {/* Grid Kursus - Menampilkan daftar kursus pengguna */}
          <section className="courses-section-new">
            {filteredCourses.length > 0 ? (
              <div className={`courses-grid-new ${viewMode}`}>
                {filteredCourses.map((course, index) => (
                  <MyCourseCard key={course.id} course={course} index={index} />
                ))}
              </div>
            ) : (
              <div className="empty-state-new">
                <div className="empty-illustration">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <h3>Tidak ada kursus ditemukan</h3>
                <p>{searchQuery ? `Tidak ada kursus yang cocok dengan "${searchQuery}"` : 'Mulai belajar dengan mendaftar kursus baru'}</p>
                <button className="btn-primary-large" onClick={() => navigate('/')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                  Jelajahi Kursus Baru
                </button>
              </div>
            )}
          </section>

          {/* Bagian CTA - Ajakan untuk melanjutkan belajar */}
          {inProgressCourses > 0 && (
            <section className="cta-section">
              <div className="cta-card-new">
                <div className="cta-content">
                  <div className="cta-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                  <div className="cta-text">
                    <h3>Lanjutkan Belajar!</h3>
                    <p>Kamu memiliki {inProgressCourses} kursus yang sedang berjalan. Terus semangat!</p>
                  </div>
                </div>
                <button
                  className="cta-button"
                  onClick={() => {
                    const inProgressCourse = myCoursesData.find((c) => !c.completed);
                    if (inProgressCourse) {
                      navigate(`/practice/${inProgressCourse.id}`);
                    }
                  }}
                >
                  Lanjutkan Sekarang
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyCoursesPage;
