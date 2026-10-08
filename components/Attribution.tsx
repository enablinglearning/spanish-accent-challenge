import React from 'react';

interface AttributionProps {
  showBTLPTLink?: boolean;
  className?: string;
}

const Attribution: React.FC<AttributionProps> = ({ showBTLPTLink = false, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      {showBTLPTLink && (
        <p className="text-sm text-slate-400 mb-3">
          ¿Te preparas para un examen de dominio del español académico, como el BTLPT?{' '}
          <a 
            href="https://www.enablinglearning.com/btlpt/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 underline transition-colors"
          >
            Visita nuestro sitio web
          </a>
        </p>
      )}
      <p className="text-xs text-slate-500">
        Juego creado por{' '}
        <a 
          href="https://www.enablinglearning.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-300 underline transition-colors"
        >
          enablinglearning.com
        </a>
      </p>
    </div>
  );
};

export default Attribution;

