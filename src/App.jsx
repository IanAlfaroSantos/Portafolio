
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Animaciones tipo AOS como el index original
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-[9999]">
        <div className="w-16 h-16 border-4 border-[#00c6ff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-[#00c6ff] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Skills />
        <Experience />
        <Projects />
        <Quote />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-50 group"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
};

export default App;