
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      const y = window.scrollY + 120;
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (y >= top && y < bottom) {
          setActive(`#${sec.id}`);
          break;
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const navLinks = [
    { name: 'Inicio 🏠', href: '#home' },
    { name: 'Sobre mi 🧠', href: '#sobreMi' },
    { name: 'Valores 🛡️', href: '#valores' },
    { name: 'Skills ⚡', href: '#habilidades' },
    { name: 'Logs 💾', href: '#educacion' },
    { name: 'Proyectos 👾', href: '#proyectos' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-dark-bg/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_15px_30px_rgba(0,0,0,0.5)]' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/5 border border-white/10 shadow-lg shadow-primary/5 group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300">
              <img src="/assets/images/LogoPersonal.png" alt="Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="text-white font-mono font-bold text-[10px] tracking-widest uppercase group-hover:vivid-gradient transition-all">
              Ian Alfaro
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 px-3 py-1 bg-card-bg/60 border border-white/[0.05] rounded-full backdrop-blur-md shadow-lg shadow-black/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded-full transition-all border border-transparent duration-300 ${
                  active === link.href 
                    ? 'text-primary bg-primary/10 border-primary/20 shadow-[0_4px_12px_rgba(0,240,255,0.08)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.01]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="ml-2 px-4 py-1.5 bg-gradient-primary text-dark-bg rounded-full text-[9px] font-mono font-extrabold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contacto
            </a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-xl w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-primary/45 transition-colors">
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 bg-dark-bg/98 backdrop-blur-3xl z-[90] flex flex-col items-center justify-center gap-5 transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {navLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`text-lg font-mono font-bold transition-all duration-500 transform uppercase tracking-widest ${
              isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
            } ${active === link.href ? 'vivid-gradient' : 'text-white hover:text-primary'}`}
            style={{ transitionDelay: `${isOpen ? 100 + idx * 50 : 0}ms` }}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contacto" 
          onClick={(e) => handleNavClick(e, '#contacto')} 
          className={`mt-4 px-6 py-3 bg-gradient-primary rounded-full text-xs font-mono font-extrabold text-dark-bg uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500 transform ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: `${isOpen ? 100 + navLinks.length * 50 : 0}ms` }}
        >
          Contacto
        </a>
      </div>
    </>
  )
}

export default Navbar;;