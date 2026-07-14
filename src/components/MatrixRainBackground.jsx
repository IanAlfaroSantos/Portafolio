import React, { useEffect, useRef } from 'react';

const MatrixRainBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const alphabet = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ01アカサタナ';
    const fontSize = isMobile ? 12 : 14;

    // Móvil: columnas más separadas (menos densidad = menos carga GPU)
    const columnSpacing = isMobile ? 60 : 50;
    const columns = Math.ceil(width / columnSpacing);

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = Math.random() * -120;
    }

    const colors = [
      'rgba(0, 255, 65, 0.38)',
      'rgba(0, 255, 65, 0.22)',
      'rgba(0, 200, 50, 0.14)',
    ];

    let lastTime = 0;
    // Móvil: 12fps (muy liviano), Desktop: 24fps
    const fps = isMobile ? 12 : 24;
    const fpsInterval = 1000 / fps;

    // Móvil: trail más rápido (fade más agresivo = menos transparencia acumulada)
    const fadeAlpha = isMobile ? 0.12 : 0.055;
    // Móvil: drops más lentos = menos redibujado
    const dropSpeed = isMobile ? 0.5 : 0.85;

    const draw = (timestamp) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = timestamp - (elapsed % fpsInterval);

      ctx.fillStyle = `rgba(2, 3, 6, ${fadeAlpha})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const xPos = i * columnSpacing + (columnSpacing / 2);
        const yPos = rainDrops[i] * fontSize;

        ctx.fillStyle = colors[i % colors.length];
        ctx.fillText(text, xPos, yPos);

        if (yPos > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        rainDrops[i] += dropSpeed + Math.random() * 0.3;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixRainBackground;
