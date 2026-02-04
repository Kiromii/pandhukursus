import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { getQuizByCourseId, getModulesByCourseId, getVideosByCourseId } from '../data/quizData';

const PracticePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const userName = user?.fullName || 'Pelajar';

  // Mengambil data kursus berdasarkan ID
  const quizData = getQuizByCourseId(parseInt(id));
  const moduleData = getModulesByCourseId(parseInt(id));
  const videoData = getVideosByCourseId(parseInt(id));

  // State untuk mengelola tampilan dan interaksi
  const [activeTab, setActiveTab] = useState('video');
  const [activePart, setActivePart] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [completedModules, setCompletedModules] = useState([]);
  const [completedParts, setCompletedParts] = useState([]);

  // Fungsi untuk menghitung skor per bagian quiz
  const calculatePartScore = (partIndex) => {
    if (!quizData) return { correct: 0, total: 0 };
    const part = quizData.parts[partIndex];
    let correct = 0;
    part.questions.forEach((q) => {
      if (selectedAnswers[`${partIndex}-${q.id}`] === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: part.questions.length };
  };

  // Fungsi untuk menangani pemilihan jawaban
  const handleAnswerSelect = (questionId, answerIndex) => {
    if (!quizSubmitted) {
      setSelectedAnswers({
        ...selectedAnswers,
        [`${activePart}-${questionId}`]: answerIndex,
      });
    }
  };

  // Fungsi untuk submit/selesaikan quiz
  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    setShowResult(true);
    if (!completedParts.includes(activePart)) {
      setCompletedParts([...completedParts, activePart]);
    }
  };

  // Fungsi untuk mengulang quiz dari awal
  const handleRetakeQuiz = () => {
    const newAnswers = { ...selectedAnswers };
    quizData.parts[activePart].questions.forEach((q) => {
      delete newAnswers[`${activePart}-${q.id}`];
    });
    setSelectedAnswers(newAnswers);
    setQuizSubmitted(false);
    setShowResult(false);
    setCurrentQuestion(0);
  };

  // Fungsi untuk pindah ke part berikutnya
  const handleNextPart = () => {
    if (activePart < quizData.parts.length - 1) {
      setActivePart(activePart + 1);
      setQuizSubmitted(false);
      setShowResult(false);
      setCurrentQuestion(0);
    }
  };

  // Fungsi untuk menandai video sudah selesai ditonton
  const markVideoComplete = (videoId) => {
    if (!completedVideos.includes(videoId)) {
      setCompletedVideos([...completedVideos, videoId]);
    }
  };

  // Fungsi untuk menandai modul sudah selesai dibaca
  const markModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  // Tampilan ketika materi tidak ditemukan
  if (!quizData && !moduleData && !videoData) {
    return (
      <div className="practice-page">
        <div className="practice-error">
          <div className="error-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <h1>Materi tidak ditemukan</h1>
          <p>Kursus yang Anda cari tidak memiliki materi latihan.</p>
          <button className="btn-primary" onClick={() => navigate('/my-courses')}>
            Kembali ke Kursus Saya
          </button>
        </div>
      </div>
    );
  }

  const courseTitle = quizData?.courseTitle || moduleData?.courseTitle || videoData?.courseTitle;

  return (
    <div className="practice-page">
      {/* Header halaman - Menampilkan judul kursus dan tombol kembali */}
      <header className="practice-header">
        <div className="practice-header-left">
          <button className="back-btn" onClick={() => navigate('/my-courses')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="practice-course-info">
            <span className="practice-label">Latihan Kursus</span>
            <h1>{courseTitle}</h1>
          </div>
        </div>
        {/* Statistik progress di header kanan */}
        <div className="practice-header-right">
          <div className="progress-stats">
            <div className="stat-item">
              <span className="stat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </span>
              <span className="stat-value">
                {completedVideos.length}/{videoData?.videos?.length || 0}
              </span>
              <span className="stat-label">Video</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </span>
              <span className="stat-value">
                {completedModules.length}/{moduleData?.modules?.length || 0}
              </span>
              <span className="stat-label">Modul</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              <span className="stat-value">
                {completedParts.length}/{quizData?.parts?.length || 0}
              </span>
              <span className="stat-label">Quiz</span>
            </div>
          </div>
          <div className="user-avatar">{userName.charAt(0)}</div>
        </div>
      </header>

      {/* Navigasi Tab - Untuk berpindah antara Video, Modul, dan Quiz */}
      <div className="practice-tabs">
        <button className={`practice-tab ${activeTab === 'video' ? 'active' : ''}`} onClick={() => setActiveTab('video')}>
          <span className="tab-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </span>
          <span className="tab-text">Video Pembelajaran</span>
          {videoData && <span className="tab-count">{videoData.videos.length}</span>}
        </button>
        <button className={`practice-tab ${activeTab === 'module' ? 'active' : ''}`} onClick={() => setActiveTab('module')}>
          <span className="tab-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </span>
          <span className="tab-text">Modul Materi</span>
          {moduleData && <span className="tab-count">{moduleData.modules.length}</span>}
        </button>
        <button className={`practice-tab ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>
          <span className="tab-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </span>
          <span className="tab-text">Latihan Soal</span>
          {quizData && <span className="tab-count">{quizData.totalQuestions} soal</span>}
        </button>
      </div>

      {/* Area Konten Utama - Menampilkan Video, Modul, atau Quiz */}
      <div className="practice-content">
        {/* Tab Video - Daftar video pembelajaran */}
        {activeTab === 'video' && videoData && (
          <div className="video-section">
            <div className="video-main">
              <div className="video-player">
                <div className="video-placeholder">
                  <img
                    src={videoData.videos[activeVideo].thumbnail}
                    alt={videoData.videos[activeVideo].title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="video-overlay">
                    <button className="play-btn-large">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="video-info">
                  <h2>{videoData.videos[activeVideo].title}</h2>
                  <p>{videoData.videos[activeVideo].description}</p>
                  <div className="video-meta">
                    <span className="duration">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {videoData.videos[activeVideo].duration}
                    </span>
                    {completedVideos.includes(videoData.videos[activeVideo].id) ? (
                      <span className="completed-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Selesai ditonton
                      </span>
                    ) : (
                      <button className="btn-mark-complete" onClick={() => markVideoComplete(videoData.videos[activeVideo].id)}>
                        Tandai Selesai
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="video-list">
              <h3>Daftar Video</h3>
              {videoData.videos.map((video, index) => (
                <div key={video.id} className={`video-item ${activeVideo === index ? 'active' : ''} ${completedVideos.includes(video.id) ? 'completed' : ''}`} onClick={() => setActiveVideo(index)}>
                  <div className="video-item-thumb">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="video-duration">{video.duration}</span>
                  </div>
                  <div className="video-item-info">
                    <h4>{video.title}</h4>
                    {completedVideos.includes(video.id) && (
                      <span className="check-mark">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Modul - Materi pembelajaran dalam bentuk teks */}
        {activeTab === 'module' && moduleData && (
          <div className="module-section">
            <div className="module-sidebar">
              <h3>Daftar Modul</h3>
              {moduleData.modules.map((module, index) => (
                <div key={module.id} className={`module-item ${activeModule === index ? 'active' : ''} ${completedModules.includes(module.id) ? 'completed' : ''}`} onClick={() => setActiveModule(index)}>
                  <div className="module-number">{index + 1}</div>
                  <div className="module-item-info">
                    <h4>{module.title}</h4>
                    <span className="module-duration">{module.duration}</span>
                  </div>
                  {completedModules.includes(module.id) && (
                    <span className="check-mark">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="module-content">
              <div className="module-header">
                <h2>{moduleData.modules[activeModule].title}</h2>
                <p className="module-desc">{moduleData.modules[activeModule].description}</p>
                <div className="module-meta">
                  <span className="duration">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {moduleData.modules[activeModule].duration}
                  </span>
                  {completedModules.includes(moduleData.modules[activeModule].id) ? (
                    <span className="completed-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Selesai dibaca
                    </span>
                  ) : (
                    <button className="btn-mark-complete" onClick={() => markModuleComplete(moduleData.modules[activeModule].id)}>
                      Tandai Selesai
                    </button>
                  )}
                </div>
              </div>
              <div className="module-body">
                <pre className="module-text">{moduleData.modules[activeModule].content}</pre>
              </div>
              <div className="module-navigation">
                <button className="btn-nav prev" disabled={activeModule === 0} onClick={() => setActiveModule(activeModule - 1)}>
                  ← Sebelumnya
                </button>
                <button className="btn-nav next" disabled={activeModule === moduleData.modules.length - 1} onClick={() => setActiveModule(activeModule + 1)}>
                  Selanjutnya →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Quiz - Latihan soal dengan beberapa bagian/part */}
        {activeTab === 'quiz' && quizData && (
          <div className="quiz-section">
            <div className="quiz-sidebar">
              <h3>Part Latihan</h3>
              <div className="parts-list">
                {quizData.parts.map((part, index) => (
                  <div
                    key={part.id}
                    className={`part-item ${activePart === index ? 'active' : ''} ${completedParts.includes(index) ? 'completed' : ''}`}
                    onClick={() => {
                      setActivePart(index);
                      setQuizSubmitted(completedParts.includes(index));
                      setShowResult(completedParts.includes(index));
                      setCurrentQuestion(0);
                    }}
                  >
                    <div className="part-icon">
                      {completedParts.includes(index) ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" fill="#10b981" stroke="#10b981" />
                          <polyline points="16 9 10 15 8 13" stroke="white" />
                        </svg>
                      ) : (
                        <span className="part-number">{index + 1}</span>
                      )}
                    </div>
                    <div className="part-info">
                      <h4>{part.title}</h4>
                      <span className="part-questions">{part.questions.length} soal</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="quiz-progress-card">
                <h4>Progress Keseluruhan</h4>
                <div className="circular-progress">
                  <svg viewBox="0 0 100 100">
                    <circle className="bg" cx="50" cy="50" r="40" />
                    <circle className="progress" cx="50" cy="50" r="40" strokeDasharray={`${(completedParts.length / quizData.parts.length) * 251.2} 251.2`} />
                  </svg>
                  <span className="progress-text">{Math.round((completedParts.length / quizData.parts.length) * 100)}%</span>
                </div>
                <p>
                  {completedParts.length} dari {quizData.parts.length} part selesai
                </p>
              </div>
            </div>

            <div className="quiz-main">
              {!showResult ? (
                <>
                  <div className="quiz-header">
                    <div className="quiz-title">
                      <h2>{quizData.parts[activePart].title}</h2>
                      <p>{quizData.parts[activePart].description}</p>
                    </div>
                    <div className="quiz-counter">
                      <span className="current">{currentQuestion + 1}</span>
                      <span className="separator">/</span>
                      <span className="total">{quizData.parts[activePart].questions.length}</span>
                    </div>
                  </div>

                  <div className="question-progress">
                    {quizData.parts[activePart].questions.map((_, index) => (
                      <div
                        key={index}
                        className={`progress-dot ${currentQuestion === index ? 'active' : ''} ${selectedAnswers[`${activePart}-${quizData.parts[activePart].questions[index].id}`] !== undefined ? 'answered' : ''}`}
                        onClick={() => setCurrentQuestion(index)}
                      />
                    ))}
                  </div>

                  <div className="question-card">
                    <div className="question-number">Soal {currentQuestion + 1}</div>
                    <h3 className="question-text">{quizData.parts[activePart].questions[currentQuestion].question}</h3>
                    <div className="options-list">
                      {quizData.parts[activePart].questions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          className={`option-btn ${selectedAnswers[`${activePart}-${quizData.parts[activePart].questions[currentQuestion].id}`] === index ? 'selected' : ''}`}
                          onClick={() => handleAnswerSelect(quizData.parts[activePart].questions[currentQuestion].id, index)}
                        >
                          <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                          <span className="option-text">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="quiz-navigation">
                    <button className="btn-quiz-nav prev" disabled={currentQuestion === 0} onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      Sebelumnya
                    </button>
                    {currentQuestion === quizData.parts[activePart].questions.length - 1 ? (
                      <button className="btn-quiz-nav submit" onClick={handleSubmitQuiz} disabled={Object.keys(selectedAnswers).filter((k) => k.startsWith(`${activePart}-`)).length < quizData.parts[activePart].questions.length}>
                        Selesai & Lihat Hasil
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </button>
                    ) : (
                      <button className="btn-quiz-nav next" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                        Selanjutnya
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </>
              ) : (
                /* Hasil Quiz - Menampilkan skor dan review jawaban */
                <div className="quiz-result">
                  <div className="result-header">
                    <div className="result-icon">
                      {calculatePartScore(activePart).correct >= quizData.parts[activePart].questions.length * 0.7 ? (
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      ) : (
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      )}
                    </div>
                    <h2>{calculatePartScore(activePart).correct >= quizData.parts[activePart].questions.length * 0.7 ? 'Selamat! Kamu Lulus!' : 'Terus Belajar!'}</h2>
                    <p className="result-subtitle">{quizData.parts[activePart].title}</p>
                  </div>

                  <div className="result-score">
                    <div className="score-circle">
                      <svg viewBox="0 0 100 100">
                        <circle className="bg" cx="50" cy="50" r="40" />
                        <circle
                          className="progress"
                          cx="50"
                          cy="50"
                          r="40"
                          strokeDasharray={`${(calculatePartScore(activePart).correct / calculatePartScore(activePart).total) * 251.2} 251.2`}
                          style={{
                            stroke: calculatePartScore(activePart).correct >= quizData.parts[activePart].questions.length * 0.7 ? '#10b981' : '#f59e0b',
                          }}
                        />
                      </svg>
                      <div className="score-text">
                        <span className="score-value">{calculatePartScore(activePart).correct}</span>
                        <span className="score-total">/{calculatePartScore(activePart).total}</span>
                      </div>
                    </div>
                    <p className="score-percentage">{Math.round((calculatePartScore(activePart).correct / calculatePartScore(activePart).total) * 100)}% Benar</p>
                  </div>

                  <div className="result-details">
                    <h3>Review Jawaban</h3>
                    {quizData.parts[activePart].questions.map((q, index) => {
                      const userAnswer = selectedAnswers[`${activePart}-${q.id}`];
                      const isCorrect = userAnswer === q.correctAnswer;
                      return (
                        <div key={q.id} className={`answer-review ${isCorrect ? 'correct' : 'incorrect'}`}>
                          <div className="review-header">
                            <span className="review-number">Soal {index + 1}</span>
                            <span className={`review-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                              {isCorrect ? (
                                <>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>{' '}
                                  Benar
                                </>
                              ) : (
                                <>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                  </svg>{' '}
                                  Salah
                                </>
                              )}
                            </span>
                          </div>
                          <p className="review-question">{q.question}</p>
                          <div className="review-answers">
                            <div className={`answer-item ${userAnswer === q.correctAnswer ? 'user-correct' : 'user-wrong'}`}>
                              <span className="answer-label">Jawaban Anda:</span>
                              <span className="answer-text">{q.options[userAnswer]}</span>
                            </div>
                            {!isCorrect && (
                              <div className="answer-item correct-answer">
                                <span className="answer-label">Jawaban Benar:</span>
                                <span className="answer-text">{q.options[q.correctAnswer]}</span>
                              </div>
                            )}
                          </div>
                          {/* Bagian penjelasan jawaban */}
                          <div className="explanation">
                            <span className="explanation-label">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                              </svg>
                              Penjelasan:
                            </span>
                            <p>{q.explanation}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="result-actions">
                    <button className="btn-retake" onClick={handleRetakeQuiz}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 4v6h6M23 20v-6h-6" />
                        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                      </svg>
                      Ulangi Quiz
                    </button>
                    {activePart < quizData.parts.length - 1 && (
                      <button className="btn-next-part" onClick={handleNextPart}>
                        Lanjut ke Part {activePart + 2}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticePage;
