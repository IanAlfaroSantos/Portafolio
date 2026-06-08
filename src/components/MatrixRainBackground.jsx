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

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const alphabet = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ01アカサタナ';
    const fontSize = 14;
    
    // More columns for a denser rain — 50px apart on desktop, 38px on mobile
    const isMobile = window.innerWidth < 768;
    const columnSpacing = isMobile ? 38 : 50;
    const columns = Math.ceil(width / columnSpacing);

    // Initialize drops randomly staggered across screen
    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = Math.random() * -120;
    }

    // Classic Matrix green neon — boosted brightness
    const colors = [
      'rgba(0, 255, 65, 0.38)',  // bright green head
      'rgba(0, 255, 65, 0.22)',  // mid green
      'rgba(0, 200, 50, 0.14)',  // dimmer green tail
    ];

    let lastTime = 0;
    const fps = isMobile ? 18 : 24; // Slightly lower on mobile to save battery
    const fpsInterval = 1000 / fps;

    const draw = (timestamp) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = timestamp - (elapsed % fpsInterval);

      // Fade out frame — very low alpha = long bright trails
      ctx.fillStyle = 'rgba(2, 3, 6, 0.055)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        const xPos = i * columnSpacing + (columnSpacing / 2);
        const yPos = rainDrops[i] * fontSize;

        ctx.fillStyle = colors[i % colors.length];
        ctx.fillText(text, xPos, yPos);

        // Reset drop to top if it leaves screen or randomly
        if (yPos > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        // Drop speed: slightly faster for more energy
        rainDrops[i] += 0.85 + Math.random() * 0.5;
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
