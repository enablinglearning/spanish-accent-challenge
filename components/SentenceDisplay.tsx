import React, { useState } from 'react';
import { WordToAccent } from '../types';

interface SentenceDisplayProps {
  sentence: string;
  wordsToAccent: WordToAccent[];
  onCorrect: () => void;
  onAttemptFailed: () => void;
  showHint: boolean;
}

const ACCENTED_VOWELS: { [key: string]: string } = {
  a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú',
  A: 'Á', E: 'É', I: 'Í', O: 'Ó', U: 'Ú',
};

const VOWELS = 'aeiouAEIOU';

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({ sentence, wordsToAccent, onCorrect, onAttemptFailed, showHint }) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shakeWordIndex, setShakeWordIndex] = useState<number | null>(null);

  const words = sentence.split(' ');
  const targetWordsWithoutAccent = wordsToAccent.map(w => w.withoutAccent.toLowerCase());
  
  const triggerShake = (index: number) => {
    setShakeWordIndex(index);
    setTimeout(() => setShakeWordIndex(null), 500);
  };

  const handleWordClick = (clickedWord: string, index: number) => {
    if (isAnswered || selectedWordIndex !== null) return;

    const match = clickedWord.match(/^([¿¡]*)(.*?)([.,;?!]*)$/);
    const cleanClickedWord = (match ? match[2] : clickedWord).toLowerCase();
    
    const isTarget = targetWordsWithoutAccent.includes(cleanClickedWord);
    const isFound = foundWords.includes(cleanClickedWord);

    if (isTarget && !isFound) {
      setSelectedWordIndex(index);
    } else {
      triggerShake(index);
      onAttemptFailed();
    }
  };

  const handleVowelClick = (word: string, vowelCharIndex: number) => {
    if (isAnswered) return;

    const attemptedWord = Array.from(word).map((char, index) => 
        index === vowelCharIndex ? ACCENTED_VOWELS[char] : char
    ).join('');

    const correctTarget = wordsToAccent.find(w => w.withoutAccent.toLowerCase() === word.toLowerCase());

    if (correctTarget && attemptedWord === correctTarget.withAccent) {
        const newFoundWords = [...foundWords, correctTarget.withoutAccent.toLowerCase()];
        setFoundWords(newFoundWords);
        setSelectedWordIndex(null);
        
        if(newFoundWords.length === wordsToAccent.length) {
            setIsAnswered(true);
            onCorrect();
        }
    } else {
      triggerShake(selectedWordIndex!);
      setSelectedWordIndex(null);
      onAttemptFailed();
    }
  };

  const getInstructionText = () => {
    if (isAnswered) return "Ronda completada. ¡Espera el feedback!";
    if (selectedWordIndex !== null) return "Ahora, haz clic en la vocal correcta para añadir la tilde.";
    if (showHint) return "Pista: La palabra que necesita la tilde está brillando. ¡Inténtalo de nuevo!";
    
    if (foundWords.length > 0) {
      const remaining = wordsToAccent.length - foundWords.length;
      if (remaining === 1) {
          return `¡Correcto! Falta 1 palabra.`;
      }
      return `¡Correcto! Faltan ${remaining} palabras.`;
    }

    const total = wordsToAccent.length;
    if (total === 1) {
        return "Encuentra la palabra y haz clic en la vocal que lleva tilde.";
    }
    return `Encuentra las ${total} palabras y haz clic en las vocales que llevan tilde.`;
  };

  return (
    <div>
      <p className="text-2xl md:text-3xl lg:text-4xl text-center text-slate-200 leading-relaxed font-serif">
        {words.map((word, wordIdx) => {
          const match = word.match(/^([¿¡]*)(.*?)([.,;?!]*)$/);
          const leadingPunctuation = match ? match[1] : '';
          const cleanWord = match ? match[2] : word;
          const trailingPunctuation = match ? match[3] : '';

          const isSelected = selectedWordIndex === wordIdx;
          const isFound = foundWords.includes(cleanWord.toLowerCase());
          const isShaking = shakeWordIndex === wordIdx;
          const isHinted = showHint && !isFound && !isSelected && targetWordsWithoutAccent.includes(cleanWord.toLowerCase());

          if (isFound) {
            const correctVersion = wordsToAccent.find(w => w.withoutAccent.toLowerCase() === cleanWord.toLowerCase())?.withAccent || cleanWord;
            return (
                 <span key={wordIdx} className="inline-block mr-2 p-2 rounded-md bg-green-500/20 text-green-300 font-bold">
                    {/* FIX: Corrected typo from trailingPuncuation to trailingPunctuation */}
                    {leadingPunctuation}{correctVersion}{trailingPunctuation}
                 </span>
            )
          }

          return (
            <span key={wordIdx} className="inline-block mr-2">
              {leadingPunctuation}
              {isSelected && !isAnswered ? (
                <span className="bg-sky-800 p-2 rounded-md transition-colors duration-300">
                  {cleanWord.split('').map((char, charIdx) =>
                    VOWELS.includes(char) ? (
                      <button
                        key={charIdx}
                        onClick={() => handleVowelClick(cleanWord, charIdx)}
                        className="text-yellow-300 font-bold hover:text-yellow-100 transform hover:scale-125 transition-transform duration-200 rounded-lg px-1 py-2 -my-2"
                      >
                        {char}
                      </button>
                    ) : (
                      <span>{char}</span>
                    )
                  )}
                </span>
              ) : (
                <button
                  onClick={() => handleWordClick(word, wordIdx)}
                  disabled={isAnswered || selectedWordIndex !== null}
                  className={`p-2 rounded-md transition-colors duration-300 ${isAnswered ? 'cursor-default opacity-70' : 'hover:bg-sky-900'} ${(selectedWordIndex !== null && !isSelected) ? 'opacity-50 cursor-default' : ''} ${isShaking ? 'animate-shake' : ''} ${isHinted ? 'animate-pulse' : ''}`}
                >
                  {cleanWord}
                </button>
              )}
              {trailingPunctuation}
            </span>
          );
        })}
      </p>
       <p className="text-center text-sky-400 mt-8 text-sm md:text-base h-6">
        {getInstructionText()}
      </p>
    </div>
  );
};

export default SentenceDisplay;