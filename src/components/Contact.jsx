import React from 'react';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mrblebyq', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
      }
    } catch {
      // Sin UI adicional (para mantener el contenido alineado al index.html)
    }
  };

  const contactInfo = [
    { icon: '/assets/images/icon-telefono.jpg', alt: 'Teléfono', value: '+502 3366 2977', placeholderIcon: 'fa-phone' },
    { icon: '/assets/images/icon-email.png', alt: 'Correo', value: 'ialfasa2020@gmail.com', placeholderIcon: 'fa-envelope' },
    { icon: '/assets/images/icon-map.png', alt: 'Ubicación', value: 'Guatemala', placeholderIcon: 'fa-map-marker-alt' },
  ];

  return (
    <section id="contacto" className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3" data-aos="fade-right">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4"></p>
            <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">Contacto</h3>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed"></p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.value}
                  className="flex items-center gap-6 glass p-7 rounded-[2.5rem] group hover:border-primary/40 transition-all shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform bg-[#111] border border-white/5 flex items-center justify-center p-2">
                    <img
                      src={info.icon}
                      alt={info.alt}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const icon = document.createElement('i');
                          icon.className = `fas ${info.placeholderIcon} text-primary text-2xl`;
                          parent.appendChild(icon);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3" data-aos="fade-up">
            <div className="glass p-10 md:p-16 rounded-[4rem] shadow-3xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-primary"></div>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre completo"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-3">
                    <input
                      type="email"
                      name="correo"
                      placeholder="Correo electrónico"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <textarea
                    name="mensaje"
                    rows={5}
                    placeholder="Escribe tu mensaje..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-white resize-none placeholder:text-gray-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-gradient-primary text-white rounded-[1.5rem] font-black text-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group"
                >
                  Enviar <i className="fas fa-paper-plane text-sm group-hover:translate-x-2 transition-transform"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
