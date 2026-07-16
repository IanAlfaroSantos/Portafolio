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
import { ChevronUp, WifiOff } from 'lucide-react';

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
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile', // Desactiva AOS en móviles para máxima fluidez
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Desactiva tracking del mouse en móviles
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
        <div className="interactive-cursor-glow hidden md:block"></div>
        <MatrixRainBackground />
        <PWAUpdatePrompt />
        
        {/* Banner de Modo Sin Conexión estilo Spotify */}
        {!isOnline && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] animate-fade-in
            flex items-center gap-2 px-4 py-2.5 rounded-xl border border-accent/30
            bg-dark-bg/95 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,122,0.2)]">
            <WifiOff className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-widest">
              Sin conexión • Modo local activo
            </span>
          </div>
        )}

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