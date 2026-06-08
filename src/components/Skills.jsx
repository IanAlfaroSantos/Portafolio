import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants';

const SkillItem = ({ skill, isVisible, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (isVisible) {
      let start = 0;
      const end = skill.percent;
      const duration = 1500;
      const fps = 60;
      const increment = end / (duration / 1000 * fps);

      timer = window.setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / fps);
    } else {
      setCount(0);
    }
    return () => clearInterval(timer);
  }, [isVisible, skill.percent]);

  return (
    <div
      className="group/skill flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-bg/40 border border-white/[0.03] hover:bg-dark-bg/80 hover:border-primary/25 transition-all duration-300 relative"
      style={{ transitionDelay: `${index * 20}ms` }}
    >
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/5 group-hover/skill:border-primary/45"></div>
      <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white/5 group-hover/skill:border-primary/45"></div>
      <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white/5 group-hover/skill:border-primary/45"></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/5 group-hover/skill:border-primary/45"></div>

      <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center p-2 group-hover/skill:bg-primary/10 transition-colors shrink-0">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-full h-full object-contain group-hover/skill:scale-105 transition-transform duration-300"
          onError={(e) => (e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/606/606204.png')}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-white font-mono font-bold text-xs truncate group-hover/skill:text-primary transition-colors duration-300">
            {skill.name}
          </span>
          <span className="text-[9px] font-mono font-extrabold text-primary bg-primary/5 px-1.5 py-0.5 rounded border border-primary/10 tabular-nums">
            {count}%
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Progress bar */}
          <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all ease-linear"
              style={{
                width: isVisible ? `${skill.percent}%` : '0%',
                transitionDuration: isVisible ? '1500ms' : '0ms'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 animate-[shimmer_2.5s_infinite_linear]"></div>
            </div>
          </div>
          
          {/* Stars */}
          <div className="text-[7px] flex gap-0.5 shrink-0 opacity-40 group-hover/skill:opacity-80 transition-opacity">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`${i < skill.stars ? 'text-yellow-400' : 'text-white/10'}`}>★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.02 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Categorizar habilidades usando los nombres del array
  const frontendSkills = SKILLS.filter(s => ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Material UI', 'Bootstrap', 'JavaFX'].includes(s.name));
  const backendSkills = SKILLS.filter(s => ['NodeJS', 'Java'].includes(s.name));
  const databaseSkills = SKILLS.filter(s => ['MySQL', 'MongoDB'].includes(s.name));
  const toolSkills = SKILLS.filter(s => ['Axios', 'JWT', 'GitHub', 'Postman'].includes(s.name));

  const categories = [
    { title: 'Desarrollo Frontend', skills: frontendSkills, accent: 'bg-primary shadow-[0_0_8px_#00f0ff]', border: 'hover:border-primary/20', glow: 'hover:shadow-[0_0_25px_rgba(0,240,255,0.06)]', borderGlow: 'border-primary' },
    { title: 'Desarrollo Backend', skills: backendSkills, accent: 'bg-secondary shadow-[0_0_8px_#8b7cf6]', border: 'hover:border-secondary/20', glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.06)]', borderGlow: 'border-secondary' },
    { title: 'Bases de Datos', skills: databaseSkills, accent: 'bg-accent shadow-[0_0_8px_#ff007a]', border: 'hover:border-accent/20', glow: 'hover:shadow-[0_0_25px_rgba(255,0,122,0.06)]', borderGlow: 'border-accent' },
    { title: 'Herramientas y APIs', skills: toolSkills, accent: 'bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.2)]', border: 'hover:border-white/10', glow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]', borderGlow: 'border-white/30' }
  ];

  return (
    <section id="habilidades" ref={sectionRef} className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-10" data-aos="fade-right">
          <p className="text-primary font-mono font-bold uppercase tracking-[0.4em] text-[8px] mb-2">// CAPACIDADES.REGISTRO</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tighter leading-none hover:animate-glitch-once cursor-default select-none">
            Habilidades <span className="vivid-gradient">Técnicas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className={`group glass-card p-6 transition-all duration-500 ${cat.border} ${cat.glow} relative`}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              {/* HUD Corner Brackets */}
              <div className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white/5 group-hover:${cat.borderGlow} transition-colors duration-500`}></div>
              <div className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-white/5 group-hover:${cat.borderGlow} transition-colors duration-500`}></div>
              <div className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-white/5 group-hover:${cat.borderGlow} transition-colors duration-500`}></div>
              <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white/5 group-hover:${cat.borderGlow} transition-colors duration-500`}></div>

              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                <span className={`w-1.5 h-1.5 rounded-full ${cat.accent}`}></span>
                <h3 className="text-xs font-mono font-bold text-white tracking-widest uppercase">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    index={sIdx}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;