
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // resalta la sección actual (UX)
      const sections = document.querySelectorAll('section[id]');
      const y = window.scrollY + 120;
      for (const sec of sections) {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (y >= top && y < bottom) {
          setActive(`#${sec.id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mi', href: '#sobreMi' },
    { name: 'Valores', href: '#valores' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Educación y Experiencia', href: '#educacion' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'py-3 bg-dark-bg/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform">
            <img src="/assets/images/LogoPersonal.png" alt="Logo" className="w-full h-full object-contain p-1" />
          </div>
          <span className="text-white font-bold text-sm tracking-tight">Ian Alfaro</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[11px] font-bold uppercase tracking-wider transition-colors relative group ${active === link.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${active === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <a 
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-bold text-primary uppercase tracking-wider hover:bg-primary hover:text-white transition-all"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-xl">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark-bg z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}> 
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-3xl font-black text-white hover:text-primary transition-colors">
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;