import React from 'react';

const Quote = () => {
  return (
    <section id="frase-motivadora" className="py-12 md:py-16 bg-transparent relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="max-w-xl mx-auto text-center glass-card p-6 md:p-8 relative overflow-hidden group hover:border-secondary/30 transition-all duration-500">
          
          {/* Comillas flotantes traslúcidas */}
          <div className="absolute -left-2 -top-6 text-[80px] font-black text-white/[0.01] select-none pointer-events-none font-display">
            “
          </div>
          <div className="absolute -right-2 -bottom-16 text-[80px] font-black text-white/[0.01] select-none pointer-events-none font-display">
            ”
          </div>

          <p className="text-accent font-mono font-bold uppercase tracking-[0.3em] text-[7px] mb-3 block" data-aos="fade-right">
            Frase de Inspiración
          </p>

          <blockquote className="text-base md:text-lg font-extrabold text-white leading-snug tracking-tight font-display" data-aos="fade-up">
            “El éxito es la suma de pequeños esfuerzos repetidos día tras día.”
          </blockquote>

          <p className="text-white/40 mt-4 font-mono font-bold tracking-widest uppercase text-[8px] block" data-aos="fade-up">
            — Robert Collier
          </p>

          <div className="mt-5 flex items-center justify-center gap-2" data-aos="zoom-in">
            <span className="w-6 h-[1px] bg-primary/20 rounded-full"></span>
            <span className="w-12 h-[1px] bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-[0_0_8px_rgba(0,240,255,0.3)]"></span>
            <span className="w-6 h-[1px] bg-accent/20 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
