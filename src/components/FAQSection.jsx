import React, { useState, useEffect, useRef } from 'react';

const FAQSection = () => {
  const faqs = [
    { id: 'q1', q: 'Bagaimana cara memulai belajar di Pandhu?', a: 'Daftar akun gratis, pilih kursus yang diminati, dan mulai belajar kapan saja.' },
    { id: 'q2', q: 'Bagaimana menjadi pengajar di Pandhu?', a: 'Buat akun, ajukan outline kursus Anda, dan ikuti proses onboarding kami.' },
    { id: 'q3', q: 'Bagaimana sistem pembayaran dan harga?', a: 'Kami mendukung berbagai metode pembayaran; instruktur dapat mengatur harga atau memilih model bagi hasil.' },
    { id: 'q4', q: 'Berapa lama proses review kursus?', a: 'Review kursus biasanya memakan waktu 3-5 hari kerja tergantung konten.' },
    { id: 'q5', q: 'Apakah mendukung multimedia?', a: 'Ya — video, slide, kuis, dan materi yang dapat diunduh didukung sepenuhnya.' },
  ];

  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="bantuan" className="faq-section" ref={sectionRef}>
      <div className="container">
        <div className={`faq-header scroll-animate ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-badge">Bantuan</span>
          <h3 className="faq-title">Yang Sering Ditanyain Sama Teman-teman</h3>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className={`faq-item ${open ? 'open' : ''} scroll-animate ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: `${0.1 + index * 0.1}s` }}>
                <button className="faq-question" onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))} aria-expanded={open}>
                  <span>{item.q}</span>
                  <span className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={open ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer ${open ? 'open' : ''}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
