import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon, FacebookIcon, InstagramIcon, WhatsappIcon } from './BrandIcons';

const AboutSocialLink = ({ social }) => {
  const [imgFailed, setImgFailed] = useState(false);

  const getFallbackIcon = () => {
    switch (social.alt) {
      case 'LinkedIn':
        return <LinkedinIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'GitHub':
        return <GithubIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'Gmail':
        return <Mail className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'Whatsapp':
        return <WhatsappIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'Facebook':
        return <FacebookIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'Instagram':
        return <InstagramIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      default:
        return <Mail className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
    }
  };

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className="aspect-square glass-panel flex items-center justify-center p-3 hover:scale-105 hover:border-secondary/40 transition-all duration-300 group relative"
      title={social.alt}
    >
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/10 group-hover:border-primary transition-colors"></div>
      <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white/10 group-hover:border-primary transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white/10 group-hover:border-primary transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/10 group-hover:border-primary transition-colors"></div>

      {!imgFailed ? (
        <img 
          src={social.img} 
          alt={social.alt} 
          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300" 
          onError={() => setImgFailed(true)}
        />
      ) : (
        getFallbackIcon()
      )}
    </a>
  );
};

const About = () => {
  const socialIcons = [
    { href: "https://www.linkedin.com/in/ian-alfaro-48b68334b/", img: "/assets/images/icon-linkedin.png", alt: "LinkedIn" },
    { href: "https://github.com/IanAlfaroSantos", img: "/assets/images/icon-github.png", alt: "GitHub" },
    { href: "mailto:ialfasa2020@gmail.com", img: "/assets/images/icon-emailWhite.png", alt: "Gmail" },
    { href: "https://wa.me/33662977", img: "/assets/images/icon-whatsapp.png", alt: "Whatsapp" },
    { href: "https://www.facebook.com/ian.alfaro.7547/", img: "/assets/images/icon-facebook.png", alt: "Facebook" },
    { href: "https://www.instagram.com/ian_alfaro_8273/", img: "/assets/images/icon-instagram.png", alt: "Instagram" },
  ];

  return (
    <section id="sobreMi" className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      {/* Background decorations */}
      <div className="absolute -inset-4 bg-radial-gradient from-primary/5 to-accent/5 opacity-10 blur-3xl rounded-[3rem] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Imagen */}
          <div className="lg:col-span-5 relative max-w-[280px] sm:max-w-[320px] mx-auto w-full" data-aos="fade-right">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-accent opacity-10 blur-2xl rounded-2xl"></div>
            <div className="relative rounded-2xl bg-card-bg/90 p-3 flex flex-col border border-white/10 shadow-2xl relative overflow-hidden group">
              {/* HUD Corner Brackets en la tarjeta principal */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors z-20"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors z-20"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors z-20"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors z-20"></div>

              {/* Foto sobre mí con escáner */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-black/60 border border-white/5 group-hover:border-primary/20 transition-colors animate-glitch-once z-10">
                {/* Imagen Base — escala de grises por defecto, full color en hover */}
                <img
                  src="/assets/images/Sobre_mi1.jpeg"
                  alt="Ian Alfaro"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 select-none"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'; }}
                />
                
                {/* Línea Láser Escáner y Estela — siempre visible */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-95 animate-scan pointer-events-none z-20 shadow-[0_0_8px_rgba(0,240,255,0.8),0_0_2px_rgba(0,240,255,0.6)]"></div>
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-primary/15 to-transparent animate-scan pointer-events-none z-20"></div>
                
                {/* Detalle en esquina tipo HUD */}
                <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/75 border border-white/10 text-[7px] font-mono text-white/50 tracking-wider">
                  SYS_PROFILE: active
                </div>
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/75 border border-white/10 text-[7px] font-mono text-primary tracking-widest font-black uppercase">
                  [IAN.BIO]
                </div>
              </div>

              {/* Micro Metadatos Abajo de la Foto */}
              <div className="mt-3 flex justify-between items-center text-[7px] font-mono text-white/30 border-t border-white/5 pt-2 px-1 z-10">
                <span>SEC_LEVEL: 05</span>
                <span>STATUS: DECRYPTED</span>
              </div>
            </div>
            
            {/* Badge Flotante (Estilo ERP Badge) */}
            <div className="absolute -bottom-3 -right-1 sm:-bottom-4 sm:-right-2 glass-card px-4 py-2 bg-card-bg/95 border border-primary/20 shadow-2xl flex flex-col justify-center items-center">
              <span className="block text-base font-extrabold font-display text-primary leading-none">Jr.</span>
              <span className="text-[7px] font-mono font-bold text-white/50 uppercase tracking-widest mt-0.5 block">[FULLSTACK.DEV]</span>
            </div>
          </div>

          {/* Columna Derecha: Texto e Información */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-primary font-mono font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">// DATOS.SISTEMA</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tighter mb-6 leading-tight hover:animate-glitch-once cursor-default select-none">
              Sobre <span className="vivid-gradient">mi</span>
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base max-w-2xl mb-8">
              <p>
                Soy Desarrollador <span className="text-white font-bold">Jr. FullStack</span> con una gran pasión por diseñar e implementar soluciones de software funcionales, eficientes y tecnológicamente modernas.
              </p>
              <p>
                Mi meta profesional es integrarme en proyectos de alto nivel que me permitan <span className="text-primary font-bold">aprender continuamente</span>, expandir mis destrezas técnicas y aportar valor directo al equipo de desarrollo mediante código limpio y estructurado.
              </p>
              <p>
                Me destaco por ser una persona <span className="text-secondary font-bold">proactiva y comunicativa</span>, con una alta capacidad de respuesta para resolver problemas bajo presión y adaptarme con rapidez a nuevos entornos y metodologías.
              </p>
            </div>

            {/* Ficha técnica y Social links en cuadricula limpia */}
            <div className="grid md:grid-cols-12 gap-5">
              
              {/* Ficha de datos */}
              <div className="md:col-span-7 glass-card p-4 bg-white/[0.005] relative group">
                {/* HUD Corner Brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/20 group-hover:border-primary transition-colors"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/20 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/20 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/20 group-hover:border-primary transition-colors"></div>

                <h4 className="text-primary font-mono font-bold mb-3 uppercase text-[10px] sm:text-xs tracking-widest border-b border-white/5 pb-1">[SYS.PERSONAL_LOGS]</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
                  <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-white/30 font-bold uppercase w-20">[SYS_NAME]:</span>
                    <span className="text-white font-semibold">Ian Karel Alfaro Santos</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-white/30 font-bold uppercase w-20">[SYS_LOC]:</span>
                    <span className="text-white font-semibold">Guatemala</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="text-white/30 font-bold uppercase w-20 mt-0.5">[SYS_EDU]:</span>
                    <span className="text-white font-semibold flex-1 leading-normal">
                      Ingeniería en Sistemas - UMG
                    </span>
                  </li>
                </ul>
              </div>

              {/* Redes sociales */}
              <div className="md:col-span-5 flex flex-col justify-center gap-3">
                <h4 className="text-secondary font-mono font-bold uppercase text-[10px] sm:text-xs tracking-widest px-1">// ENLACES.CONEXIÓN</h4>
                <div className="grid grid-cols-3 gap-2">
                  {socialIcons.map((social, idx) => (
                    <AboutSocialLink key={idx} social={social} />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;