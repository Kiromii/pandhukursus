import React, { useState, useContext, useRef, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../App';
import { getCourseById } from '../data/coursesData';

const LearnPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const userName = user?.fullName || 'Pelajar';
  const videoRef = useRef(null);

  // Get course data
  const course = getCourseById(id);

  // State management
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sample curriculum data
  const curriculum = [
    {
      title: 'Pengenalan',
      lessons: [
        { id: 1, title: 'Selamat Datang di Kursus', duration: '5:30', type: 'video' },
        { id: 2, title: 'Apa yang Akan Dipelajari', duration: '8:15', type: 'video' },
        { id: 3, title: 'Persiapan Alat dan Bahan', duration: '10:00', type: 'video' },
      ],
    },
    {
      title: 'Materi Dasar',
      lessons: [
        { id: 4, title: 'Konsep Dasar', duration: '15:20', type: 'video' },
        { id: 5, title: 'Praktik Pertama', duration: '20:45', type: 'video' },
        { id: 6, title: 'Quiz: Pemahaman Dasar', duration: '10 soal', type: 'quiz' },
      ],
    },
    {
      title: 'Praktik Lanjutan',
      lessons: [
        { id: 7, title: 'Teknik Lanjutan', duration: '25:30', type: 'video' },
        { id: 8, title: 'Studi Kasus', duration: '30:00', type: 'video' },
        { id: 9, title: 'Proyek Mini', duration: '45:00', type: 'project' },
      ],
    },
    {
      title: 'Proyek Akhir',
      lessons: [
        { id: 10, title: 'Panduan Proyek Akhir', duration: '10:00', type: 'video' },
        { id: 11, title: 'Submission Proyek', duration: '-', type: 'project' },
        { id: 12, title: 'Sertifikat', duration: '-', type: 'certificate' },
      ],
    },
  ];

  // Calculate total lessons and progress
  const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0);
  const progressPercentage = Math.round((completedLessons.length / totalLessons) * 100);

  // Get current lesson data
  const getCurrentLesson = () => {
    let lessonIndex = 0;
    for (let i = 0; i < curriculum.length; i++) {
      for (let j = 0; j < curriculum[i].lessons.length; j++) {
        if (i === currentSection && j === currentLesson) {
          return curriculum[i].lessons[j];
        }
        lessonIndex++;
      }
    }
    return curriculum[0].lessons[0];
  };

  const currentLessonData = getCurrentLesson();

  // Handle lesson completion
  const markAsComplete = () => {
    const lessonId = currentLessonData.id;
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  // Navigate to next lesson
  const goToNextLesson = () => {
    markAsComplete();
    if (currentLesson < curriculum[currentSection].lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else if (currentSection < curriculum.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentLesson(0);
    }
  };

  // Navigate to previous lesson
  const goToPrevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentLesson(curriculum[currentSection - 1].lessons.length - 1);
    }
  };

  // Select specific lesson
  const selectLesson = (sectionIndex, lessonIndex) => {
    setCurrentSection(sectionIndex);
    setCurrentLesson(lessonIndex);
  };

  // If course not found
  if (!course) {
    return (
      <div className="learn-page">
        <div className="learn-error">
          <h1>Kursus tidak ditemukan</h1>
          <button className="btn btn-primary" onClick={() => navigate('/my-courses')}>
            Kembali ke Kursus Saya
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="learn-page">
      {/* Premium Header */}
      <header className="learn-header">
        <div className="learn-header-left">
          <button className="learn-back-btn" onClick={() => navigate('/my-courses')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="learn-course-info">
            <span className="learn-course-badge">{course.category}</span>
            <h1 className="learn-course-title">{course.title}</h1>
          </div>
        </div>
        <div className="learn-header-right">
          <div className="learn-progress-indicator">
            <div className="progress-circle">
              <svg viewBox="0 0 36 36">
                <path className="progress-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="progress-circle-fill" strokeDasharray={`${progressPercentage}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <span className="progress-text">{progressPercentage}%</span>
            </div>
            <span className="progress-label">
              {completedLessons.length}/{totalLessons} selesai
            </span>
          </div>
          <div className="learn-user">
            <div className="learn-avatar">{userName.charAt(0)}</div>
          </div>
        </div>
      </header>

      <div className="learn-container">
        {/* Main Content Area */}
        <main className={`learn-main ${!isSidebarOpen ? 'full-width' : ''}`}>
          {/* Video Player Section */}
          <div className="learn-video-container">
            <div className="learn-video-wrapper">
              {/* Placeholder video area with gradient */}
              <div className="learn-video-placeholder">
                <div className="video-overlay">
                  <button className="play-button-large" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </button>
                </div>
                <img
                  src={`${process.env.PUBLIC_URL}${course.thumbnail_url}`}
                  alt={course.title}
                  className="video-thumbnail"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${process.env.PUBLIC_URL}/img/courses/placeholder.jpg`;
                  }}
                />
              </div>

              {/* Video Progress Bar */}
              <div className="video-progress-bar">
                <div className="video-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>

              {/* Video Controls */}
              <div className="video-controls">
                <div className="video-controls-left">
                  <button className="video-control-btn" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </button>
                  <button className="video-control-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  </button>
                  <span className="video-time">0:00 / {currentLessonData.duration}</span>
                </div>
                <div className="video-controls-right">
                  <button className="video-control-btn" onClick={() => setShowNotes(!showNotes)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </button>
                  <button className="video-control-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="2" />
                      <rect x="8" y="8" width="8" height="8" rx="1" />
                    </svg>
                  </button>
                  <select className="video-speed-select">
                    <option value="0.5">0.5x</option>
                    <option value="0.75">0.75x</option>
                    <option value="1" selected>
                      1x
                    </option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                  </select>
                  <button className="video-control-btn fullscreen-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Info & Navigation */}
          <div className="learn-lesson-info">
            <div className="lesson-header">
              <div className="lesson-meta">
                <span className="lesson-section-label">
                  Bagian {currentSection + 1}: {curriculum[currentSection].title}
                </span>
                <h2 className="lesson-title">{currentLessonData.title}</h2>
                <div className="lesson-badges">
                  <span className="lesson-type-badge">
                    {currentLessonData.type === 'video' && '🎬 Video'}
                    {currentLessonData.type === 'quiz' && '📝 Quiz'}
                    {currentLessonData.type === 'project' && '🚀 Project'}
                    {currentLessonData.type === 'certificate' && '🏆 Sertifikat'}
                  </span>
                  <span className="lesson-duration-badge">⏱️ {currentLessonData.duration}</span>
                </div>
              </div>
              <div className="lesson-actions">
                <button className={`btn-mark-complete ${completedLessons.includes(currentLessonData.id) ? 'completed' : ''}`} onClick={markAsComplete}>
                  {completedLessons.includes(currentLessonData.id) ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Selesai
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      Tandai Selesai
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="lesson-navigation">
              <button className="nav-lesson-btn prev" onClick={goToPrevLesson} disabled={currentSection === 0 && currentLesson === 0}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Sebelumnya
              </button>
              <button className="nav-lesson-btn next" onClick={goToNextLesson}>
                Selanjutnya
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Notes Panel */}
          {showNotes && (
            <div className="learn-notes-panel">
              <div className="notes-header">
                <h3>📝 Catatan Saya</h3>
                <button className="notes-close" onClick={() => setShowNotes(false)}>
                  ×
                </button>
              </div>
              <textarea className="notes-textarea" placeholder="Tulis catatan untuk pelajaran ini..." value={notes} onChange={(e) => setNotes(e.target.value)} />
              <button className="btn btn-primary btn-sm">Simpan Catatan</button>
            </div>
          )}
        </main>

        {/* Sidebar - Course Content */}
        <aside className={`learn-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isSidebarOpen ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
            </svg>
          </button>

          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>Konten Kursus</h3>
              <div className="sidebar-progress">
                <div className="sidebar-progress-bar">
                  <div className="sidebar-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <span>{progressPercentage}% selesai</span>
              </div>
            </div>

            <div className="curriculum-list">
              {curriculum.map((section, sectionIndex) => (
                <div key={sectionIndex} className="curriculum-section">
                  <div className="section-header">
                    <span className="section-number">Bagian {sectionIndex + 1}</span>
                    <h4 className="section-title">{section.title}</h4>
                    <span className="section-lessons">{section.lessons.length} pelajaran</span>
                  </div>
                  <ul className="lesson-list">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <li
                        key={lesson.id}
                        className={`lesson-item ${currentSection === sectionIndex && currentLesson === lessonIndex ? 'active' : ''} ${completedLessons.includes(lesson.id) ? 'completed' : ''}`}
                        onClick={() => selectLesson(sectionIndex, lessonIndex)}
                      >
                        <div className="lesson-status">
                          {completedLessons.includes(lesson.id) ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" fill="var(--accent)" />
                              <polyline points="16 9 10 15 8 13" stroke="white" fill="none" />
                            </svg>
                          ) : currentSection === sectionIndex && currentLesson === lessonIndex ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)" stroke="var(--primary)" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                          )}
                        </div>
                        <div className="lesson-info">
                          <span className="lesson-name">{lesson.title}</span>
                          <span className="lesson-meta">
                            {lesson.type === 'video' && '🎬'}
                            {lesson.type === 'quiz' && '📝'}
                            {lesson.type === 'project' && '🚀'}
                            {lesson.type === 'certificate' && '🏆'} {lesson.duration}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LearnPage;
