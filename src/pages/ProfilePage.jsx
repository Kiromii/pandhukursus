import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  // State untuk form profil
  const [formData, setFormData] = useState({
    fullName: user?.fullName || 'Nama Pengguna',
    email: user?.email || 'email@example.com',
    phone: '+62 812 3456 7890',
    bio: 'Saya adalah pelajar yang antusias dan selalu ingin mengembangkan skill baru dalam dunia teknologi dan desain.',
  });

  // State untuk mode edit
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  // Handle perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle simpan profil
  const handleSave = () => {
    setIsEditing(false);
    // Simpan ke backend/context di sini
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="profile-page">
      {/* Header dengan tombol kembali */}
      <header className="profile-header">
        <button className="back-button" onClick={() => navigate('/my-courses')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Kembali ke Kursus Saya</span>
        </button>
        <h1 className="profile-page-title">Profil Saya</h1>
        <div className="header-spacer"></div>
      </header>

      <main className="profile-main">
        <div className="profile-container">
          {/* Sidebar navigasi profil */}
          <aside className="profile-sidebar">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="profile-name">{formData.fullName}</h3>
              <p className="profile-email">{formData.email}</p>
            </div>

            <nav className="profile-nav">
              <button className={`profile-nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Informasi Profil</span>
              </button>
              <button className={`profile-nav-item ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Keamanan</span>
              </button>
              <button className={`profile-nav-item ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => setActiveTab('notifications')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span>Notifikasi</span>
              </button>
              <button className={`profile-nav-item ${activeTab === 'certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                <span>Sertifikat</span>
              </button>
            </nav>

            <button className="logout-button" onClick={handleLogout}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Keluar</span>
            </button>
          </aside>

          {/* Konten utama profil */}
          <div className="profile-content">
            {activeTab === 'profile' && (
              <div className="profile-section">
                <div className="section-header">
                  <h2>Informasi Profil</h2>
                  {!isEditing ? (
                    <button className="btn btn-secondary" onClick={() => setIsEditing(true)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                      Edit Profil
                    </button>
                  ) : (
                    <div className="edit-actions">
                      <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                        Batal
                      </button>
                      <button className="btn btn-primary" onClick={handleSave}>
                        Simpan
                      </button>
                    </div>
                  )}
                </div>

                <div className="profile-form">
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    {isEditing ? <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="form-input" /> : <p className="form-value">{formData.fullName}</p>}
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    {isEditing ? <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" /> : <p className="form-value">{formData.email}</p>}
                  </div>

                  <div className="form-group">
                    <label>Nomor Telepon</label>
                    {isEditing ? <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" /> : <p className="form-value">{formData.phone}</p>}
                  </div>

                  <div className="form-group">
                    <label>Bio</label>
                    {isEditing ? <textarea name="bio" value={formData.bio} onChange={handleInputChange} className="form-input form-textarea" rows="4" /> : <p className="form-value">{formData.bio}</p>}
                  </div>
                </div>

                {/* Statistik pengguna */}
                <div className="profile-stats">
                  <h3>Statistik Belajar</h3>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <span className="stat-number">5</span>
                      <span className="stat-label">Kursus Diikuti</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">32</span>
                      <span className="stat-label">Jam Belajar</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">3</span>
                      <span className="stat-label">Sertifikat</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">89%</span>
                      <span className="stat-label">Tingkat Penyelesaian</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="profile-section">
                <div className="section-header">
                  <h2>Keamanan Akun</h2>
                </div>
                <div className="security-content">
                  <div className="security-item">
                    <div className="security-info">
                      <h4>Ubah Password</h4>
                      <p>Pastikan akun Anda tetap aman dengan password yang kuat</p>
                    </div>
                    <button className="btn btn-secondary">Ubah</button>
                  </div>
                  <div className="security-item">
                    <div className="security-info">
                      <h4>Autentikasi Dua Faktor</h4>
                      <p>Tambahkan lapisan keamanan ekstra untuk akun Anda</p>
                    </div>
                    <button className="btn btn-secondary">Aktifkan</button>
                  </div>
                  <div className="security-item">
                    <div className="security-info">
                      <h4>Riwayat Login</h4>
                      <p>Lihat aktivitas login terbaru di akun Anda</p>
                    </div>
                    <button className="btn btn-secondary">Lihat</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="profile-section">
                <div className="section-header">
                  <h2>Pengaturan Notifikasi</h2>
                </div>
                <div className="notification-settings">
                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Notifikasi Email</h4>
                      <p>Terima update kursus dan promosi via email</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Pengingat Belajar</h4>
                      <p>Dapatkan pengingat harian untuk melanjutkan belajar</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Newsletter</h4>
                      <p>Terima tips dan artikel terbaru seputar pembelajaran</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="profile-section">
                <div className="section-header">
                  <h2>Sertifikat Saya</h2>
                </div>
                <div className="certificates-grid">
                  <div className="certificate-card">
                    <div className="certificate-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </div>
                    <div className="certificate-info">
                      <h4>Dasar-Dasar UI/UX Design</h4>
                      <p>Selesai pada 15 Januari 2024</p>
                    </div>
                    <button className="btn btn-secondary btn-sm">Unduh</button>
                  </div>
                  <div className="certificate-card">
                    <div className="certificate-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </div>
                    <div className="certificate-info">
                      <h4>JavaScript untuk Pemula</h4>
                      <p>Selesai pada 28 Desember 2023</p>
                    </div>
                    <button className="btn btn-secondary btn-sm">Unduh</button>
                  </div>
                  <div className="certificate-card">
                    <div className="certificate-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </div>
                    <div className="certificate-info">
                      <h4>React.js Fundamental</h4>
                      <p>Selesai pada 10 November 2023</p>
                    </div>
                    <button className="btn btn-secondary btn-sm">Unduh</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
