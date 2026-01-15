
import React from 'react';
import { VALUES } from '../constants';

const Values = () => {
  return (
    <section id="valores" className="py-32 relative overflow-hidden bg-dark-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20" data-aos="fade-right">
          <p className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4"></p>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Mis Valores <span className="vivid-gradient">Profesionales</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          {VALUES.map((value, i) => (
            <div 
              key={value.title} 
              className="group glass-card p-10 hover:bg-white/[0.04] transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl text-accent mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
                {value.title}
              </h4>
              <p className="text-white/40 leading-relaxed text-sm font-medium">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;