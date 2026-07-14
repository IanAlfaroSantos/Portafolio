import React from 'react';

// Simplified — sin animación de glitch para mejor rendimiento en móvil
const CyberGlitchSection = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {children}
    </div>
  );
};

export default CyberGlitchSection;
