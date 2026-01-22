import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CategorySection from './components/CategorySection';
import CourseSection from './components/CourseSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const StatsSection = () => {};

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <FeatureSection />
        <StatsSection />
        <CourseSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
