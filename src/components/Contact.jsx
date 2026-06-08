import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactItem = ({ info }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const IconComponent = info.iconComponent;

  return (
    <div className="flex items-center gap-3.5 glass-panel p-3.5 hover:border-primary/35 transition-all duration-300 group">
      <div className={`w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center p-2 shrink-0 border ${info.accent} transition-transform duration-300 group-hover:scale-105`}>
        {!imgFailed ? (
          <img
            src={info.icon}
            alt={info.alt}
            className="w-full h-full object-contain filter brightness-95"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <IconComponent className="w-4 h-4" />
        )}
      </div>
      <div>
        <span className="text-[7px] font-black uppercase text-white/30 tracking-widest block mb-0.5">{info.label}</span>
        <p className="text-white font-mono font-bold text-[10px] sm:text-xs break-all leading-tight">{info.value}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('enviando');

    try {
      const response = await fetch('https://formspree.io/f/mrblebyq', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        setStatus('exito');
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: '/assets/images/icon-telefono.jpg', alt: 'Teléfono', value: '+502 3366 2977', label: 'Llámanos o escríbenos', iconComponent: Phone, accent: 'text-primary bg-primary/10 border-primary/20 shadow-[0_0_15px_rgba(0,240,255,0.15)]' },
    { icon: '/assets/images/icon-email.png', alt: 'Correo', value: 'ialfasa2020@gmail.com', label: 'Envíanos un correo', iconComponent: Mail, accent: 'text-secondary bg-secondary/10 border-secondary/20 shadow-[0_0_15px_rgba(139,92,246,0.15)]' },
    { icon: '/assets/images/icon-map.png', alt: 'Ubicación', value: 'Guatemala', label: 'Ubicación actual', iconComponent: MapPin, accent: 'text-accent bg-accent/10 border-accent/20 shadow-[0_0_15px_rgba(255,0,122,0.15)]' },
  ];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:w-5/12 flex flex-col justify-between" data-aos="fade-right">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span className="text-primary font-mono font-bold uppercase tracking-widest text-[8px]">Ponte en contacto</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4 tracking-tighter leading-none hover:animate-glitch-once cursor-default select-none">
                Contacto <span className="vivid-gradient">Directo</span>
              </h3>
              <p className="text-white/40 text-[10px] md:text-xs leading-relaxed mb-6 max-w-sm">
                ¿Tienes algún proyecto en mente o te gustaría colaborar? Escríbeme y estaré respondiendo a la brevedad posible.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info) => (
                <ContactItem key={info.value} info={info} />
              ))}
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:w-7/12" data-aos="fade-up">
            <div className="glass-card p-5 md:p-6 h-full flex flex-col justify-center border-white/[0.04]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[8px] font-mono font-bold uppercase tracking-wider text-white/40 pl-1">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-dark-bg/40 border border-white/[0.06] rounded-xl p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-white placeholder:text-white/20 text-xs font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] font-mono font-bold uppercase tracking-wider text-white/40 pl-1">Email</label>
                    <input
                      type="email"
                      name="correo"
                      required
                      placeholder="Ej. juan@correo.com"
                      className="w-full bg-dark-bg/40 border border-white/[0.06] rounded-xl p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-white placeholder:text-white/20 text-xs font-mono"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[8px] font-mono font-bold uppercase tracking-wider text-white/40 pl-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full bg-dark-bg/40 border border-white/[0.06] rounded-xl p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-white resize-none placeholder:text-white/20 text-xs font-mono"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'enviando'}
                  className="w-full py-2.5 bg-gradient-primary text-dark-bg rounded-xl font-mono font-extrabold text-[9px] uppercase tracking-widest hover:scale-[1.01] active:scale-95 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50 transition-all flex items-center justify-center gap-2 border border-primary/20 group cursor-pointer"
                >
                  {status === 'enviando' ? (
                    <>Enviando Mensaje...</>
                  ) : (
                    <>
                      Enviar Mensaje{' '}
                      <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-dark-bg" />
                    </>
                  )}
                </button>

                {/* Mensajes de feedback */}
                {status === 'exito' && (
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-[9px] font-mono font-bold text-center animate-fade-in">
                    ✓ ¡Mensaje enviado con éxito! Te responderé pronto.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-[9px] font-mono font-bold text-center animate-fade-in">
                    ✕ Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
