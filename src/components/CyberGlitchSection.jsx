import React, { useState, useEffect, useRef } from 'react';

const CyberGlitchSection = ({ children, className = "" }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGlitching(true);
          const timer = setTimeout(() => {
            setIsGlitching(false);
          }, 600);
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${className} ${isGlitching ? 'animate-section-glitch' : ''}`}
    >
      {children}
    </div>
  );
};

export default CyberGlitchSection;
