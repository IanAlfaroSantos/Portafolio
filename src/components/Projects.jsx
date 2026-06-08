import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowRight, ExternalLink, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const getProjectSlug = (title) => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

const ProjectCarousel = ({ images, title, onZoomClick }) => {
  const [index, setIndex] = useState(0);

  return (
    <div 
      className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 group/carousel cursor-zoom-in relative aspect-video"
      onClick={() => onZoomClick(index)}
    >
      <img
        src={images[index]}
        alt={title}
        className="w-full h-full object-contain p-2 select-none"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop';
        }}
      />

      {/* Lupa indicadora en hover */}
      <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded bg-black/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity pointer-events-none z-10">
        <ZoomIn className="w-3 h-3 text-white" />
      </div>

      {/* Controles manuales */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 flex justify-between items-center px-1.5 pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="pointer-events-auto w-6 h-6 rounded bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-dark-bg hover:border-primary transition-all text-xs cursor-pointer"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex((prev) => (prev + 1) % images.length);
            }}
            className="pointer-events-auto w-6 h-6 rounded bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-dark-bg hover:border-primary transition-all text-xs cursor-pointer"
          >
            ›
          </button>
        </div>
      )}

      {/* Puntos indicadores */}
      {images.length > 1 && (
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-0.5 px-2 py-0.5 rounded-full bg-black/50 border border-white/5 backdrop-blur-sm pointer-events-none z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-primary w-2.5' : 'bg-white/20 w-1'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FeaturedProjectCard = ({ project, index, onZoomClick }) => {
  return (
    <div
      className="group glass-card flex flex-col hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full border-primary/15 relative"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* HUD Corner Brackets */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors duration-500 z-20"></div>
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors duration-500 z-20"></div>
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors duration-500 z-20"></div>
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors duration-500 z-20"></div>

      {/* Contenedor de Carrusel */}
      <div className="relative aspect-video w-full bg-dark-bg/60 border-b border-white/[0.04] overflow-hidden">
        <ProjectCarousel images={project.images} title={project.title} onZoomClick={onZoomClick} />
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between gap-3 relative">
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="inline-block text-[7px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 shadow-sm">
              [ESTADO.DESTACADO]
            </span>
            <span className="inline-block text-[7px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/5 text-white/50 border border-white/10">
              FICHA.TÉCNICA
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-extrabold font-mono text-white group-hover:text-primary transition-colors duration-300 mb-1">
            {project.title.toUpperCase()}
          </h4>
          <p className="text-white/40 text-[9px] leading-relaxed line-clamp-3 font-medium mb-3">
            {project.description.split('\n\n')[0]}
          </p>

          {/* Chips de Pila Tecnológica en Featured */}
          <div className="flex flex-wrap gap-1 mb-2">
            {project.skills.slice(0, 6).map((skill, sIdx) => (
              <div key={sIdx} className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 border border-white/[0.04] rounded text-[8px] font-mono text-white/50 uppercase tracking-wider">
                <img src={skill.icon} alt="" className="w-2.5 h-2.5 object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <span>{skill.name}</span>
              </div>
            ))}
            {project.skills.length > 6 && (
              <span className="text-[8px] font-mono text-white/30 px-1 py-0.5">+ {project.skills.length - 6}</span>
            )}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            to={`/proyecto/${getProjectSlug(project.title)}`}
            onClick={() => sessionStorage.setItem('portfolioScrollY', window.scrollY.toString())}
            className="py-2 bg-white/5 rounded-lg text-center text-[8px] font-mono font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5 flex items-center justify-center gap-1 hover:border-primary/30"
          >
            Ficha <ArrowRight className="w-2.5 h-2.5" />
          </Link>
          {project.preview ? (
            <a
              href={project.preview}
              target="_blank"
              rel="noreferrer"
              className="py-2 bg-primary/10 rounded-lg text-center text-[8px] font-mono font-extrabold text-primary uppercase tracking-widest hover:bg-primary/20 transition-all border border-primary/20 flex items-center justify-center gap-1"
            >
              Demo <ExternalLink className="w-2.5 h-2.5" />
            </a>
          ) : (
            <div className="py-2 bg-white/[0.02] rounded-lg text-center text-[8px] font-mono text-white/20 uppercase tracking-widest border border-white/[0.02] flex items-center justify-center gap-1 select-none">
              Offline
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NormalProjectCard = ({ project, index, onZoomClick }) => {
  return (
    <div
      className="group glass-card flex flex-col hover:-translate-y-0.5 transition-all duration-500 overflow-hidden h-full relative"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* HUD Corner Brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/10 group-hover:border-primary transition-colors duration-500 z-20"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/10 group-hover:border-primary transition-colors duration-500 z-20"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/10 group-hover:border-primary transition-colors duration-500 z-20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/10 group-hover:border-primary transition-colors duration-500 z-20"></div>

      {/* Contenedor de Carrusel */}
      <div className="relative aspect-video w-full bg-dark-bg/60 border-b border-white/[0.04] overflow-hidden">
        <ProjectCarousel images={project.images} title={project.title} onZoomClick={onZoomClick} />
      </div>

      <div className="p-3.5 flex flex-col flex-grow justify-between gap-3 relative">
        <div>
          <h4 className="text-xs sm:text-sm font-bold font-mono text-white group-hover:text-primary transition-colors duration-300 truncate">
            {project.title.toUpperCase()}
          </h4>
        </div>

        {/* Botones de acción */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            to={`/proyecto/${getProjectSlug(project.title)}`}
            onClick={() => sessionStorage.setItem('portfolioScrollY', window.scrollY.toString())}
            className="py-2 bg-white/5 rounded-lg text-center text-[8px] font-mono font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5 flex items-center justify-center gap-1 hover:border-primary/30"
          >
            Ficha <ArrowRight className="w-2.5 h-2.5" />
          </Link>
          {project.preview ? (
            <a
              href={project.preview}
              target="_blank"
              rel="noreferrer"
              className="py-2 bg-primary/10 rounded-lg text-center text-[8px] font-mono font-extrabold text-primary uppercase tracking-widest hover:bg-primary/20 transition-all border border-primary/20 flex items-center justify-center gap-1"
            >
              Demo <ExternalLink className="w-2.5 h-2.5" />
            </a>
          ) : (
            <div className="py-2 bg-white/[0.02] rounded-lg text-center text-[8px] font-mono text-white/20 uppercase tracking-widest border border-white/[0.02] flex items-center justify-center gap-1 select-none">
              Offline
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Estado para el visor de imágenes Lightbox global
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0, title: '' });
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  // Escuchar eventos de teclado
  useEffect(() => {
    if (!lightbox.isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setIsZoomedIn(false);
        setLightbox((prev) => ({
          ...prev,
          index: (prev.index - 1 + prev.images.length) % prev.images.length
        }));
      } else if (e.key === 'ArrowRight') {
        setIsZoomedIn(false);
        setLightbox((prev) => ({
          ...prev,
          index: (prev.index + 1) % prev.images.length
        }));
      } else if (e.key === 'Escape') {
        setIsZoomedIn(false);
        setLightbox((prev) => ({ ...prev, isOpen: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  const handleMouseMove = (e) => {
    if (!isZoomedIn || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    });
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsZoomedIn(false);
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIsZoomedIn(false);
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  const matchFilter = (project, filter) => {
    if (filter === 'all') return true;
    const title = project.title.toLowerCase();
    const skills = project.skills.map(s => s.name.toLowerCase());
    
    if (filter === 'web') {
      return ['chilaquiles', 'sen-ia', 'banking', 'hotelera', 'blog', 'almacenadora', 'zenith'].some(term => title.includes(term));
    }
    if (filter === 'api') {
      return ['sen-ia', 'spotify', 'marvel', 'pokemon', 'giff', 'zenith'].some(term => title.includes(term));
    }
    if (filter === 'desktop') {
      return title.includes('superkinal') || skills.includes('java') || skills.includes('javafx');
    }
    return true;
  };

  // Filtrar proyectos
  const filteredFeatured = PROJECTS.filter(p => p.featured && matchFilter(p, activeFilter));
  const filteredNormal = PROJECTS.filter(p => !p.featured && matchFilter(p, activeFilter));

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-10 text-center" data-aos="fade-right">
          <p className="text-secondary font-mono font-bold uppercase tracking-[0.4em] text-[8px] mb-2">// SISTEMA.CREACIONES</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tighter leading-none hover:animate-glitch-once cursor-default select-none">
            Proyectos <span className="vivid-gradient">Destacados</span>
          </h2>
        </div>

        {/* Filtros */}
        <div className="flex justify-center flex-wrap gap-2 mb-10" data-aos="fade-up">
          <div className="flex items-center gap-1 p-1 bg-card-bg/60 border border-white/[0.05] rounded-full backdrop-blur-md shadow-lg shadow-black/25">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'web', label: 'Web / Full-Stack' },
              { id: 'api', label: 'Integraciones & APIs' },
              { id: 'desktop', label: 'Java / Escritorio' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-[8px] font-mono font-bold uppercase tracking-widest rounded-full transition-all border border-transparent duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'text-primary bg-primary/10 border-primary/20 shadow-[0_0_12px_rgba(0,240,255,0.08)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.01]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECCIÓN 1: PROYECTOS DESTACADOS */}
        {filteredFeatured.length > 0 && (
          <div className="mb-14">
            <div className="mb-6" data-aos="fade-right">
              <h3 className="text-xs font-mono font-bold text-white tracking-widest border-l-2 border-primary pl-2 uppercase">
                [01] CASOS DE ESTUDIO DESTACADOS ⭐
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredFeatured.map((project, idx) => (
                <FeaturedProjectCard
                  key={project.title}
                  project={project}
                  index={idx}
                  onZoomClick={(carouselIndex) => setLightbox({
                    isOpen: true,
                    images: project.images,
                    index: carouselIndex,
                    title: project.title
                  })}
                />
              ))}
            </div>
          </div>
        )}

        {/* SECCIÓN 2: OTROS PROYECTOS */}
        {filteredNormal.length > 0 && (
          <div>
            <div className="mb-6 border-t border-white/5 pt-10" data-aos="fade-right">
              <h3 className="text-xs font-mono font-bold text-white tracking-widest border-l-2 border-secondary pl-2 uppercase">
                [02] MÁS PROYECTOS REGISTRADOS
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredNormal.map((project, idx) => (
                <NormalProjectCard
                  key={project.title}
                  project={project}
                  index={idx}
                  onZoomClick={(carouselIndex) => setLightbox({
                    isOpen: true,
                    images: project.images,
                    index: carouselIndex,
                    title: project.title
                  })}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Visor Lightbox Global de Pantalla Completa (Renderizado a nivel de Página) */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/98 backdrop-blur-md flex flex-col items-center justify-center select-none animate-fadeIn cursor-zoom-out"
          onClick={() => {
            setIsZoomedIn(false);
            setLightbox((prev) => ({ ...prev, isOpen: false }));
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Contenedor del Visor al 80% de la pantalla */}
          <div 
            ref={containerRef}
            className="relative flex items-center justify-center w-[80vw] h-[75vh] overflow-hidden bg-card-bg/60 border border-white/[0.08] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-2 backdrop-blur-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomedIn(!isZoomedIn);
            }}
          >
            {/* HUD Corner Brackets en el visor */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/40"></div>
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/40"></div>
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/40"></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/40"></div>

            <img
              src={lightbox.images[lightbox.index]}
              alt={lightbox.title}
              className="max-w-[75vw] max-h-[65vh] object-contain select-none"
              style={{
                transform: isZoomedIn ? 'scale(2.5)' : 'scale(1)',
                transformOrigin: isZoomedIn ? `${zoomPos.x}% ${zoomPos.y}%` : 'center',
                cursor: isZoomedIn ? 'zoom-out' : 'zoom-in',
                transition: isZoomedIn 
                  ? 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' 
                  : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform-origin 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>

          {/* Botones de navegación del Lightbox flotando al 80% */}
          {lightbox.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-primary hover:text-dark-bg text-white border border-white/10 hover:border-primary w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl transition-all duration-300 active:scale-90 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-primary hover:text-dark-bg text-white border border-white/10 hover:border-primary w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl transition-all duration-300 active:scale-90 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Botón Cerrar */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomedIn(false);
              setLightbox((prev) => ({ ...prev, isOpen: false }));
            }}
            className="absolute top-4 right-4 text-white/50 text-base w-10 h-10 flex items-center justify-center rounded-xl bg-black/60 border border-white/10 hover:border-primary/30 hover:text-white transition cursor-pointer z-50 animate-pulse"
          >
            ✕
          </button>

          {/* Tira de miniaturas en el modal */}
          {lightbox.images.length > 1 && (
            <div 
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 overflow-x-auto py-1 px-2 max-w-[80vw] bg-black/60 border border-white/10 rounded-xl backdrop-blur-md scrollbar-thin z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsZoomedIn(false);
                    setLightbox((prev) => ({ ...prev, index: idx }));
                  }}
                  className={`h-8 aspect-video rounded overflow-hidden shrink-0 border transition-all duration-300 cursor-pointer ${
                    idx === lightbox.index 
                      ? 'border-primary scale-105 shadow-[0_0_8px_rgba(0,240,255,0.3)]' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Barra de estado interactiva estilo Cyber-Dashboard */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-white/10 text-white/50 text-[7px] font-mono tracking-widest uppercase pointer-events-none select-none z-50 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            <span>IMG_{String(lightbox.index + 1).padStart(2, '0')} / IMG_{String(lightbox.images.length).padStart(2, '0')}</span>
            <span className="text-white/20">|</span>
            <span>{isZoomedIn ? 'ZOOM: ACTIVO • MUEVE EL MOUSE PARA PANEAR' : 'CLICK: ZOOM • FLECHAS/MINIATURAS: NAVIGATE'}</span>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;