
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  };
  
  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="group glass-card flex flex-col h-full hover:-translate-y-2 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay={index * 80}>
      {/* Visual Carousel */}
      <div className="relative h-64 overflow-hidden bg-black/40">
        <img 
          src={project.images[currentImg]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
          onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop')}
        />
        
        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prevImg}
            className="w-10 h-10 rounded-full bg-dark-bg/80 border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all active:scale-90"
          >
            <i className="fas fa-chevron-left text-xs"></i>
          </button>
          <button 
            onClick={nextImg}
            className="w-10 h-10 rounded-full bg-dark-bg/80 border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all active:scale-90"
          >
            <i className="fas fa-chevron-right text-xs"></i>
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
           {project.images.map((_, i) => (
             <button 
               key={i} 
               onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
               className={`h-1 rounded-full transition-all duration-300 ${i === currentImg ? 'bg-primary w-6' : 'bg-white/20 w-1.5'}`}
             ></button>
           ))}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h4 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:vivid-gradient transition-all">
          {project.title}
        </h4>
        <p className="text-white/40 text-xs mb-8 leading-relaxed font-medium flex-grow">
          {project.description}
        </p>
        
        {/* Skills Learned Section */}
        <div className="mb-8">
          <p className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-4">Habilidades Aprendidas</p>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-1 group/skill">
                <div className="w-10 h-10 glass-card p-2.5 bg-white/[0.02] border-white/5 group-hover/skill:bg-primary/20 transition-all">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter grayscale group-hover/skill:grayscale-0 transition-all" />
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
              className="py-3 bg-white/5 rounded-xl text-center text-[10px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5"
            >
              Ver en GitHub <i className="fab fa-github ml-1"></i>
            </a>
          )}
          {project.preview && (
            <a 
              href={project.preview} 
              target="_blank" 
              className="py-3 bg-primary/20 rounded-xl text-center text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-primary/30 transition-all border border-primary/20"
            >
              Vista Previa <i className="fas fa-external-link-alt ml-1"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center" data-aos="fade-right">
          <p className="text-secondary font-bold uppercase tracking-[0.5em] text-[10px] mb-4"></p>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none">
            <span className="vivid-gradient">Proyectos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32" data-aos="fade-up">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;