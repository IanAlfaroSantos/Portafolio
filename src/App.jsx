import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CyberGlitchSection from './components/CyberGlitchSection';
import MatrixRainBackground from './components/MatrixRainBackground';
import About from './components/About';
import Values from './components/Values';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import PWAUpdatePrompt from './components/PWAUpdatePrompt';
import { ChevronUp } from 'lucide-react';

const MainPortfolio = () => {
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('portfolioScrollY');
    if (savedScrollY) {
      const scrollY = parseInt(savedScrollY, 10);
      const timer = setTimeout(() => {
        window.scrollTo(0, scrollY);
        sessionStorage.removeItem('portfolioScrollY');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <CyberGlitchSection><Hero /></CyberGlitchSection>
        <CyberGlitchSection><About /></CyberGlitchSection>
        <CyberGlitchSection><Values /></CyberGlitchSection>
        <CyberGlitchSection><Skills /></CyberGlitchSection>
        <CyberGlitchSection><Experience /></CyberGlitchSection>
        <CyberGlitchSection><Projects /></CyberGlitchSection>
        <CyberGlitchSection><Quote /></CyberGlitchSection>
        <CyberGlitchSection><Contact /></CyberGlitchSection>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const updateMouse = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#030407] flex items-center justify-center z-[9999]">
        <div className="w-16 h-16 border-4 border-[#00c6ff] border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(0,240,255,0.2)]"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen selection:bg-[#00c6ff] selection:text-white relative">
        <div className="interactive-cursor-glow"></div>
        <MatrixRainBackground />
        <PWAUpdatePrompt />
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/proyecto/:slug" element={<ProjectDetail />} />
        </Routes>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-dark-bg shadow-lg shadow-primary/20 hover:scale-110 active:scale-90 transition-transform z-50 group hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
        >
          <ChevronUp className="w-5 h-5 text-dark-bg stroke-[3px]" />
        </button>
      </div>
    </Router>
  );
};

export default App;