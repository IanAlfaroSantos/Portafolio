import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
  return (
    <section id="educacion" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12" data-aos="fade-right">
          <p className="text-secondary font-mono font-bold uppercase tracking-[0.4em] text-[8px] mb-2">// TRAJECTORY.LOGS</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tighter leading-none hover:animate-glitch-once cursor-default select-none">
            Educación y <span className="vivid-gradient">Experiencia</span>
          </h2>
        </div>

        {/* Timeline wrapper */}
        <div className="relative pl-5 sm:pl-8">
          {/* Vertical timeline line */}
          <div className="absolute left-[5px] sm:left-[13px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

          <div className="space-y-5">
            {EXPERIENCE.map((item, i) => (
              <div 
                key={i} 
                className="relative group flex flex-col md:flex-row md:items-start gap-3"
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                {/* Timeline node circle */}
                <div className="absolute left-0 sm:left-[9px] top-3.5 w-3 h-3 rounded-full bg-dark-bg border border-primary flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:border-accent z-10">
                  <div className="w-1 h-1 rounded-full bg-primary group-hover:bg-accent"></div>
                </div>

                {/* Timeline content card */}
                <div 
                  className="flex-1 ml-5 sm:ml-7 glass-card p-4 sm:p-5 bg-white/[0.005] hover:border-secondary/35 hover:shadow-[0_0_20px_rgba(139,92,246,0.06)] transition-all duration-500 relative block"
                >
                  {/* HUD Corner Brackets */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white/5 group-hover:border-secondary/40 transition-colors"></div>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-white/5 group-hover:border-secondary/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-white/5 group-hover:border-secondary/40 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white/5 group-hover:border-secondary/40 transition-colors"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3 w-full">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-dark-bg border border-white/10 p-2 shrink-0 flex items-center justify-center group-hover:scale-105 group-hover:border-primary/30 transition-all duration-300">
                        <img 
                          src={item.icon} 
                          alt="" 
                          className="w-full h-full object-contain" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const p = e.currentTarget.parentElement;
                            if (p) {
                              const icon = document.createElement('div');
                              icon.className = 'text-primary text-[8px] font-mono font-bold';
                              icon.innerText = item.company ? item.company.substring(0, 2).toUpperCase() : 'ED';
                              p.appendChild(icon);
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                          <span className="text-[8px] font-mono font-bold text-primary bg-primary/5 border border-primary/15 px-2 py-0.5 rounded tracking-wider uppercase inline-block shadow-sm">
                            [LOG_{item.year}]
                          </span>
                        </div>
                        <h4 className="text-sm md:text-base font-extrabold font-mono text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                          {item.title.toUpperCase()}
                        </h4>
                        <p className="text-white/40 text-[10px] sm:text-xs mt-1 font-mono font-medium">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;