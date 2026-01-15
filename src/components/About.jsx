
import React from 'react';

const About = () => {
  const socialIcons = [
    { href: "https://www.linkedin.com/in/ian-alfaro-48b68334b/", img: "/assets/images/icon-linkedin.png", alt: "LinkedIn" },
    { href: "https://github.com/IanAlfaroSantos", img: "/assets/images/icon-github.png", alt: "GitHub" },
    { href: "mailto:ialfasa2020@gmail.com", img: "/assets/images/icon-emailWhite.png", alt: "Gmail" },
    { href: "https://wa.me/33662977", img: "/assets/images/icon-whatsapp.png", alt: "Whatsapp" },
    { href: "https://www.facebook.com/ian.alfaro.7547/", img: "/assets/images/icon-facebook.png", alt: "Facebook" },
    { href: "https://www.instagram.com/ian_alfaro_8273/", img: "/assets/images/icon-instagram.png", alt: "Instagram" },
  ];

  return (
    <section id="sobreMi" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative" data-aos="fade-right">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-[3rem]"></div>
            <div className="relative glass-card p-3 rounded-[3rem]">
              <img 
                src="/assets/images/Sobre_mi1.jpeg" 
                alt="Ian Alfaro" 
                className="w-full h-auto rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop')}
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 glass-card p-8 bg-dark-bg/80 border-primary/30">
              <span className="block text-4xl font-black vivid-gradient leading-none">Jr.</span>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2 block">FullStack Software</span>
            </div>
          </div>

          <div className="lg:col-span-7" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary rounded-full"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-xs"></span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-tight">
              Sobre <span className="vivid-gradient">mi</span>
            </h2>
            
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl">
              Soy Desarrollador <span className="font-semibold text-white">Developer Jr.</span>{' '}
              <span className="font-semibold text-white">"FullStack Software"</span> con una{' '}
              <span className="font-semibold text-white">gran pasión</span> por la tecnología y la programación.
              <br /><br />
              Mi objetivo es adquirir experiencia en el campo de la informática,{' '}
              <span className="font-semibold text-white">aprender continuamente</span> y seguir desarrollando mis habilidades técnicas y profesionales.
              <br /><br />
              Me considero una persona <span className="font-semibold text-white">"amistosa"</span> y{' '}
              <span className="font-semibold text-white">"activa"</span>, con una excelente capacidad para{' '}
              <span className="font-semibold text-white">trabajar bajo presión</span>.
              <br /><br />
              Disfruto del <span className="font-semibold text-white">trabajo organizado y estructurado</span>, lo que me permite ser eficiente en la{' '}
              <span className="font-semibold text-white">resolución de problemas</span>.
              <br /><br />
              Además, sé cuándo y cómo pedir ayuda cuando lo necesito, lo que me permite seguir aprendiendo y mejorando.
              <br /><br />
              Me entusiasma aprender de los demás y aplicar ese conocimiento en{' '}
              <span className="font-semibold text-white">proyectos colaborativos</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="glass-card p-8 bg-white/[0.01]">
                <h4 className="text-primary font-bold mb-4 uppercase text-[10px] tracking-widest">Datos Generales</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-white/30 font-bold uppercase text-[9px]">Nombre:</span>
                    <span className="text-white font-medium">Ian Karel Alfaro Santos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/30 font-bold uppercase text-[9px]">Ubicación:</span>
                    <span className="text-white font-medium">Guatemala</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/30 font-bold uppercase text-[9px]">Estado:</span>
                    <span className="text-white font-medium">Graduado de Périto en Informática</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <h4 className="text-secondary font-bold uppercase text-[10px] tracking-widest"></h4>
                <div className="flex flex-wrap gap-4">
                  {socialIcons.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      target="_blank" 
                      className="w-12 h-12 glass-card flex items-center justify-center p-3 hover:scale-110 hover:-translate-y-1 transition-all"
                    >
                      <img src={social.img} alt={social.alt} className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;