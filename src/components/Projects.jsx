import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index, onOpen }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  }

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  }

  return (
    <div
      className="group glass-card flex flex-col h-full hover:-translate-y-2 transition-all duration-500 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      <div className={`relative overflow-hidden bg-black/40 ${project.featured ? 'h-96' : 'h-64'}`}>
        <div
          onClick={() => onOpen(project, currentImg)}
          className="cursor-zoom-in w-full h-full transition-transform duration-500 ease-out"
        >
          <img
            src={project.images[currentImg]}
            alt={project.title}
            className="w-full h-full object-contain"
            onError={(e) =>
            (e.currentTarget.src =
              'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop')
            }
          />
        </div>

        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
          <i className="fas fa-search-plus text-sm"></i>
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
          <button
            onClick={prevImg}
            className="pointer-events-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-dark-bg/80 border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all active:scale-90"
          >
            <i className="fas fa-chevron-left text-xs"></i>
          </button>

          <button
            onClick={nextImg}
            className="pointer-events-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-dark-bg/80 border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all active:scale-90"
          >
            <i className="fas fa-chevron-right text-xs"></i>
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImg(i);
              }}
              className={`pointer-events-auto h-1 rounded-full transition-all duration-300 ${i === currentImg ? 'bg-primary w-6' : 'bg-white/20 w-1.5'
                }`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-3 mb-3">
          <h4 className="text-2xl font-black text-white tracking-tight group-hover:vivid-gradient transition-all">
            {project.title}
          </h4>

          {project.featured && (
            <span className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
              Destacado ⭐
            </span>
          )}
        </div>

        <p className="text-white/40 text-xs mb-8 leading-relaxed font-medium flex-grow whitespace-pre-line">
          {project.description}
        </p>

        <div className="mb-8">
          <p className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-4">Habilidades Aprendidas</p>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-1 group/skill">
                <div className="w-10 h-10 glass-card p-2.5 bg-white/[0.02] border-white/5 group-hover/skill:bg-primary/20 transition-all">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain transition-all duration-300 group-hover/skill:scale-175 group-hover/skill:drop-shadow-lg"
                  />
                </div>
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-tighter group-hover/skill:text-white/60 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="py-3 bg-white/5 rounded-xl text-center text-[10px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5"
            >
              Ver en GitHub <i className="fab fa-github ml-1"></i>
            </a>
          )}
          {project.preview && (
            <a
              href={project.preview}
              target="_blank"
              rel="noreferrer"
              className="py-3 bg-primary/20 rounded-xl text-center text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-primary/30 transition-all border border-primary/20"
            >
              Vista Previa <i className="fas fa-external-link-alt ml-1"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const normalProjects = PROJECTS.filter((p) => !p.featured);

  const [lightbox, setLightbox] = useState({
    open: false,
    project: null,
    imgIndex: 0
  })

  const openLightbox = (project, imgIndex = 0) => {
    setLightbox({ open: true, project, imgIndex });
  }

  const closeLightbox = () => {
    setLightbox({ open: false, project: null, imgIndex: 0 });
  }

  const nextLightbox = () => {
    setLightbox((s) => ({
      ...s,
      imgIndex: (s.imgIndex + 1) % s.project.images.length
    }))
  }

  const prevLightbox = () => {
    setLightbox((s) => ({
      ...s,
      imgIndex: (s.imgIndex - 1 + s.project.images.length) % s.project.images.length
    }))
  }

  useEffect(() => {
    if (!lightbox.open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [lightbox.open])

  return (
    <section id="proyectos" className="py-16 md:py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20 text-center" data-aos="fade-right">
          <p className="text-secondary font-bold uppercase tracking-[0.5em] text-[10px] mb-4"></p>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            <span className="vivid-gradient">Proyectos</span>
          </h2>
        </div>

        {featuredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" data-aos="fade-up">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={`featured-${idx}`}
                project={project}
                index={idx}
                onOpen={openLightbox}
              />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32" data-aos="fade-up">
          {normalProjects.map((project, idx) => (
            <ProjectCard key={`normal-${idx}`} project={project} index={idx} onOpen={openLightbox} />
          ))}
        </div>
      </div>

      {lightbox.open && lightbox.project && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center animate-fadeIn"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full flex items-center justify-center px-6">
            <img
              src={lightbox.project.images[lightbox.imgIndex]}
              alt={lightbox.project.title}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition"
            >
              ✕
            </button>

            {lightbox.project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevLightbox();
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-2xl transition"
                >
                  ‹
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextLightbox();
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-2xl transition"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects;