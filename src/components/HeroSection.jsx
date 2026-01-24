import React, { Suspense, useState, useEffect, useRef } from 'react';

// Data halaman buku berisi kata-kata motivasi inspiratif
const bookPages = [
  {
    id: 1,
    icon: '🌟',
    title: 'Mulai Langkahmu',
    quote: '"Perjalanan seribu mil dimulai dari satu langkah pertama."',
    author: '- Lao Tzu',
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Terus Berkembang',
    quote: '"Investasi terbaik adalah investasi pada diri sendiri."',
    author: '- Warren Buffett',
  },
  {
    id: 3,
    icon: '💡',
    title: 'Belajar Tanpa Henti',
    quote: '"Pendidikan adalah senjata paling ampuh untuk mengubah dunia."',
    author: '- Nelson Mandela',
  },
  {
    id: 4,
    icon: '🎯',
    title: 'Raih Impianmu',
    quote: '"Masa depan milik mereka yang percaya pada keindahan mimpi-mimpi mereka."',
    author: '- Eleanor Roosevelt',
  },
  {
    id: 5,
    icon: '🏆',
    title: 'Pantang Menyerah',
    quote: '"Kesuksesan bukan akhir, kegagalan bukan fatal: keberanian untuk melanjutkan itulah yang penting."',
    author: '- Winston Churchill',
  },
  {
    id: 6,
    icon: '✨',
    title: 'Jadilah Terbaik',
    quote: '"Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan."',
    author: '- Steve Jobs',
  },
];

// Komponen utama bagian Hero (tampilan awal website)
const HeroSection = () => {
  // State untuk mengatur fokus pada input pencarian
  const [searchFocused, setSearchFocused] = useState(false);
  // State untuk mengatur halaman buku yang aktif (-1 berarti cover tertutup)
  const [currentPage, setCurrentPage] = useState(-1);
  // State untuk mengatur drag/geser halaman buku
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  // Referensi ke elemen buku 3D
  const bookRef = useRef(null);
  // Jumlah total halaman buku
  const totalPages = bookPages.length;

  // Efek untuk membuka cover buku secara otomatis setelah komponen dimuat
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(0); // Membuka cover secara otomatis
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Fungsi untuk menangani awal drag/geser (mouse atau sentuhan)
  const handleDragStart = (e) => {
    if (currentPage < 0) return; // Tidak bisa drag jika cover tertutup
    setIsDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragOffset(0);
  };

  // Fungsi untuk menangani pergerakan drag/geser
  const handleDragMove = (e) => {
    if (!isDragging || currentPage < 0) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  // Fungsi untuk menangani akhir drag/geser
  const handleDragEnd = () => {
    if (!isDragging || currentPage < 0) return;
    setIsDragging(false);

    // Batas minimum geser untuk berpindah halaman (dalam pixel)
    const threshold = 50;

    if (dragOffset < -threshold && currentPage < totalPages - 1) {
      // Geser ke kiri - menuju halaman berikutnya
      setCurrentPage((prev) => prev + 1);
    } else if (dragOffset > threshold && currentPage > 0) {
      // Geser ke kanan - kembali ke halaman sebelumnya
      setCurrentPage((prev) => prev - 1);
    }

    setDragOffset(0);
  };

  // Fungsi untuk membuka/menutup cover buku
  const toggleCover = () => {
    if (currentPage < 0) {
      setCurrentPage(0); // Membuka cover
    } else {
      setCurrentPage(-1); // Menutup cover
    }
  };

  // Fungsi untuk scroll ke bagian kursus dengan animasi halus
  const scrollToKursus = (e) => {
    e.preventDefault();
    const kursusSection = document.getElementById('kursus');
    if (kursusSection) {
      kursusSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="beranda"
      className="hero hero-illustrated"
      style={{
        '--hero-bg-image': `url(${process.env.PUBLIC_URL}/img/parallaximg/img2parallax.jpg)`,
      }}
    >
      <div className="hero-decor">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-glow"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="hero-badge">
              <span className="hero-badge-dot"></span>
              Mulai Konsisten Demi Masa Depan
            </span>
          </div>

          <h1 className="hero-title">
            Platform <span className="hero-title-highlight">Penghubung</span> Multikeahlian Untuk <span className="hero-title-highlight">Semua</span> Kalangan
          </h1>

          <p className="hero-subtitle">Temukan berbagai kursus berkualitas dari mentor terbaik. Tingkatkan skill dan wujudkan potensi terbaikmu bersama kami.</p>

          {/* Tombol Mulai Belajar dengan tampilan yang lebih menarik */}
          <div id="CoursesSection" className="hero-actions">
            <button onClick={scrollToKursus} className="btn btn-hero-primary">
              <span>Mulai Belajar</span>
              <svg className="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a href="#kategori" className="btn btn-hero-secondary">
              <span>Lihat Kategori</span>
            </a>
          </div>

          <div className={`search-filter ${searchFocused ? 'focused' : ''}`}>
            <div className="search-wrapper">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input className="search-input" placeholder="Cari kursus yang kamu butuhkan..." onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
              <button className="search-btn">Cari</button>
            </div>
            <div className="filter-pills">
              <span className="filter-label">Populer:</span>
              <button className="filter-pill">UI/UX Design</button>
              <button className="filter-pill">Development</button>
              <button className="filter-pill">Data Science</button>
              <button className="filter-pill">Business</button>
            </div>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <div className="trust-avatar" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                A
              </div>
              <div className="trust-avatar" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                B
              </div>
              <div className="trust-avatar" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                C
              </div>
              <div className="trust-avatar" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                D
              </div>
            </div>
            <div className="trust-info">
              <div className="trust-count">2,500+ Peserta Aktif</div>
              <div className="trust-rating">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="hero-card-float hero-card-1">
            <div className="float-card-content">
              <div className="float-card-number">
                <span className="hero-title-highlight">1,235+</span>
              </div>
              <div className="float-card-label">Kursus</div>
            </div>
          </div>

          <div className="hero-card-float hero-card-2">
            <div className="float-card-content">
              <div className="float-card-number">
                <span className="hero-title-highlight">150+</span>
              </div>
              <div className="float-card-label">Mentor</div>
            </div>
          </div>

          {/* Animasi Buku 3D dengan Efek Flip */}
          <div
            className={`book-3d-container ${currentPage >= 0 ? 'book-opened' : ''}`}
            ref={bookRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div className="book-3d">
              {/* Punggung buku (spine) */}
              <div className="book-3d-spine">
                <span>PandhuApp</span>
              </div>

              {/* Sampul belakang buku */}
              <div className="book-3d-back-cover">
                <div className="back-cover-design">
                  <span className="back-logo">📚</span>
                  <span>PandhuApp</span>
                </div>
              </div>

              {/* Halaman-halaman buku */}
              {bookPages.map((page, index) => {
                const isFlipped = currentPage >= 0 && index < currentPage;
                const isActive = currentPage >= 0 && index === currentPage;
                // z-index: halaman yang sudah di-flip harus di atas cover (z-index tinggi)
                // halaman yang belum di-flip harus terurut dari depan ke belakang
                const zIndex = isFlipped ? 200 + index : totalPages - index + 50;

                return (
                  <div
                    key={page.id}
                    className={`book-3d-page ${isFlipped ? 'flipped' : ''} ${isActive ? 'active' : ''} ${currentPage < 0 ? 'cover-closed' : ''}`}
                    style={{
                      zIndex: zIndex,
                      '--page-index': index,
                      '--flip-order': isFlipped ? index + 1 : 0,
                      transform: isDragging && isActive ? `rotateY(${Math.max(-180, Math.min(0, dragOffset * 0.5))}deg)` : undefined,
                    }}
                  >
                    {/* Tampilan depan halaman */}
                    <div className="page-front">
                      <div className="page-texture"></div>
                      <div className="page-content-3d">
                        <div className="page-icon">{page.icon}</div>
                        <h4 className="page-title">{page.title}</h4>
                        <blockquote className="page-quote">{page.quote}</blockquote>
                        <cite className="page-author">{page.author}</cite>
                      </div>
                      <div className="page-number">{index + 1}</div>
                      <div className="page-corner"></div>
                    </div>

                    {/* Tampilan belakang halaman */}
                    <div className="page-back">
                      <div className="page-texture"></div>
                      <div className="page-back-content">
                        <div className="page-decoration">
                          <div className="deco-line"></div>
                          <span>✦</span>
                          <div className="deco-line"></div>
                        </div>
                        <p className="page-back-text">Geser untuk melanjutkan →</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Sampul depan buku */}
              <div className={`book-3d-front-cover ${currentPage >= 0 ? 'opened' : ''}`} onClick={toggleCover}>
                <div className="front-cover-design">
                  <div className="cover-glow"></div>
                  <span className="cover-icon">📖</span>
                  <h3 className="cover-title">PandhuApp</h3>
                  <p className="cover-subtitle">Belajar Tanpa Batas</p>
                  <div className="cover-hint">
                    <span>{currentPage >= 0 ? 'Tutup Buku' : 'Buka Buku'}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Indikator halaman - hanya tampil saat buku terbuka */}
            {currentPage >= 0 && (
              <div className="book-3d-nav">
                <div className="page-indicator">
                  {bookPages.map((_, index) => (
                    <span key={index} className={`indicator-dot ${index === currentPage ? 'active' : ''} ${currentPage >= 0 && index < currentPage ? 'passed' : ''}`} onClick={() => currentPage >= 0 && setCurrentPage(index)}></span>
                  ))}
                </div>
              </div>
            )}

            {/* Petunjuk penggunaan buku */}
            <p className="book-instruction">{currentPage < 0 ? '👆 Klik buku untuk membuka' : currentPage < totalPages - 1 ? '👈 Geser ke kiri untuk halaman berikutnya' : '✨ Kamu sudah di halaman terakhir!'}</p>
          </div>

          <Suspense
            fallback={
              <div className="illustration-photo">
                <div className="loading-spinner"></div>
              </div>
            }
          ></Suspense>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
