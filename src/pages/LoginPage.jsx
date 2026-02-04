import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Fungsi untuk menangani submit form login
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);

    // Simulasi login berhasil dan menyimpan data pengguna
    login({
      email: formData.email,
      fullName: formData.email.split('@')[0], // Menggunakan bagian email sebagai nama
    });

    // Redirect ke beranda setelah login berhasil (user tetap login)
    navigate('/');
  };

  return (
    <div className="auth-page">
      {/* Sisi Kiri - Branding dan Informasi */}
      <div className="auth-branding">
        <div className="auth-branding-content">
          <Link to="/" className="auth-logo">
            <span className="auth-logo-text">Pandhu</span>
          </Link>

          <div className="auth-tagline">
            <h1>
              Permudah akses belajar untuk <span className="highlight-blue">Semua Kalangan</span> secara <span className="highlight-green">Online!</span>
            </h1>
          </div>

          <div className="auth-illustration">
            <div className="illustration-container">
              <div className="illustration-card">
                <div className="card-avatar">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="card-content">
                  <div className="card-badge success">Selamat Datang</div>
                  <p>Mulai perjalanan belajarmu</p>
                </div>
              </div>

              <div className="floating-element elem-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>

              <div className="floating-element elem-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
              </div>
            </div>
          </div>

          <div className="auth-stats">
            <div className="auth-stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Pengguna Aktif</span>
            </div>
            <div className="auth-stat">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Kursus</span>
            </div>
            <div className="auth-stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Mentor</span>
            </div>
          </div>
        </div>
        <div className="auth-decor decor-1"></div>
        <div className="auth-decor decor-2"></div>
      </div>
      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h2>Hai, selamat datang kembali</h2>
            <p>
              Baru di Pandhu?{' '}
              <Link to="/register" className="auth-link">
                Daftar Gratis
              </Link>
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input type="email" id="email" name="email" placeholder="Contoh: email@example.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Kata Sandi</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Masukkan kata sandi kamu" value={formData.password} onChange={handleChange} required />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}>
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-auth">
              Masuk
            </button>

            <div className="form-options">
              <label className="checkbox-wrapper">
                <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
                <span className="checkmark"></span>
                <span>Ingat perangkat ini</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Lupa kata sandi?
              </Link>
            </div>
          </form>

          <div className="auth-divider">
            <span>Atau masuk menggunakan</span>
          </div>

          <div className="social-auth">
            <button className="btn-social btn-facebook" aria-label="Masuk dengan Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </button>
            <button className="btn-social btn-google" aria-label="Masuk dengan Google">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </button>
            <button className="btn-social btn-apple" aria-label="Masuk dengan Apple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </button>
          </div>

          <p className="auth-terms">
            Dengan melanjutkan, kamu menerima <Link to="/terms">Syarat Penggunaan</Link> dan <Link to="/privacy">Kebijakan Privasi</Link> kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
