import React from 'react';

const Footer = () => {
  const socials = [
    { href: 'https://www.linkedin.com/in/ian-alfaro-48b68334b/', icon: '/assets/images/icon-linkedin.png', alt: 'LinkedIn' },
    { href: 'https://github.com/IanAlfaroSantos', icon: '/assets/images/icon-github.png', alt: 'GitHub' },
    { href: 'mailto:ialfasa2020@gmail.com', icon: '/assets/images/icon-emailWhite.png', alt: 'Gmail' },
    { href: 'https://wa.me/33662977', icon: '/assets/images/icon-whatsapp.png', alt: 'Whatsapp' },
    { href: 'https://www.facebook.com/ian.alfaro.7547/', icon: '/assets/images/icon-facebook.png', alt: 'Whatsapp' },
    { href: 'https://www.instagram.com/ian_alfaro_8273/', icon: '/assets/images/icon-instagram.png', alt: 'Instagram' },
  ];

  return (
    <footer className="py-16 bg-dark-bg border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center flex-wrap gap-6 mb-10">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" className="w-12 h-12 glass-card flex items-center justify-center p-3 hover:scale-110 hover:-translate-y-1 transition-all">
              <img src={s.icon} alt={s.alt} className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100" />
            </a>
          ))}
        </div>

        <div className="text-[12px] text-white/40">
          <span> © 2025 Ian Alfaro | Todos los derechos Reservados</span>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
