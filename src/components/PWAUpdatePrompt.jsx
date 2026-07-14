import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

const PWAUpdatePrompt = () => {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // Cada 60 segundos revisa si hay nueva versión
      r && setInterval(() => r.update(), 60 * 1000);
    },
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (needRefresh) {
      setVisible(true);
      // Auto-aplica la actualización después de 3 segundos
      const timer = setTimeout(() => {
        updateServiceWorker(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [needRefresh]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[9998] animate-fade-in">
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-xl border border-primary/30
          bg-dark-bg/90 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.15)]"
      >
        {/* Spinner hacker */}
        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0" />

        <div className="flex flex-col">
          <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-widest">
            // ACTUALIZANDO_APP...
          </span>
          <span className="text-[8px] font-mono text-white/40 tracking-wider">
            Nueva versión disponible • Aplicando en segundos
          </span>
        </div>

        {/* Pulso de estado */}
        <div className="flex gap-0.5 shrink-0">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-3 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PWAUpdatePrompt;
