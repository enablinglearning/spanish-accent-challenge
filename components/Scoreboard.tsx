import React from 'react';
import { HeartIcon, StarIcon } from './icons';

interface ScoreboardProps {
  score: number;
  lives: number;
  level: number;
  currentSentence: number;
  totalSentences: number;
  tries: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, lives, level, currentSentence, totalSentences, tries }) => {
  return (
    <div className="flex items-center justify-between flex-grow w-full bg-slate-900/70 p-3 sm:p-4 rounded-lg border border-slate-700 gap-3 sm:gap-4">
      {/* Left: Score */}
      <div className="flex items-center gap-2 justify-start flex-shrink-0">
        <StarIcon className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400"/>
        <span className="text-xl sm:text-2xl font-bold text-white">{score}</span>
      </div>
      
      {/* Middle: Level Info */}
      <div className="text-center min-w-0">
         <span className="font-bold text-xs sm:text-sm text-sky-500 block">Nivel {level}</span>
         <span className="font-bold text-lg sm:text-xl text-sky-300 block whitespace-nowrap text-ellipsis overflow-hidden">
            Frase {currentSentence} / {totalSentences}
        </span>
      </div>

      {/* Right: Lives & Tries */}
      <div className="flex flex-col items-end flex-shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <HeartIcon key={i} className={`w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 ${i < lives ? 'text-red-500' : 'text-slate-600'}`} />
          ))}
        </div>
        <div className="flex justify-end gap-1.5 mt-1.5 h-2 w-full pr-0.5 sm:pr-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors duration-300 ${i < tries ? 'bg-sky-400' : 'bg-slate-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;