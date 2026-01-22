import React, { useMemo, useEffect, useRef, useState } from 'react';
import coursesData from '../data/coursesData';

// Ikon untuk setiap kategori (emoji atau path ke SVG)
const categoryIcons = {
  Memasak: { type: 'emoji', value: '🍳' },
  'Menggambar & Seni': { type: 'emoji', value: '🎨' },
  Musik: { type: 'emoji', value: '🎵' },
  Bahasa: { type: 'emoji', value: '🌐' },
  'Teknologi & Coding': { type: 'emoji', value: '💻' },
  Desain: { type: 'emoji', value: '✏️' },
  'Public Speaking': { type: 'svg', value: '/img/icons/public-speaking.svg' },
  'Keterampilan Hidup': { type: 'svg', value: '/img/icons/keterampilan-hidup.svg' },
  'Bisnis & UMKM': { type: 'svg', value: '/img/icons/bisnis-umkm.svg' },
  Parenting: { type: 'svg', value: '/img/icons/parenting.svg' },
};

// Default icon
const defaultIcon = { type: 'emoji', value: '📚' };

const CategorySection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Menghitung kategori dan jumlah kursus dari data kursus
  const categories = useMemo(() => {
    const categoryCount = {};

    // Menghitung jumlah kursus per kategori
    coursesData.forEach((course) => {
      if (categoryCount[course.category]) {
        categoryCount[course.category]++;
      } else {
        categoryCount[course.category] = 1;
      }
    });

    // Mengubah menjadi array dengan format yang diinginkan
    return Object.entries(categoryCount).map(([name, count]) => ({
      name,
      count: `${count}+ Kursus`,
      icon: categoryIcons[name] || defaultIcon,
    }));
  }, []);

  // Warna pastel untuk setiap kategori
  const colorClasses = ['pill--lavender', 'pill--peach', 'pill--mint', 'pill--cream', 'pill--blush', 'pill--lilac', 'pill--sky', 'pill--aqua'];

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

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="kategori" className="top-categories parallax-section" ref={sectionRef}>
      {/* Parallax Background */}
      <div
        className="category-parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="parallax-circle parallax-circle-1 parallax-float-slow"></div>
        <div className="parallax-circle parallax-circle-2 parallax-float-medium"></div>
      </div>

      <div className="container">
        <div className={`section-header scroll-animate ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-badge">Kategori Populer</span>
          <h2 className="section-title center">Temukan Bidang yang Kamu Minati</h2>
          <p className="section-desc">Pilih dari berbagai kategori pembelajaran yang tersedia dan mulai perjalanan belajarmu</p>
        </div>

        <div className="category-pills">
          {categories.map((c, i) => (
            <button
              key={c.name}
              className={`pill ${colorClasses[i % colorClasses.length]} scroll-animate-scale ${isVisible ? 'animate-in' : ''}`}
              type="button"
              style={{
                transitionDelay: `${0.05 + i * 0.08}s`,
              }}
            >
              <span className="pill-icon">{c.icon.type === 'svg' ? <img src={`${process.env.PUBLIC_URL}${c.icon.value}`} alt={c.name} className="category-icon-img" /> : c.icon.value}</span>
              <div className="pill-content">
                <span className="pill-label">{c.name}</span>
                <span className="pill-count">{c.count}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
