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
  const [showBackOnline, setShowBackOnline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let hideTimer;
    let intervalId;

    const checkConnection = async () => {
      try {
        // Hacemos una petición rápida de tipo HEAD al manifest para verificar conexión real
        await fetch('https://portafolio-five-alpha-21.vercel.app/manifest.webmanifest', {
          method: 'HEAD',
          cache: 'no-store',
          mode: 'no-cors'
        });
        
        setIsOnline(prev => {
          // Si antes estábamos offline y ahora estamos online -> Mostrar aviso verde
          if (!prev) {
            setShowBackOnline(true);
            if (hideTimer) clearTimeout(hideTimer);
            hideTimer = setTimeout(() => setShowBackOnline(false), 3000);
          }
          return true;
        });
      } catch (err) {
        setIsOnline(false);
        setShowBackOnline(false);
      }
    };

    const handleOnline = () => {
      checkConnection();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowBackOnline(false);
      if (hideTimer) clearTimeout(hideTimer);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Correr verificación al montar la app
    checkConnection();

    // Verificación constante cada 10 segundos
    intervalId = setInterval(checkConnection, 10000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (hideTimer) clearTimeout(hideTimer);
      if (intervalId) clearInterval(intervalId);
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

        {/* 1. MODO EN VIVO (Con internet): Renderiza el portafolio en vivo de Vercel */}
        {isOnline && (
          <iframe
            src="https://portafolio-five-alpha-21.vercel.app/"
            className="fixed inset-0 w-full h-full border-none z-[80] bg-[#020306]"
            title="Portafolio"
          />
        )}
        
        {/* Banner de Sin Conexión (Rojo/Accent) */}
        {!isOnline && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] animate-fade-in
            flex items-center gap-2 px-4 py-2.5 rounded-xl border border-accent/30
            bg-[#020306]/95 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,122,0.2)]">
            <WifiOff className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-widest">
              Sin conexión a internet
            </span>
          </div>
        )}

        {/* Banner de Conexión Recuperada (Verde Matrix) */}
        {isOnline && showBackOnline && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] animate-fade-in
            flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#00ff41]/30
            bg-[#020306]/95 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,65,0.25)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-ping" />
            <span className="text-[9px] font-mono font-bold text-[#00ff41] uppercase tracking-widest">
              Recuperaste la conexión a internet
            </span>
          </div>
        )}

        {/* 2. MODO LOCAL (Sin internet): Renderiza los componentes locales compilados en el APK */}
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