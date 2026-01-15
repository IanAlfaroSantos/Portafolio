import React from 'react';

const Quote = () => {
  return (
    <section id="frase-motivadora" className="py-28 bg-dark-bg relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] bg-secondary/10 blur-[140px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-16">
          <p className="text-accent font-bold uppercase tracking-[0.35em] text-[10px] mb-6" data-aos="fade-right">
            Frase que me motiva a seguir
          </p>
          <blockquote className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight" data-aos="fade-up">
            “El éxito es la suma de pequeños esfuerzos repetidos día tras día.”
          </blockquote>
          <p className="text-white/50 mt-6 font-bold tracking-widest uppercase text-[10px]" data-aos="fade-up">
            Robert Collier
          </p>

          <div className="mt-10 flex items-center justify-center gap-3" data-aos="zoom-in">
            <span className="w-10 h-[2px] bg-primary/60 rounded-full"></span>
            <span className="w-24 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></span>
            <span className="w-10 h-[2px] bg-accent/60 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
