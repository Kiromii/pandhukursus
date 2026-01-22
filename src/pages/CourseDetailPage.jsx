import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatPrice, getCourseById } from '../data/coursesData';

// Extended course details data
const courseDetails = {
  1: {
    authorBio: 'Chef berpengalaman khusus masakan anak-anak',
    whatYouLearn: ['Mengenal berbagai bahan makanan sehat', 'Membuat makanan sederhana dengan aman', 'Mengembangkan kreativitas dalam memasak', 'Membangun kemandirian anak'],
    requirements: ['Pendampingan orang tua', 'Peralatan dapur sederhana', 'Bahan-bahan yang mudah didapat'],
    curriculum: [
      { title: 'Mengenal Dapur yang Aman', lessons: 2, duration: '30 mnt' },
      { title: 'Membuat Roti Isi Lucu', lessons: 2, duration: '1 jam' },
      { title: 'Jus Buah Warna-warni', lessons: 2, duration: '45 mnt' },
      { title: 'Kue Sederhana untuk Anak', lessons: 2, duration: '1 jam 45 mnt' },
    ],
  },
  2: {
    authorBio: 'Ahli nutrisi anak dan content creator kuliner',
    whatYouLearn: ['Membuat bekal sekolah yang menarik', 'Memahami gizi seimbang untuk anak', 'Teknik menyimpan bekal agar tetap segar', 'Food styling sederhana'],
    requirements: ['Kotak bekal dan peralatan dasar', 'Bahan makanan segar'],
    curriculum: [
      { title: 'Pengenalan Bekal Sehat', lessons: 2, duration: '45 mnt' },
      { title: 'Sandwich Kreatif', lessons: 3, duration: '1 jam 30 mnt' },
      { title: 'Onigiri dan Bento', lessons: 3, duration: '2 jam' },
      { title: 'Snack Sehat Homemade', lessons: 2, duration: '1 jam 45 mnt' },
    ],
  },
  3: {
    authorBio: 'Celebrity chef dan penulis buku resep',
    whatYouLearn: ['Teknik memasak tradisional Indonesia', 'Mengolah bumbu rempah autentik', 'Plating dan penyajian makanan', 'Sejarah kuliner Nusantara'],
    requirements: ['Peralatan memasak lengkap', 'Rempah-rempah Indonesia', 'Komitmen untuk praktek'],
    curriculum: [
      { title: 'Rendang Padang Autentik', lessons: 3, duration: '3 jam' },
      { title: 'Gudeg Jogja Legit', lessons: 3, duration: '3 jam' },
      { title: 'Soto Nusantara', lessons: 3, duration: '3 jam' },
      { title: 'Masakan Indonesia Timur', lessons: 3, duration: '3 jam' },
    ],
  },
};

// Generate default details for courses without extended data
const getExtendedCourseData = (course) => {
  if (!course) return null;

  const extended = courseDetails[course.id] || {
    authorBio: `Pengajar profesional di bidang ${course.category}`,
    whatYouLearn: course.skills_covered.map((skill) => `Menguasai ${skill}`),
    requirements: ['Tidak ada persyaratan khusus', 'Keinginan untuk belajar', 'Perangkat untuk mengikuti kelas'],
    curriculum: [
      { title: 'Pengenalan', lessons: Math.ceil(course.total_meetings / 4), duration: `${Math.ceil(parseInt(course.duration) / 4)} jam` },
      { title: 'Materi Dasar', lessons: Math.ceil(course.total_meetings / 4), duration: `${Math.ceil(parseInt(course.duration) / 4)} jam` },
      { title: 'Praktik Lanjutan', lessons: Math.ceil(course.total_meetings / 4), duration: `${Math.ceil(parseInt(course.duration) / 4)} jam` },
      { title: 'Proyek Akhir', lessons: Math.ceil(course.total_meetings / 4), duration: `${Math.ceil(parseInt(course.duration) / 4)} jam` },
    ],
  };

  return {
    ...course,
    ...extended,
    priceNumber: course.price,
    priceFormatted: formatPrice(course.price),
    students: Math.floor(Math.random() * 2000) + 500, // Random students for demo
  };
};

const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState(0);

  // Mencari kursus berdasarkan ID
  const baseCourse = getCourseById(id);
  const course = getExtendedCourseData(baseCourse);

  // Jika kursus tidak ditemukan
  if (!course) {
    return (
      <div className="course-detail-page">
        <header className="course-detail-header">
          <button className="back-button" onClick={() => navigate('/')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Kembali ke Beranda</span>
          </button>
        </header>
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1>Kursus tidak ditemukan</h1>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  // Fungsi untuk menangani pembelian/pendaftaran
  const handleEnroll = () => {
    navigate(`/payment/${course.id}`);
  };

  return (
    <div className="course-detail-page">
      {/* Header dengan tombol kembali (tanpa navbar) */}
      <header className="course-detail-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Kembali ke Beranda</span>
        </button>
        <h2 className="header-course-title">{course.title}</h2>
        <div className="header-spacer"></div>
      </header>

      {/* Hero Section Detail Kursus */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-hero-info">
              <span className="course-category-badge">{course.category}</span>
              <h1 className="course-detail-title">{course.title}</h1>
              <p className="course-detail-desc">{course.description}</p>

              <div className="course-meta-row">
                <div className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{course.rating} rating</span>
                </div>
                <div className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>{course.students.toLocaleString()} siswa</span>
                </div>
                <div className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span>{course.total_meetings} pertemuan</span>
                </div>
                <div className="meta-item">
                  <span className={`mode-badge ${course.learning_mode.toLowerCase()}`}>{course.learning_mode}</span>
                </div>
              </div>

              <div className="course-author-info">
                <div className="author-avatar-lg">{course.instructor.charAt(0)}</div>
                <div className="author-details">
                  <span className="author-name">{course.instructor}</span>
                  <span className="author-bio">{course.authorBio}</span>
                </div>
              </div>
            </div>

            {/* Kartu pembelian */}
            <div className="course-purchase-card">
              <div className="purchase-image">
                <img
                  src={`${process.env.PUBLIC_URL}${course.thumbnail_url}`}
                  alt={course.title}
                  className="purchase-thumbnail"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${process.env.PUBLIC_URL}/img/courses/placeholder.jpg`;
                  }}
                />
              </div>
              <div className="purchase-price">
                <span className={`price-main ${course.priceNumber === 0 ? 'free' : ''}`}>{course.priceFormatted}</span>
              </div>
              <button className="btn btn-primary btn-enroll" onClick={handleEnroll}>
                {course.priceNumber === 0 ? 'Daftar Gratis' : 'Beli Sekarang'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <div className="purchase-features">
                <div className="purchase-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Akses selamanya</span>
                </div>
                <div className="purchase-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Sertifikat penyelesaian</span>
                </div>
                <div className="purchase-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>30 hari garansi uang kembali</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab navigasi */}
      <section className="course-tabs-section">
        <div className="container">
          <div className="course-tabs">
            <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
              Ringkasan
            </button>
            <button className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`} onClick={() => setActiveTab('curriculum')}>
              Kurikulum
            </button>
            <button className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>
              Ulasan
            </button>
          </div>
        </div>
      </section>

      {/* Konten tab */}
      <section className="course-content-section">
        <div className="container">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="content-block">
                <h3>Apa yang akan Anda pelajari</h3>
                <div className="learn-grid">
                  {course.whatYouLearn.map((item, index) => (
                    <div key={index} className="learn-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-block">
                <h3>Persyaratan</h3>
                <ul className="requirements-list">
                  {course.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="tab-content">
              <div className="curriculum-list">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="curriculum-section">
                    <button className={`curriculum-header ${expandedSection === index ? 'expanded' : ''}`} onClick={() => setExpandedSection(expandedSection === index ? -1 : index)}>
                      <div className="curriculum-info">
                        <span className="section-number">Bagian {index + 1}</span>
                        <h4>{section.title}</h4>
                        <span className="section-meta">
                          {section.lessons} pelajaran • {section.duration}
                        </span>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d={expandedSection === index ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
                      </svg>
                    </button>
                    {expandedSection === index && (
                      <div className="curriculum-content">
                        {[...Array(section.lessons)].map((_, lessonIndex) => (
                          <div key={lessonIndex} className="lesson-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <polygon points="10 8 16 12 10 16 10 8" />
                            </svg>
                            <span>Pelajaran {lessonIndex + 1}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="tab-content">
              <div className="reviews-summary">
                <div className="rating-big">
                  <span className="rating-number">{course.rating}</span>
                  <div className="rating-stars-big">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < Math.floor(course.rating) ? '#f59e0b' : '#e2e8f0'}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="rating-count-text">{course.students.toLocaleString()} ulasan</span>
                </div>
              </div>

              {/* Contoh ulasan */}
              <div className="reviews-list">
                <div className="review-item">
                  <div className="review-header">
                    <div className="reviewer-avatar">A</div>
                    <div className="reviewer-info">
                      <span className="reviewer-name">Ahmad Pratama</span>
                      <span className="review-date">2 minggu yang lalu</span>
                    </div>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="review-text">Kursus yang sangat bagus dan materinya mudah dipahami. Mentor menjelaskan dengan jelas dan banyak contoh praktis.</p>
                </div>
                <div className="review-item">
                  <div className="review-header">
                    <div className="reviewer-avatar">S</div>
                    <div className="reviewer-info">
                      <span className="reviewer-name">Siti Rahayu</span>
                      <span className="review-date">1 bulan yang lalu</span>
                    </div>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < 4 ? '#f59e0b' : '#e2e8f0'}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="review-text">Materinya lengkap dan terstruktur dengan baik. Sangat membantu untuk meningkatkan skill saya.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
