import React from 'react';

const Footer = () => {
  return (
    <footer id="kontak" className="site-footer-v2" role="contentinfo">
      {/* Bentuk Sudut/Geometris Atas */}
      <div className="footer-angular-top">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <polygon points="0,100 720,0 1440,100 1440,100 0,100" fill="currentColor" />
        </svg>
      </div>

      <div className="footer-main-content">
        <div className="container">
          <div className="footer-grid-v2">
            {/* Kolom Brand/Logo */}
            <div className="footer-brand-v2">
              <div className="brand-logo-v2">
                <img src={`${process.env.PUBLIC_URL}/img/logo/Logofooter.png`} alt="Pandhu" className="brand-logo-v2-img" />
                <span className="brand-name-v2">PANDHU</span>
              </div>
              <p className="footer-tagline-v2">Platform Kursus Online untuk Semua Usia</p>
              <p className="footer-desc-v2">Belajar kapan saja, di mana saja. Dari PAUD hingga profesional, kami hadir untuk mendukung perjalanan belajarmu.</p>
            </div>

            {/* Kolom Kategori */}
            <div className="footer-col-v2">
              <h4 className="footer-title-v2">KATEGORI</h4>
              <ul className="footer-list-v2">
                <li>
                  <a href="#kategori">Memasak</a>
                </li>
                <li>
                  <a href="#kategori">Menggambar & Seni</a>
                </li>
                <li>
                  <a href="#kategori">Musik</a>
                </li>
                <li>
                  <a href="#kategori">Bahasa</a>
                </li>
                <li>
                  <a href="#kategori">Teknologi & Coding</a>
                </li>
                <li>
                  <a href="#kategori">Desain</a>
                </li>
              </ul>
            </div>

            {/* Kolom Kontak */}
            <div className="footer-col-v2">
              <h4 className="footer-title-v2">HUBUNGI KAMI</h4>
              <div className="footer-contact-v2">
                <div className="contact-item-v2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    Jl. Nakula I No. 5-11,
                    <br />
                    Semarang, Indonesia
                  </span>
                </div>
                <div className="contact-item-v2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+6281234567890">+62 812-3456-7890</a>
                </div>
                <div className="contact-item-v2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <a href="mailto:halo@pandhu.id">halo@pandhu.id</a>
                </div>
              </div>

              {/* Ikon Media Sosial */}
              <div className="social-icons-v2">
                <a href="https://www.facebook.com/" className="social-icon-v2" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://twitter.com/" className="social-icon-v2" aria-label="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/" className="social-icon-v2" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/" className="social-icon-v2" aria-label="YouTube" title="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1a1a2e" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/" className="social-icon-v2" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Bawah Footer */}
      <div className="footer-bottom-v2">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright-v2">
              © 2026 <strong>Pandhu</strong>. All Rights Reserved. | Dibuat oleh Tim Pandhu
            </p>
            <div className="payment-methods">
              <span className="payment-label">Metode Pembayaran:</span>
              <div className="payment-icons">
                <img src="/img/bca.png" alt="BCA" className="payment-icon" />
                <img src="/img/mandiri.png" alt="Mandiri" className="payment-icon" />
                <img src="/img/bni.png" alt="BNI" className="payment-icon" />
                <img src="/img/gopay.png" alt="GoPay" className="payment-icon" />
                <img src="/img/ovo.png" alt="OVO" className="payment-icon" />
                <img src="/img/dana.png" alt="Dana" className="payment-icon" />
                <img src="/img/shopeepay.png" alt="ShopeePay" className="payment-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
