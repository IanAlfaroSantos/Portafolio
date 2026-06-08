import React, { useState, useEffect } from 'react';
import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Developer Jr. FullStack Software";
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentLength = displayText.length;
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, currentLength + 1));
        if (currentLength + 1 === fullText.length) {
          setSpeed(3000);
          setIsDeleting(true);
        } else setSpeed(100);
      } else {
        setDisplayText(fullText.substring(0, currentLength - 1));
        setSpeed(50);
        if (currentLength === 0) {
          setIsDeleting(false);
          setSpeed(500);
        }
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, speed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-12">
      {/* Luces radiales flotantes del fondo */}
      <div className="absolute top-1/4 -left-10 md:-left-20 w-48 h-48 md:w-80 md:h-80 bg-primary/5 blur-[80px] md:blur-[100px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-10 md:-right-20 w-52 h-52 md:w-96 md:h-96 bg-accent/5 blur-[100px] md:blur-[120px] rounded-full animate-float"></div>

      <div className="container mx-auto px-6 z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Columna Izquierda: Información Principal */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center order-2 lg:order-1" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/5 border border-primary/20 mb-4 self-start animate-pulse relative">
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary"></div>
              <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-primary"></div>
              <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-primary"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
              <span className="text-[7px] font-mono font-bold uppercase tracking-widest text-primary">👾 SYS_STATUS: ACTIVE</span>
            </div>

            <p className="text-secondary font-mono font-bold tracking-[0.4em] uppercase mb-1.5 text-[8px] sm:text-[10px]">
              // IDENTIFICACIÓN.CONEXIÓN ⚡
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tighter leading-none mb-2 hover:animate-glitch-once cursor-default select-none">
              Ian <span className="vivid-gradient">Alfaro</span> 🚀
            </h1>

            <div className="h-6 flex items-center mb-5">
              <h2 className="text-[11px] sm:text-xs md:text-sm font-mono font-bold text-white/60 tracking-wider uppercase typing-effect">
                {displayText}
              </h2>
            </div>

            {/* Panel de Estadísticas Rápidas (Estilo ERP de alta densidad) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full mb-6">
              <div className="glass-panel p-4 text-left relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary/40 group-hover:border-primary transition-colors"></div>
                <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-primary/40 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-primary/40 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary/40 group-hover:border-primary transition-colors"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-primary shadow-[0_0_8px_#00f0ff]"></div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-primary tracking-widest block mb-0.5">[01.ESPECIALIDAD] 💻</span>
                <strong className="text-white text-xs sm:text-sm font-mono font-bold uppercase block leading-tight">Desarrollo Full-Stack</strong>
              </div>
              <div className="glass-panel p-4 text-left relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-secondary/40 group-hover:border-secondary transition-colors"></div>
                <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-secondary/40 group-hover:border-secondary transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-secondary/40 group-hover:border-secondary transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-secondary/40 group-hover:border-secondary transition-colors"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary shadow-[0_0_8px_#8b7cf6]"></div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-secondary tracking-widest block mb-0.5">[02.UBICACIÓN] 🌐</span>
                <strong className="text-white text-xs sm:text-sm font-mono font-bold uppercase block leading-tight">Guatemala (GMT-6)</strong>
              </div>
              <div className="glass-panel p-4 text-left relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-accent/40 group-hover:border-accent transition-colors"></div>
                <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-accent/40 group-hover:border-accent transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-accent/40 group-hover:border-accent transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-accent/40 group-hover:border-accent transition-colors"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent shadow-[0_0_8px_#ff007a]"></div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-accent tracking-widest block mb-0.5">[03.FORMACIÓN] 🧠</span>
                <strong className="text-white text-xs sm:text-sm font-mono font-bold uppercase block leading-tight">Ingeniería en Sistemas</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1gXomyC_jB4alhmqFQJutw5yi0ANYgGQN/view?usp=drive_link"
                target="_blank"
                className="btn-luxury btn-primary-luxury w-full sm:w-auto hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] relative group cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-primary/30 group-hover:border-primary"></div>
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-primary/30 group-hover:border-primary"></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-primary/30 group-hover:border-primary"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-primary/30 group-hover:border-primary"></div>
                DESCARGAR_CV 💾 <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="#proyectos"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('#proyectos');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 85;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="btn-luxury btn-secondary-luxury w-full sm:w-auto relative group cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-primary"></div>
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-primary"></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/20 group-hover:border-primary"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-primary"></div>
                VER_PROYECTOS 🎮 <Code className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Acceso y Foto Scanner (Col-span 5) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2" data-aos="zoom-in">
            <div className="relative p-1.5 group max-w-[280px] sm:max-w-[320px] w-full">
              {/* Contorno Neón Giratorio */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 rounded-3xl opacity-50 blur-md group-hover:opacity-85 transition duration-1000"></div>
              
              {/* Tarjeta de Vidrio Contenedora */}
              <div className="relative rounded-2xl bg-card-bg/90 p-3 flex flex-col border border-white/10 shadow-2xl overflow-hidden">
                {/* HUD Corner Brackets en la tarjeta principal */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-black/60 border border-white/5 group-hover:border-primary/20 transition-colors animate-glitch-once">
                  {/* Imagen Base */}
                  <img
                    src="/assets/images/hero_cyber.png"
                    alt="Ian Alfaro Conceptual Graphic"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:opacity-0 transition-opacity duration-300 select-none"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'; }}
                  />

                  {/* Clones de Aberración Cromática Glitch */}
                  <img
                    src="/assets/images/hero_cyber.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 group-hover:animate-glitch-1 filter hue-rotate-90 saturate-150 pointer-events-none"
                  />
                  <img
                    src="/assets/images/hero_cyber.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 group-hover:animate-glitch-2 filter -hue-rotate-90 saturate-150 pointer-events-none"
                  />
                  
                  {/* Línea Láser Escáner y Estela */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-95 animate-scan pointer-events-none z-20 shadow-[0_0_8px_rgba(0,240,255,0.8),0_0_2px_rgba(0,240,255,0.6)]"></div>
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-primary/15 to-transparent animate-scan pointer-events-none z-20"></div>
                  
                  {/* Detalle en esquina tipo HUD */}
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/75 border border-white/10 text-[7px] font-mono text-white/50 tracking-wider">
                    SYS_AVATAR: active
                  </div>
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/75 border border-white/10 text-[7px] font-mono text-primary tracking-widest font-black uppercase">
                    [HACKER.SYS]
                  </div>
                </div>

                {/* Micro Metadatos Abajo de la Foto */}
                <div className="mt-3 flex justify-between items-center text-[7px] font-mono text-white/30 border-t border-white/5 pt-2 px-1">
                  <span>SEC_LEVEL: 09</span>
                  <span>LOC: 14.6349, -90.5069</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;