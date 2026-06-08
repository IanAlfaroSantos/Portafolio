import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink, Check, Cpu, Calendar, Layout, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const getProjectSlug = (title) => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

const ProjectCarouselDetail = ({ images, title, onZoomClick }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div 
        className="relative w-full aspect-[16/9] bg-dark-bg/60 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-2 group cursor-zoom-in"
        onClick={() => onZoomClick(index)}
      >
        {/* HUD Corner Brackets en la imagen miniatura */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary/30 group-hover:border-primary transition-colors"></div>
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/30 group-hover:border-primary transition-colors"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary/30 group-hover:border-primary transition-colors"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary/30 group-hover:border-primary transition-colors"></div>

        <img
          src={images[index]}
          alt={title}
          className="w-full h-full object-contain rounded-xl"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop';
          }}
        />

        {/* Lupa indicadora en hover */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          <ZoomIn className="w-4 h-4 text-white" />
        </div>

        {/* Controles manuales */}
        {images.length > 1 && (
          <div className="absolute inset-x-0 flex justify-between items-center px-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIndex((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="pointer-events-auto w-8 h-8 rounded-lg bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-dark-bg hover:border-primary transition-all active:scale-95 cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIndex((prev) => (prev + 1) % images.length);
              }}
              className="pointer-events-auto w-8 h-8 rounded-lg bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-dark-bg hover:border-primary transition-all active:scale-95 cursor-pointer"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Tira de miniaturas */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto py-1.5 px-2 mt-3 bg-black/20 rounded-xl border border-white/5 scrollbar-thin">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-10 aspect-video rounded overflow-hidden shrink-0 border transition-all duration-300 cursor-pointer ${
                idx === index 
                  ? 'border-primary scale-[1.02] shadow-[0_0_8px_rgba(0,240,255,0.3)]' 
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Estado para el visor de imágenes Lightbox global
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0, title: '' });
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

  // Encontrar el proyecto por slug
  const project = PROJECTS.find(p => getProjectSlug(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl font-black text-white mb-4">Proyecto no encontrado</h2>
        <p className="text-white/40 mb-8 max-w-md">El proyecto solicitado no existe o la URL es incorrecta.</p>
        <Link to="/" className="btn-luxury btn-primary-luxury">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  // Parsear la descripción para separar texto normal de listas y secciones especiales
  const parseDescription = (descText) => {
    const blocks = descText.split('\n\n');
    return blocks.map((block, idx) => {
      const trimmedBlock = block.trim();
      
      // Si es un título de sección
      if (trimmedBlock.startsWith('Funcionalidades principales:') || trimmedBlock.startsWith('Valor del Proyecto:')) {
        return (
          <h4 key={idx} className="text-xs font-mono font-bold text-primary mt-6 mb-3 border-l border-primary pl-2 uppercase tracking-widest">
            {trimmedBlock}
          </h4>
        );
      }

      // Si es una lista con viñetas de verificación (✅ o •)
      if (trimmedBlock.includes('✅') || trimmedBlock.includes('•')) {
        const items = trimmedBlock
          .split('\n')
          .map(item => item.replace(/[✅•]/g, '').trim())
          .filter(Boolean);
        
        return (
          <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
            {items.map((item, itemIdx) => (
              <div key={itemIdx} className="glass-panel p-2.5 flex items-start gap-2 bg-white/[0.002] border-white/5 relative">
                <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary/20"></div>
                <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-primary/20"></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-primary/20"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary/20"></div>
                <div className="w-4.5 h-4.5 rounded-full bg-primary/15 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-[10px] md:text-[11px] font-mono font-medium text-white/60 leading-normal">{item}</span>
              </div>
            ))}
          </div>
        );
      }

      // Párrafo de texto normal
      return (
        <p key={idx} className="text-white/50 text-[11px] md:text-xs leading-relaxed text-justify mb-3">
          {trimmedBlock}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen text-gray-400 pb-16 relative overflow-x-hidden">
      {/* Ambient glow orbs - igual que el portafolio */}
      <div className="ambient-glow ambient-glow-1"></div>
      <div className="ambient-glow ambient-glow-2"></div>
      <div className="ambient-glow ambient-glow-3"></div>
      {/* Luces de fondo adicionales para esta vista */}
      <div className="fixed top-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-primary/4 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-accent/4 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Header Fijo Especial (Capsule menu) */}
      <header className="sticky top-0 left-0 w-full z-[100] py-3 bg-dark-bg/85 backdrop-blur-2xl border-b border-white/[0.04] shadow-lg">
        <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-primary group-hover:-translate-x-0.5 transition-transform" />
            <span>Volver</span>
          </button>
          
          <h2 className="hidden sm:block text-[10px] font-mono font-bold text-white uppercase tracking-widest truncate max-w-xs md:max-w-sm">
            {project.title.toUpperCase()}
          </h2>

          <div className="flex gap-1.5">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-white/5 border border-white/10 text-white flex items-center justify-center hover:border-primary/40 transition-colors"
                title="Ver Código"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {project.preview && (
              <a 
                href={project.preview} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center hover:border-primary/45 transition-colors"
                title="Ver Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-6 pt-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LADO IZQUIERDO: Carrusel y visuales (Col-span 7) */}
          <div className="lg:col-span-7 space-y-4" data-aos="fade-right">
            <ProjectCarouselDetail 
              images={project.images} 
              title={project.title} 
              onZoomClick={(carouselIndex) => setLightbox({
                isOpen: true,
                images: project.images,
                index: carouselIndex,
                title: project.title
              })}
            />
          </div>

          {/* LADO DERECHO: Detalles del Caso de Estudio (Col-span 5) */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-up">
            
            {/* Cabecera */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[7px] font-mono font-bold text-secondary bg-secondary/5 border border-secondary/15 px-2 py-0.5 rounded tracking-wider uppercase">
                  [CASO.ESTUDIO]
                </span>
                {project.featured && (
                  <span className="text-[7px] font-mono font-bold text-primary bg-primary/5 border border-primary/15 px-2 py-0.5 rounded tracking-wider uppercase shadow-inner">
                    DESTACADO ⭐
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold font-mono text-white tracking-tight leading-none">
                {project.title.toUpperCase()}
              </h1>
            </div>

            {/* Ficha técnica rápida */}
            <div className="glass-card p-3.5 bg-white/[0.002] border-white/5 grid grid-cols-3 gap-3 relative">
              {/* HUD Corner Brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/30"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30"></div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] font-mono font-bold text-white/30 uppercase tracking-widest flex items-center gap-1"><Layout className="w-2.5 h-2.5 text-primary" /> Tipo</span>
                <strong className="text-white text-[9px] font-mono font-semibold">[WEB_APP]</strong>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] font-mono font-bold text-white/30 uppercase tracking-widest flex items-center gap-1"><Cpu className="w-2.5 h-2.5 text-secondary" /> Motor</span>
                <strong className="text-white text-[9px] font-mono font-semibold">{project.skills[0]?.name.toUpperCase() || 'REACT'}</strong>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] font-mono font-bold text-white/30 uppercase tracking-widest flex items-center gap-1"><Calendar className="w-2.5 h-2.5 text-accent" /> Año</span>
                <strong className="text-white text-[9px] font-mono font-semibold">2025-2026</strong>
              </div>
            </div>

            {/* Tecnologías Usadas */}
            <div className="border-t border-white/5 pt-4">
              <span className="text-[8px] font-mono font-bold text-secondary uppercase tracking-widest block mb-2.5">// PILA_TECNOLÓGICA</span>
              <div className="flex flex-wrap gap-1">
                {project.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/[0.04] rounded-lg hover:border-primary/25 transition-all hover:bg-white/[0.02] group/chip relative">
                    <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary/10 group-hover/chip:border-primary/35"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-primary/10 group-hover/chip:border-primary/35"></div>
                    <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-primary/10 group-hover/chip:border-primary/35"></div>
                    <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary/10 group-hover/chip:border-primary/35"></div>
                    <img 
                      src={skill.icon} 
                      alt="" 
                      className="w-3.5 h-3.5 object-contain filter brightness-95 group-hover/chip:scale-105 transition-transform duration-300"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <span className="text-[8px] font-mono text-white/60 group-hover/chip:text-white transition-colors duration-200 uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de acción principales */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury btn-secondary-luxury w-full flex-1 py-3 hover:border-primary/40 relative group"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-primary/20 group-hover:border-primary"></div>
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-primary/20 group-hover:border-primary"></div>
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-primary/20 group-hover:border-primary"></div>
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-primary/20 group-hover:border-primary"></div>
                  GITHUB_REPOSITORY <GithubIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {project.preview && (
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury btn-primary-luxury w-full flex-1 py-3"
                >
                  VER_APLICACIÓN <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

          {/* LADO IZQUIERDO ABAJO: Descripción parseada extendida (Col-span 12) */}
          <div className="lg:col-span-12 border-t border-white/5 pt-8 mt-4" data-aos="fade-up">
            <span className="text-[8px] font-mono font-bold text-primary uppercase tracking-[0.4em] block mb-3">// CASO_DE_ESTUDIO_COMPLETO</span>
            <div className="max-w-3xl space-y-3">
              {parseDescription(project.description)}
            </div>
          </div>

        </div>
      </main>

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

    </div>
  );
};

export default ProjectDetail;
