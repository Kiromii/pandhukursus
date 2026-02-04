import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'Akses untuk Semua Kalangan',
    desc: 'Konten disesuaikan untuk semua usia dan latar belakang.',
    icon: '👥',
    color: 'feature--blue',
  },
  {
    title: 'Materi Beragam & Terstruktur',
    desc: 'Kurikulum yang tersusun rapi dari dasar hingga lanjutan.',
    icon: '📚',
    color: 'feature--green',
  },
  {
    title: 'Mentor & Referensi Terpercaya',
    desc: 'Pengajar berpengalaman dan sumber yang kredibel.',
    icon: '👨‍🏫',
    color: 'feature--purple',
  },
  {
    title: 'Belajar Fleksibel Kapan Saja',
    desc: 'Akses materi sesuai waktu dan kecepatanmu.',
    icon: '⏰',
    color: 'feature--orange',
  },
];

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX - innerWidth / 2) / 50,
        y: (clientY - innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Parallax Tetap - tetap di tempat saat scrolling */}
      <div
        className={`features-fixed-bg ${isVisible ? 'visible' : ''}`}
        style={{
          '--parallax-bg': `url(${process.env.PUBLIC_URL}/img/parallaximg/img1parallax.jpeg)`,
        }}
      ></div>

      <section id="keunggulan" className="features parallax-section" ref={sectionRef}>
        <div className="container">
          {/* Pembungkus Konten dengan Efek Glassmorphism */}
          <div className="features-content-wrapper">
            <div className="features-wrapper">
              <div className={`features-content scroll-animate-left ${isVisible ? 'animate-in' : ''}`}>
                <span className="section-badge">Mengapa Pandhu?</span>
                <h2 className="section-title">Keunggulan Platform Kami</h2>
                <p className="section-desc">Pandhu dirancang untuk memberikan pengalaman belajar terbaik dengan berbagai fitur unggulan yang mendukung proses pembelajaran Anda.</p>

                {/* Statistik dihapus sesuai permintaan */}
              </div>

              <div className="feature-grid">
                {features.map((f, idx) => (
                  <div
                    className={`feature-card ${f.color} card-parallax scroll-animate-scale ${isVisible ? 'animate-in' : ''}`}
                    key={idx}
                    style={{
                      transitionDelay: `${0.1 + idx * 0.15}s`,
                      transform: isVisible ? `translate(${mousePos.x * (idx % 2 === 0 ? 0.3 : -0.3)}px, ${mousePos.y * 0.2}px)` : undefined,
                    }}
                  >
                    <div className="feature-icon-wrap" aria-hidden />
                    <div className="feature-text">
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
