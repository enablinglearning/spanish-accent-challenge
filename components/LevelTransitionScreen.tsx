import React from 'react';
import { StarIcon, SparklesIcon } from './icons';
import Attribution from './Attribution';

interface LevelTransitionScreenProps {
  level: number; // The level that was just completed
  score: number;
  onNextLevel: () => void;
}

const LevelTransitionScreen: React.FC<LevelTransitionScreenProps> = ({ level, score, onNextLevel }) => {
  return (
    <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-sky-500/20 animate-fade-in-up">
       <div className="flex justify-center items-center gap-4 mb-4">
        <SparklesIcon className="w-12 h-12 text-yellow-400"/>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            ¡Nivel {level} Completado!
        </h1>
       </div>
      <p className="text-xl text-slate-300 mb-6">¡Buen trabajo! Prepárate para el siguiente nivel.</p>
      <div className="my-8">
        <p className="text-lg text-slate-400">Puntuación Actual</p>
        <div className="flex justify-center items-center gap-4 text-6xl font-bold text-yellow-400 mt-2">
          <StarIcon className="w-16 h-16"/>
          <span>{score}</span>
        </div>
      </div>
      <button
        onClick={onNextLevel}
        className="px-8 py-4 bg-sky-600 text-white font-bold text-xl rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-600/30 mb-6"
      >
        Nivel {level + 1}
      </button>
      <Attribution className="mt-6 pt-6 border-t border-slate-700/50" />
      <style>{`
          @keyframes fade-in-up {
              0% {
                  opacity: 0;
                  transform: translateY(20px);
              }
              100% {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
          .animate-fade-in-up {
              animation: fade-in-up 0.3s ease-out forwards;
          }
      `}</style>
    </div>
  );
};

export default LevelTransitionScreen;
