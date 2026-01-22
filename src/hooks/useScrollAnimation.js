import { useEffect, useRef, useState, useCallback } from 'react';

// Hook untuk scroll animation dengan Intersection Observer
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve setelah animasi dimulai (one-time animation)
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.once, options.threshold, options.rootMargin]);

  return [elementRef, isVisible];
};

// Hook untuk mouse parallax effect
export const useMouseParallax = (depth = 20) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX - innerWidth / 2) / depth;
      const y = (clientY - innerHeight / 2) / depth;

      setPosition({ x, y });
    },
    [depth],
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return position;
};

// Hook untuk scroll parallax effect
export const useScrollParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const relativeScroll = scrolled - elementTop;

      setOffset(relativeScroll * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [elementRef, offset];
};

// Component wrapper untuk scroll animation
export const ScrollAnimateWrapper = ({ children, className = '', animation = 'fade-up', delay = 0, ...props }) => {
  const [ref, isVisible] = useScrollAnimation();

  const animationClasses = {
    'fade-up': 'scroll-animate',
    'fade-left': 'scroll-animate-left',
    'fade-right': 'scroll-animate-right',
    scale: 'scroll-animate-scale',
  };

  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';
  const baseClass = animationClasses[animation] || 'scroll-animate';
  const visibleClass = isVisible ? 'animate-in' : '';

  return (
    <div ref={ref} className={`${baseClass} ${delayClass} ${visibleClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default useScrollAnimation;
