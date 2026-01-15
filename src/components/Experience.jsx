
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
  return (
    <section id="educacion" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="mb-16" data-aos="fade-right">
          <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2"></p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Educación y <span className="text-gradient-vivid">Experiencia</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE.map((item, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl hover:border-primary/30 transition-all group" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest px-2 py-1 bg-primary/10 rounded-md">
                  {item.year}
                </span>
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/5 p-1.5">
                  <img src={item.icon} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;