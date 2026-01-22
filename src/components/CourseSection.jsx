import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import coursesData, { formatPrice } from '../data/coursesData';

// Jumlah kursus yang ditampilkan per halaman
const KURSUS_PER_HALAMAN = 6;

// Komponen kartu kursus dengan fitur tombol like
const CourseCard = ({ c, onViewDetail, isLiked, onToggleLike, isVisible, delay }) => {
  // Menggunakan gambar dari thumbnail url atau fallback ke gambar default
  const imageUrl = c.thumbnail_url || `/img/kursus/${c.category.toLowerCase().replace(/\s+/g, '-')}.jpg`;

  return (
    <div className={`course-card card-parallax scroll-animate-scale ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="course-image">
        <span className="course-badge">{c.category}</span>
        <div className="course-level-badge">{c.level}</div>
        <img
          src={imageUrl}
          alt={c.title}
          className="course-thumbnail"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="course-image-placeholder" style={{ display: 'none' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <button
          className={`course-favorite ${isLiked ? 'liked' : ''}`}
          aria-label={isLiked ? 'Hapus dari favorit' : 'Tambah ke favorit'}
          onClick={(e) => {
            e.stopPropagation();
            onToggleLike(c.id);
          }}
        >
        </button>
      </div>
      <div className="course-body">
        <div className="course-author">
          <div className="author-avatar">{c.instructor.charAt(0)}</div>
          <span>{c.instructor}</span>
        </div>
        <h3 className="course-title">{c.title}</h3>
        <p className="course-description">{c.description.substring(0, 80)}...</p>
        <div className="course-meta">
          <div className="course-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span>{c.duration}</span>
          </div>
          <div className="course-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>{c.total_meetings} Pertemuan</span>
          </div>
          <div className="course-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            <span>{c.age_range}</span>
          </div>
        </div>
        <div className="course-tags">
          <span className={`learning-mode ${c.learning_mode.toLowerCase()}`}>{c.learning_mode}</span>
          {c.is_popular && <span className="popular-tag">Populer</span>}
        </div>
        <div className="course-rating">
          <div className="rating-stars">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{c.rating}</span>
          </div>
        </div>
        <div className="course-bottom">
          <div className="course-price">
            <span className={`price ${c.price === 0 ? 'free' : ''}`}>{formatPrice(c.price)}</span>
          </div>
          <button className="btn btn-course-detail" onClick={() => onViewDetail(c.id)}>
            Lihat Detail
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Komponen utama bagian kursus dengan fitur filter dan pagination
const CourseSection = ({ showHeader = true }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [levelFilter, setLevelFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [halamanAktif, setHalamanAktif] = useState(1);
  const [likedCourses, setLikedCourses] = useState(() => {
    // ambil daftar kursus yang disukai dari penyimpanan lokal
    const saved = localStorage.getItem('likedCourses');
    return saved ? JSON.parse(saved) : [];
  });

  // Intersection Observer untuk scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Daftar pilihan filter berdasarkan level usia
  const levelFilters = ['Semua', 'PAUD', 'Anak', 'Remaja', 'Dewasa'];

  // Fungsi untuk menambah atau menghapus kursus dari daftar favorit
  const handleToggleLike = (courseId) => {
    setLikedCourses((prev) => {
      const newLiked = prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId];

      // Menyimpan perubahan ke penyimpanan lokal (localStorage)
      localStorage.setItem('likedCourses', JSON.stringify(newLiked));
      return newLiked;
    });
  };

  // Fungsi untuk memfilter kursus berdasarkan level usia dan kata kunci pencarian
  const getFilteredCourses = () => {
    let filtered = coursesData;

    // Memfilter berdasarkan level/usia yang dipilih
    if (levelFilter !== 'Semua') {
      filtered = filtered.filter((course) => course.level === levelFilter);
    }

    // Memfilter berdasarkan kata kunci pencarian
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (course) => course.title.toLowerCase().includes(query) || course.instructor.toLowerCase().includes(query) || course.category.toLowerCase().includes(query) || course.description.toLowerCase().includes(query),
      );
    }

    return filtered;
  };

  // Mendapatkan daftar kursus yang sudah difilter
  const filteredCourses = getFilteredCourses();

  // Menghitung total halaman berdasarkan jumlah kursus yang difilter
  const totalHalaman = Math.ceil(filteredCourses.length / KURSUS_PER_HALAMAN);

  // Mendapatkan kursus untuk halaman yang aktif saat ini
  const indexAwal = (halamanAktif - 1) * KURSUS_PER_HALAMAN;
  const indexAkhir = indexAwal + KURSUS_PER_HALAMAN;
  const kursusHalamanIni = filteredCourses.slice(indexAwal, indexAkhir);

  // Fungsi untuk berpindah ke halaman tertentu
  const pindahKeHalaman = (nomorHalaman) => {
    setHalamanAktif(nomorHalaman);
    // Scroll ke bagian atas daftar kursus untuk pengalaman yang lebih baik
    document.getElementById('kursus')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Reset halaman ke 1 ketika filter berubah
  const handleFilterChange = (level) => {
    setLevelFilter(level);
    setHalamanAktif(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setHalamanAktif(1);
  };

  // Fungsi untuk navigasi ke halaman detail kursus
  const handleViewDetail = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <section id="kursus" className="courses parallax-section" ref={sectionRef}>
      {/* Parallax Background */}
      <div className="course-parallax-bg">
        <div className="parallax-dots"></div>
      </div>

      <div className="container">
        {showHeader && (
          <div className={`section-header scroll-animate ${isVisible ? 'animate-in' : ''}`}>
            <div className="section-header-left">
              <span className="section-badge">Kursus Terpopuler</span>
              <h2 className="section-title">Semua Kursus Pandhu</h2>
              <p className="section-desc">Jelajahi berbagai kursus berkualitas untuk semua usia, dari PAUD hingga Dewasa</p>
            </div>
          </div>
        )}

        {/* Filter berdasarkan usia pengguna */}
        <div className={`course-filters scroll-animate ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="level-filters">
            {levelFilters.map((level) => (
              <button key={level} className={`level-tab ${levelFilter === level ? 'active' : ''}`} onClick={() => handleFilterChange(level)}>
                {level === 'Semua' ? 'Semua Usia' : level === 'PAUD' ? 'PAUD' : level === 'Anak' ? 'Anak' : level === 'Remaja' ? 'Remaja' : 'Dewasa'}
              </button>
            ))}
          </div>

          <div className="course-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input className="search-input" placeholder="Cari kursus favorit kamu..." value={searchQuery} onChange={handleSearchChange} />
            <button className="search-btn">Cari</button>
          </div>
        </div>

        {/* Indikator jumlah kursus yang disukai */}
        {likedCourses.length > 0 && (
          <div className="liked-indicator">
            <span>❤️ {likedCourses.length} kursus disukai</span>
          </div>
        )}

        {/* Menampilkan daftar kursus hasil filter dengan pagination */}
        {filteredCourses.length > 0 ? (
          <>
            <div className="course-grid">
              {kursusHalamanIni.map((c, index) => (
                <CourseCard key={c.id} c={c} onViewDetail={handleViewDetail} isLiked={likedCourses.includes(c.id)} onToggleLike={handleToggleLike} isVisible={isVisible} delay={0.1 + index * 0.1} />
              ))}
            </div>

            {/* Komponen Pagination - Navigasi antar halaman */}
            {totalHalaman > 1 && (
              <div className="pagination-container">
                <div className="pagination">
                  {/* Tombol halaman sebelumnya */}
                  <button className="pagination-btn pagination-prev" onClick={() => pindahKeHalaman(halamanAktif - 1)} disabled={halamanAktif === 1}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Sebelumnya
                  </button>

                  {/* Nomor-nomor halaman */}
                  <div className="pagination-numbers">
                    {Array.from({ length: totalHalaman }, (_, i) => i + 1).map((nomor) => (
                      <button key={nomor} className={`pagination-number ${halamanAktif === nomor ? 'active' : ''}`} onClick={() => pindahKeHalaman(nomor)}>
                        {nomor}
                      </button>
                    ))}
                  </div>

                  {/* Tombol halaman berikutnya */}
                  <button className="pagination-btn pagination-next" onClick={() => pindahKeHalaman(halamanAktif + 1)} disabled={halamanAktif === totalHalaman}>
                    Berikutnya
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>

                {/* Informasi halaman */}
                <p className="pagination-info">
                  Menampilkan {indexAwal + 1}-{Math.min(indexAkhir, filteredCourses.length)} dari {filteredCourses.length} kursus
                </p>
              </div>
            )}
          </>
        ) : (
          // Tampilan ketika tidak ada kursus yang ditemukan
          <div className="no-results">
            <div className="no-results-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M8 8l6 6M14 8l-6 6" />
              </svg>
            </div>
            <h3>Tidak ada kursus ditemukan</h3>
            <p>Coba ubah filter atau kata kunci pencarian Anda</p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                handleFilterChange('Semua');
                setSearchQuery('');
              }}
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;
