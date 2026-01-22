import React, { useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../App';
import Footer from '../components/Footer';
import { getCourseById, formatPrice } from '../data/coursesData';

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const userName = user?.fullName || 'Pelajar';

  // State untuk metode pembayaran yang dipilih
  const [selectedPayment, setSelectedPayment] = useState('');
  // State untuk loading proses pembayaran
  const [isProcessing, setIsProcessing] = useState(false);
  // State untuk status pembayaran berhasil
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Fungsi untuk logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Mencari kursus berdasarkan ID
  const course = getCourseById(id);

  // Jika kursus tidak ditemukan
  if (!course) {
    return (
      <div className="payment-page">
        <header className="app-header">
          <div className="container header-inner">
            <Link to="/" className="header-brand">
              <img src={`${process.env.PUBLIC_URL}/img/logo/LogoPandhu.png`} alt="Pandhu" className="brand-logo" />
              <span className="brand-name">Pandhu</span>
            </Link>
          </div>
        </header>
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1>Kursus tidak ditemukan</h1>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Kembali ke Beranda
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Jika kursus gratis, langsung proses pendaftaran
  if (course.price === 0) {
    return (
      <div className="payment-page">
        <header className="app-header">
          <div className="container header-inner">
            <Link to="/" className="header-brand">
              <img src={`${process.env.PUBLIC_URL}/img/logo/LogoPandhu.png`} alt="Pandhu" className="brand-logo" />
              <span className="brand-name">Pandhu</span>
            </Link>
          </div>
        </header>
        <div className="payment-container">
          <div className="container">
            <div className="payment-success-card">
              <div className="success-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h2>Selamat! Anda Berhasil Terdaftar</h2>
              <p>Kursus gratis "{course.title}" telah ditambahkan ke daftar kursus Anda.</p>
              <div className="success-actions">
                <button className="btn btn-primary" onClick={() => navigate(`/course/${course.id}`)}>
                  Mulai Belajar
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/')}>
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Metode pembayaran yang tersedia - dengan placeholder untuk gambar logo
  const paymentMethods = [
    { id: 'bca', name: 'BCA Virtual Account', logo: '/img/bca.png', type: 'bank' },
    { id: 'bni', name: 'BNI Virtual Account', logo: '/img/bni.png', type: 'bank' },
    { id: 'mandiri', name: 'Mandiri Virtual Account', logo: '/img/mandiri.png', type: 'bank' },
    { id: 'gopay', name: 'GoPay', logo: '/img/payments/gopay.png', type: 'ewallet' },
    { id: 'ovo', name: 'OVO', logo: '/img/ovo.png', type: 'ewallet' },
    { id: 'dana', name: 'DANA', logo: '/img/dana.png', type: 'ewallet' },
    { id: 'shopeepay', name: 'ShopeePay', logo: '/img/shopeepay.png', type: 'ewallet' },
  ];

  // Menghitung total pembayaran
  const adminFee = 2500;
  const totalPayment = course.price + adminFee;

  // Fungsi untuk memproses pembayaran
  const handlePayment = () => {
    if (!selectedPayment) {
      alert('Silakan pilih metode pembayaran');
      return;
    }

    setIsProcessing(true);

    // Simulasi proses pembayaran
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  // Tampilan setelah pembayaran berhasil
  if (paymentSuccess) {
    return (
      <div className="payment-page">
        <header className="app-header">
          <div className="container header-inner">
            <Link to="/" className="header-brand">
              <img src={`${process.env.PUBLIC_URL}/img/logo/LogoPandhu.png`} alt="Pandhu" className="brand-logo" />
              <span className="brand-name">Pandhu</span>
            </Link>
          </div>
        </header>
        <div className="payment-container">
          <div className="container">
            <div className="payment-success-card">
              <div className="success-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h2>Pembayaran Berhasil!</h2>
              <p>
                Terima kasih telah membeli kursus <strong>"{course.title}"</strong>
              </p>
              <p className="payment-detail-text">Kursus sudah ditambahkan ke akun Anda dan bisa diakses sekarang.</p>
              <div className="success-actions">
                <button className="btn btn-primary btn-glow" onClick={() => navigate(`/learn/${course.id}`)}>
                  Mulai Belajar Sekarang
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/my-courses')}>
                  Ke Kursus Saya
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="payment-page">
      {/* Header (menggantikan Navbar) */}
      <header className="app-header">
        <div className="container header-inner">
          <Link to="/" className="header-brand">
            <img src={`${process.env.PUBLIC_URL}/img/logo/LogoPandhu.png`} alt="Pandhu" className="brand-logo" />
            <span className="brand-name">Pandhu</span>
          </Link>
          <nav className="header-nav">
            <Link to="/my-courses" className="header-nav-link">
              Kursus Saya
            </Link>
            <Link to="/" className="header-nav-link">
              Jelajahi
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

      <div className="payment-container">
        <div className="container">
          {/* Breadcrumb navigasi */}
          <div className="payment-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to={`/course/${course.id}`}>{course.title}</Link>
            <span>/</span>
            <span className="current">Pembayaran</span>
          </div>

          <div className="payment-layout">
            {/* Kolom kiri - Metode pembayaran */}
            <div className="payment-methods-section">
              <h2>Pilih Metode Pembayaran</h2>

              {/* Transfer Bank */}
              <div className="payment-group">
                <h3 className="payment-group-title">Transfer Bank</h3>
                <div className="payment-options">
                  {paymentMethods
                    .filter((m) => m.type === 'bank')
                    .map((method) => (
                      <label key={method.id} className={`payment-option ${selectedPayment === method.id ? 'selected' : ''}`}>
                        <input type="radio" name="payment" value={method.id} checked={selectedPayment === method.id} onChange={(e) => setSelectedPayment(e.target.value)} />
                        <div className="payment-logo">
                          <img
                            src={method.logo}
                            alt={method.name}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <span className="payment-logo-fallback">{method.name.split(' ')[0]}</span>
                        </div>
                        <span className="payment-name">{method.name}</span>
                        <span className="payment-check">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      </label>
                    ))}
                </div>
              </div>

              {/* E-Wallet */}
              <div className="payment-group">
                <h3 className="payment-group-title">E-Wallet</h3>
                <div className="payment-options">
                  {paymentMethods
                    .filter((m) => m.type === 'ewallet')
                    .map((method) => (
                      <label key={method.id} className={`payment-option ${selectedPayment === method.id ? 'selected' : ''}`}>
                        <input type="radio" name="payment" value={method.id} checked={selectedPayment === method.id} onChange={(e) => setSelectedPayment(e.target.value)} />
                        <div className="payment-logo">
                          <img
                            src={method.logo}
                            alt={method.name}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <span className="payment-logo-fallback">{method.name}</span>
                        </div>
                        <span className="payment-name">{method.name}</span>
                        <span className="payment-check">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      </label>
                    ))}
                </div>
              </div>
            </div>

            {/* Kolom kanan - Ringkasan pesanan */}
            <div className="order-summary-section">
              <div className="order-summary-card">
                <h3>Ringkasan Pesanan</h3>

                <div className="order-item">
                  <div className="order-item-image">
                    <img
                      src={`${process.env.PUBLIC_URL}${course.thumbnail_url}`}
                      alt={course.title}
                      className="order-item-thumb"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `${process.env.PUBLIC_URL}/img/logo/LogoPandhu.png`;
                      }}
                    />
                  </div>
                  <div className="order-item-info">
                    <h4>{course.title}</h4>
                    <p>oleh {course.instructor}</p>
                  </div>
                </div>

                <div className="order-divider"></div>

                <div className="order-prices">
                  <div className="price-row">
                    <span>Harga Kursus</span>
                    <span>{formatPrice(course.price)}</span>
                  </div>
                  <div className="price-row">
                    <span>Biaya Admin</span>
                    <span>Rp {adminFee.toLocaleString()}</span>
                  </div>
                </div>

                <div className="order-divider"></div>

                <div className="order-total">
                  <span>Total Pembayaran</span>
                  <span className="total-price">Rp {totalPayment.toLocaleString()}</span>
                </div>

                <button className={`btn btn-primary btn-pay ${isProcessing ? 'processing' : ''}`} onClick={handlePayment} disabled={isProcessing || !selectedPayment}>
                  {isProcessing ? (
                    <>
                      <span className="spinner"></span>
                      Memproses...
                    </>
                  ) : (
                    <>
                      Bayar Sekarang
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="payment-secure-text">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Pembayaran aman dan terenkripsi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentPage;
