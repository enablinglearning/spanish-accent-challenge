import React from 'react';
import { RefreshIcon, StarIcon } from './icons';
import Attribution from './Attribution';

interface GameOverScreenProps {
  score: number;
  onRestart: () => void;
  won: boolean;
}

const MAX_SCORE = 600;

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRestart, won }) => {

  const getWinMessage = () => {
    if (score === MAX_SCORE) {
      return "¡Dominio total! Has contestado todas las preguntas y alcanzado la puntuación máxima.";
    }
    return "¡Completaste todos los niveles! Juega de nuevo para intentar alcanzar el 'Dominio Total' y la puntuación máxima.";
  };
  
  const titleGradient = won 
    ? "from-green-400 to-cyan-400" 
    : "from-red-500 to-orange-400";
  
  const containerBorder = won 
    ? "border-green-500/30"
    : "border-red-500/20";

  return (
    <div className={`text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border ${containerBorder}`}>
       <h1 className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${titleGradient} mb-4`}>
        {won ? '¡Felicidades!' : '¡Juego Terminado!'}
      </h1>
      {won && (
        <p className="text-lg text-slate-300 mb-2 max-w-lg mx-auto">
            {getWinMessage()}
        </p>
      )}
      <p className="text-xl text-slate-300 mb-6 mt-4">Tu puntuación final es:</p>
      <div className="flex justify-center items-center gap-4 text-6xl font-bold text-yellow-400 my-8">
        <StarIcon className="w-16 h-16"/>
        <span>{score}</span>
      </div>
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-sky-600 text-white font-bold text-xl rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 mx-auto mb-6"
      >
        <RefreshIcon className="w-6 h-6"/>
        Jugar de Nuevo
      </button>
      <Attribution showBTLPTLink={true} className="mt-6 pt-6 border-t border-slate-700/50" />
    </div>
  );
};

export default GameOverScreen;