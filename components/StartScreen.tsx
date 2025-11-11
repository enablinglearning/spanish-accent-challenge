import React from 'react';
import { SparklesIcon, AcademicCapIcon, StarIcon } from './icons';
import Attribution from './Attribution';

interface StartScreenProps {
  onStart: () => void;
  onResume: () => void;
  hasSavedGame: boolean;
  highScore: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, onResume, hasSavedGame, highScore }) => {
  return (
    <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-sky-500/20">
      <div className="flex justify-center items-center gap-4 mb-6">
        <SparklesIcon className="w-12 h-12 text-yellow-400" />
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
          Acentúa la Frase
        </h1>
      </div>
      <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto mb-8">
        ¡Pon a prueba tus habilidades con los acentos en español! Lee la frase, encuentra las palabras que necesitan tilde y haz clic en la vocal correcta.
      </p>

      {highScore > 0 && (
        <div className="mb-8">
            <p className="text-sky-400">Puntuación más alta</p>
            <div className="flex justify-center items-center gap-2 text-3xl font-bold text-yellow-400 mt-1">
                <StarIcon className="w-8 h-8"/>
                <span>{highScore}</span>
            </div>
        </div>
      )}

      <div className="bg-slate-900/50 rounded-lg p-6 mb-8 border border-slate-700">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4 flex items-center justify-center gap-2"><AcademicCapIcon className="w-6 h-6"/> Cómo Jugar</h2>
        <ol className="text-left list-decimal list-inside text-slate-400 space-y-2">
          <li>El juego consta de 6 niveles, con 10 frases únicas en cada uno.</li>
          <li>Haz clic en la palabra que crees que debe llevar la tilde.</li>
          <li>Luego, haz clic en la vocal correcta para acentuarla.</li>
          <li>Tienes 3 intentos para resolver cada frase. En tu último intento, la palabra correcta parpadeará como pista.</li>
          <li>Si agotas los 3 intentos, perderás una de tus 3 vidas. ¡Concéntrate para alcanzar la puntuación máxima (600 puntos)!</li>
        </ol>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        {hasSavedGame && (
           <button
            onClick={onResume}
            className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white font-bold text-xl rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/30"
          >
            Continuar Partida
          </button>
        )}
        <button
          onClick={onStart}
          className="w-full sm:w-auto px-8 py-4 bg-sky-600 text-white font-bold text-xl rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-600/30"
        >
          {hasSavedGame ? 'Empezar Nueva Partida' : 'Empezar a Jugar'}
        </button>
      </div>
      <Attribution showBTLPTLink={true} className="mt-8 pt-6 border-t border-slate-700/50" />
    </div>
  );
};

export default StartScreen;