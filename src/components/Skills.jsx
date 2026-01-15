
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants';

const SkillItem = ({ skill, isVisible, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (isVisible) {
      let start = 0;
      const end = skill.percent;
      const duration = 4000; 
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
      setCount(0); // Reset instantáneo al salir de vista
    }
    return () => clearInterval(timer);
  }, [isVisible, skill.percent]);

  return (
    <div 
      className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
      data-aos="fade-up"
      data-aos-delay={index * 60}
    >
      <div className="glass-card p-8 group-hover:bg-white/[0.05]">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center p-3 group-hover:bg-primary/20 transition-colors">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain filter brightness-100 group-hover:scale-110 transition-transform" 
                  onError={(e) => (e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/606/606204.png')}
                />
             </div>
             <div>
                <h4 className="text-white font-bold text-lg mb-1">{skill.name}</h4>
                <div className="text-[10px] flex gap-0.5">
                   {Array.from({ length: 5 }).map((_, i) => (
                     <span key={i} className={`${i < skill.stars ? 'text-yellow-400' : 'text-white/10'}`}>⭐</span>
                   ))}
                </div>
             </div>
          </div>
          <span className="text-sm font-black text-primary bg-primary/10 px-3 py-1 rounded-lg tabular-nums">
            {count}%
          </span>
        </div>
        
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all ease-linear shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            style={{ 
              width: isVisible ? `${skill.percent}%` : '0%',
              transitionDuration: isVisible ? '4000ms' : '0ms' 
            }}
          >
            {/* Shimmer Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_2s_infinite]"></div>
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
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="habilidades" ref={sectionRef} className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8" data-aos="fade-right">
          <div>
            <p className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4"></p>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
              <span className="vivid-gradient">Habilidades</span>
            </h2>
          </div>
          <p className="text-white/20 font-bold uppercase tracking-widest text-[10px] hidden md:block"></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} isVisible={isVisible} index={index} />
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