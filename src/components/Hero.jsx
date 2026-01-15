
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Developer Jr. FullStack Software";
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentLength = displayText.length;
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, currentLength + 1));
        if (currentLength + 1 === fullText.length) {
          setSpeed(3000); // Pausa al final
          setIsDeleting(true);
        } else setSpeed(100);
      } else {
        setDisplayText(fullText.substring(0, currentLength - 1));
        setSpeed(50);
        if (currentLength === 0) {
          setIsDeleting(false);
          setSpeed(500);
        }
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, speed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-accent/10 blur-[150px] rounded-full animate-float"></div>

      <div className="container mx-auto px-6 z-10 text-center flex flex-col items-center">
        <div className="mb-8 p-1 bg-gradient-to-tr from-primary to-secondary rounded-3xl animate-float">
          <img 
            src="/assets/images/LogoPersonal.png" 
            alt="Ian Alfaro" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain bg-dark-bg rounded-[1.4rem]"
            onError={(e) => { e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'; }}
          />
        </div>

        <p className="text-primary font-bold tracking-[0.6em] uppercase mb-4 text-[10px] md:text-xs animate-fade-in" data-aos="fade-right">
          Hola soy
        </p>
        
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-6" data-aos="zoom-in">
          Ian <span className="vivid-gradient">Alfaro</span>
        </h1>
        
        <div className="h-10 md:h-16 flex justify-center items-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-lg md:text-4xl font-medium text-white/40 tracking-tight typing-effect">
            {displayText}
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="https://drive.google.com/file/d/1gXomyC_jB4alhmqFQJutw5yi0ANYgGQN/view?usp=drive_link" 
            target="_blank"
            className="btn-luxury btn-primary-luxury"
          >
            Mi Curriculum <i className="fas fa-arrow-right text-xs"></i>
          </a>
          <a 
            href="https://drive.google.com/file/d/1gXomyC_jB4alhmqFQJutw5yi0ANYgGQN/view?usp=drive_link" 
            target="_blank"
            className="btn-luxury bg-white/5 border border-white/10 text-white hover:bg-white/10"
          >
            Mi Curriculum
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/50"></span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;