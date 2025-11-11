import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameRound } from '../types';
import SentenceDisplay from './SentenceDisplay';
import Scoreboard from './Scoreboard';
import FeedbackModal from './FeedbackModal';
import Attribution from './Attribution';
import { LogoutIcon, WarningIcon } from './icons';

interface GameScreenProps {
  level: number;
  sentences: GameRound[];
  score: number;
  lives: number;
  onLevelComplete: () => void;
  onCorrectAnswer: () => void;
  onIncorrectAnswer: () => void;
  onQuit: () => void;
}

interface QuitConfirmModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const QuitConfirmModal: React.FC<QuitConfirmModalProps> = ({ onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl border bg-slate-800/90 border-yellow-500/50 animate-fade-in-up">
                <div className="flex flex-col items-center text-center">
                    <WarningIcon className="w-16 h-16 mb-4 text-yellow-400" />
                    <h2 className="text-3xl font-bold text-white">
                        ¿Salir del juego?
                    </h2>
                    <p className="mt-4 text-slate-300">
                        Perderás el progreso y tendrás que empezar de nuevo. Tu puntuación no se guardará.
                    </p>
                    <div className="mt-8 w-full flex gap-4">
                         <button 
                            onClick={onCancel}
                            className="w-full px-6 py-3 bg-slate-600 text-white font-bold text-lg rounded-lg hover:bg-slate-500 transition-all duration-300"
                        >
                            Cancelar
                        </button>
                        <button 
                            onClick={onConfirm}
                            className="w-full px-6 py-3 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-500 transition-all duration-300"
                        >
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GameScreen: React.FC<GameScreenProps> = ({ level, sentences, score, lives, onLevelComplete, onCorrectAnswer, onIncorrectAnswer, onQuit }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [tries, setTries] = useState(3);

  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
  }, []);

  useEffect(() => {
    setTries(3);
  }, [currentSentenceIndex]);

  const playSound = (type: 'correct' | 'incorrect') => {
    const audioContext = audioContextRef.current;
    if (!audioContext || audioContext.state === 'suspended') {
      audioContext?.resume();
    }
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);

    if (type === 'correct') {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(783.99, audioContext.currentTime + 0.2);
    } else {
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(100, audioContext.currentTime + 0.2);
    }

    oscillator.start(audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const handleCorrectAnswer = useCallback(() => {
    playSound('correct');
    onCorrectAnswer();
    setFeedback({ correct: true, explanation: sentences[currentSentenceIndex].explanation });
  }, [onCorrectAnswer, sentences, currentSentenceIndex]);

  const handleAttemptFailed = useCallback(() => {
    if (feedback || tries <= 0) return;
    
    playSound('incorrect');
    
    const newTries = tries - 1;
    setTries(newTries);

    if (newTries <= 0) {
      onIncorrectAnswer();
      setFeedback({ correct: false, explanation: sentences[currentSentenceIndex].explanation });
    }
  }, [feedback, tries, onIncorrectAnswer, sentences, currentSentenceIndex]);

  const nextSentence = useCallback(() => {
    setFeedback(null);
    if (lives <= 0) {
      return;
    }
    
    const nextIndex = currentSentenceIndex + 1;
    if (nextIndex >= sentences.length) {
      onLevelComplete();
    } else {
      setCurrentSentenceIndex(nextIndex);
    }
  }, [lives, currentSentenceIndex, sentences.length, onLevelComplete]);

  const currentSentence = sentences[currentSentenceIndex];
  const showHint = tries === 1 && !feedback;

  if (!currentSentence) {
    return (
      <div className="text-center text-slate-300 text-2xl font-semibold">
        Cargando...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full animate-fade-in">
      <div className="flex items-center gap-4 w-full">
        <Scoreboard 
            score={score} 
            lives={lives} 
            level={level}
            currentSentence={currentSentenceIndex + 1}
            totalSentences={sentences.length}
            tries={tries}
        />
        <button
            onClick={() => setShowQuitConfirm(true)}
            className="p-3 bg-slate-700 text-slate-300 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Salir del juego"
            title="Salir del juego"
        >
            <LogoutIcon className="w-6 h-6" />
        </button>
      </div>
      
      <div className="w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-sky-500/10">
        <SentenceDisplay
          key={currentSentenceIndex}
          sentence={currentSentence.sentence}
          wordsToAccent={currentSentence.wordsToAccent}
          onCorrect={handleCorrectAnswer}
          onAttemptFailed={handleAttemptFailed}
          showHint={showHint}
        />
      </div>

      <Attribution className="mt-4" />

      {feedback && (
        <FeedbackModal
          isCorrect={feedback.correct}
          explanation={feedback.explanation}
          correctWords={currentSentence.wordsToAccent.map(w => w.withAccent)}
          onNext={nextSentence}
        />
      )}

      {showQuitConfirm && (
        <QuitConfirmModal
          onConfirm={onQuit}
          onCancel={() => setShowQuitConfirm(false)}
        />
      )}

       <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
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

export default GameScreen;