import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon, FacebookIcon, InstagramIcon, WhatsappIcon } from './BrandIcons';

const FooterSocialLink = ({ social }) => {
  const [imgFailed, setImgFailed] = useState(false);

  const getFallbackIcon = () => {
    switch (social.alt) {
      case 'LinkedIn':
        return <LinkedinIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'GitHub':
        return <GithubIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'Gmail':
        return <Mail className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'Whatsapp':
        return <WhatsappIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'Facebook':
        return <FacebookIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      case 'Instagram':
        return <InstagramIcon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
      default:
        return <Mail className="w-5 h-5 text-white group-hover:text-primary transition-colors" />;
    }
  };

  return (
    <a 
      href={social.href} 
      target="_blank" 
      rel="noreferrer"
      className="w-8 h-8 glass-panel flex items-center justify-center p-2 hover:scale-105 hover:-translate-y-0.5 hover:border-primary/40 transition-all duration-300 group"
      title={social.alt}
    >
      {!imgFailed ? (
        <img 
          src={social.icon} 
          alt={social.alt} 
          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300"
          onError={() => setImgFailed(true)}
        />
      ) : (
        getFallbackIcon()
      )}
    </a>
  );
};

const Footer = () => {
  const socials = [
    { href: 'https://www.linkedin.com/in/ian-alfaro-48b68334b/', icon: '/assets/images/icon-linkedin.png', alt: 'LinkedIn' },
    { href: 'https://github.com/IanAlfaroSantos', icon: '/assets/images/icon-github.png', alt: 'GitHub' },
    { href: 'mailto:ialfasa2020@gmail.com', icon: '/assets/images/icon-emailWhite.png', alt: 'Gmail' },
    { href: 'https://wa.me/33662977', icon: '/assets/images/icon-whatsapp.png', alt: 'Whatsapp' },
    { href: 'https://www.facebook.com/ian.alfaro.7547/', icon: '/assets/images/icon-facebook.png', alt: 'Facebook' },
    { href: 'https://www.instagram.com/ian_alfaro_8273/', icon: '/assets/images/icon-instagram.png', alt: 'Instagram' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-dark-bg border-t border-white/[0.04] relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center flex-wrap gap-2.5 mb-4">
          {socials.map((s) => (
            <FooterSocialLink key={s.href} social={s} />
          ))}
        </div>

        <div className="text-[8px] font-mono font-bold uppercase tracking-widest text-white/30">
          <span>© {currentYear} Ian Alfaro | ALL_RIGHTS_RESERVED</span>
        </div>
      </div>

      {/* Divisor Luminoso */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_8px_rgba(0,240,255,0.2)]"></div>
    </footer>
  );
};

export default Footer;
