import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

// Komponen Navbar untuk Landing Page saja
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('beranda');

  const navigate = useNavigate();

  // Mengambil status login dari context
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext?.isLoggedIn;

  useEffect(() => {
    // Fungsi untuk menangani scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Memperbarui link aktif berdasarkan posisi scroll
      const sections = ['beranda', 'kategori', 'keunggulan', 'kursus', 'bantuan', 'kontak'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Menjalankan sekali untuk mengatur state awal
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk menangani klik navigasi dengan smooth scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <div className="nav-left">
          <Link to="/" className="brand-link">
            <img src={`${process.env.PUBLIC_URL}/img/logo/LogoPandhu.png`} alt="Pandhu" className="brand-logo" />
            <span className="brand">Pandhu</span>
          </Link>
        </div>

        <nav className={`nav-center ${mobileMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          <ul className="nav-list">
            <li>
              <a href="#beranda" onClick={(e) => handleNavClick(e, 'beranda')} className={activeLink === 'beranda' ? 'active' : ''}>
                Beranda
              </a>
            </li>
            <li>
              <a href="#kategori" onClick={(e) => handleNavClick(e, 'kategori')} className={activeLink === 'kategori' ? 'active' : ''}>
                Kategori
              </a>
            </li>
            <li>
              <a href="#keunggulan" onClick={(e) => handleNavClick(e, 'keunggulan')} className={activeLink === 'keunggulan' ? 'active' : ''}>
                Keunggulan
              </a>
            </li>
            <li>
              <a href="#kursus" onClick={(e) => handleNavClick(e, 'kursus')} className={activeLink === 'kursus' ? 'active' : ''}>
                Kursus
              </a>
            </li>
            <li>
              <a href="#bantuan" onClick={(e) => handleNavClick(e, 'bantuan')} className={activeLink === 'bantuan' ? 'active' : ''}>
                QnA
              </a>
            </li>
            <li>
              <a href="#kontak" onClick={(e) => handleNavClick(e, 'kontak')} className={activeLink === 'kontak' ? 'active' : ''}>
                Kontak
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-right">
          <div className="nav-actions">
            {isLoggedIn ? (
              // Jika sudah login, tampilkan link ke halaman Kursus Saya
              <Link className="btn btn-primary nav-cta" to="/my-courses">
                Kursus Saya
              </Link>
            ) : (
              // Tampilan ketika belum login
              <>
                <Link className="nav-login" to="/login">
                  Masuk
                </Link>
                <Link className="btn btn-primary nav-cta" to="/register">
                  Daftar Gratis
                </Link>
              </>
            )}
            <button className={`nav-compact ${mobileMenuOpen ? 'active' : ''}`} aria-label="Toggle menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
