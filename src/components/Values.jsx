import React from 'react';
import { VALUES } from '../constants';
import { Users, ClipboardCheck, ShieldCheck, Zap, RefreshCw, Eye } from 'lucide-react';

const iconMap = {
  'fa-handshake': Users,
  'fa-clipboard-check': ClipboardCheck,
  'fa-clipboard-list': ShieldCheck,
  'fa-dumbbell': Zap,
  'fa-sync-alt': RefreshCw,
  'fa-balance-scale': Eye
};

const Values = () => {
  const getTheme = (index) => {
    const themes = [
      { color: 'text-primary border-primary/15', bg: 'bg-primary/5', glow: 'shadow-[0_0_15px_rgba(0,240,255,0.1)]', hoverGlow: 'hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]', borderHover: 'hover:border-primary/30', textHover: 'group-hover:text-primary', borderGlow: 'border-primary' },
      { color: 'text-secondary border-secondary/15', bg: 'bg-secondary/5', glow: 'shadow-[0_0_15px_rgba(139,92,246,0.1)]', hoverGlow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.08)]', borderHover: 'hover:border-secondary/30', textHover: 'group-hover:text-secondary', borderGlow: 'border-secondary' },
      { color: 'text-accent border-accent/15', bg: 'bg-accent/5', glow: 'shadow-[0_0_15px_rgba(255,0,122,0.1)]', hoverGlow: 'hover:shadow-[0_0_25px_rgba(255,0,122,0.08)]', borderHover: 'hover:border-accent/30', textHover: 'group-hover:text-accent', borderGlow: 'border-accent' }
    ];
    return themes[index % 3];
  };

  return (
    <section id="valores" className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="mb-10" data-aos="fade-right">
          <p className="text-accent font-mono font-bold uppercase tracking-[0.4em] text-[8px] mb-2">// NÚCLEO.PRINCIPIOS</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tighter leading-none hover:animate-glitch-once cursor-default select-none">
            Mis Valores <span className="vivid-gradient">Profesionales</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up">
          {VALUES.map((value, i) => {
            const theme = getTheme(i);
            const IconComponent = iconMap[value.icon] || Users;
            return (
              <div
                key={value.title}
                className={`group glass-card p-6 transition-all duration-500 ${theme.borderHover} ${theme.hoverGlow} relative`}
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                {/* HUD Corner Brackets */}
                <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/5 group-hover:${theme.borderGlow} transition-colors duration-500`}></div>
                <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/5 group-hover:${theme.borderGlow} transition-colors duration-500`}></div>
                <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/5 group-hover:${theme.borderGlow} transition-colors duration-500`}></div>
                <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/5 group-hover:${theme.borderGlow} transition-colors duration-500`}></div>

                <div className={`w-11 h-11 ${theme.bg} border ${theme.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 ${theme.glow}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className={`text-sm sm:text-base font-extrabold font-mono text-white mb-2 tracking-tight transition-colors duration-300 ${theme.textHover}`}>
                  {value.title.toUpperCase()}
                </h4>
                <p className="text-white/40 leading-relaxed text-[10px] font-mono font-medium">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;