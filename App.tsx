import React, { useState, useCallback, useEffect } from 'react';
import { GameState, GameRound } from './types';
import { wordBank } from './services/wordBank';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import LevelTransitionScreen from './components/LevelTransitionScreen';

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param array The array to shuffle.
 */
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const SENTENCES_PER_LEVEL = 10;
const TOTAL_LEVELS = 6;
const POINTS_PER_SENTENCE = 10;
const MAX_SCORE = SENTENCES_PER_LEVEL * TOTAL_LEVELS * POINTS_PER_SENTENCE;

// Bumped when the word bank changes so stale saved games (with old rounds) are discarded.
const SAVE_KEY = 'accentuateGameState_v2';

/**
 * Orders the bank from easiest to hardest (fewer target words, then shorter
 * sentence), splits it into one tier per level, and shuffles within each tier,
 * so levels get progressively harder while each game still varies.
 */
function buildLevels(bank: GameRound[]): GameRound[] {
  const sorted = [...bank].sort((a, b) =>
    a.wordsToAccent.length - b.wordsToAccent.length ||
    a.sentence.split(' ').length - b.sentence.split(' ').length
  );
  const rounds: GameRound[] = [];
  for (let level = 0; level < TOTAL_LEVELS; level++) {
    rounds.push(...shuffleArray(sorted.slice(level * SENTENCES_PER_LEVEL, (level + 1) * SENTENCES_PER_LEVEL)));
  }
  return rounds;
}

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [allRounds, setAllRounds] = useState<GameRound[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [won, setWon] = useState(false);
  // Next unresolved sentence within the current level; saved so a resumed game
  // continues where it left off instead of replaying (and re-scoring) sentences.
  const [sentenceIndex, setSentenceIndex] = useState(0);

  // State for saved game and high score
  const [savedGame, setSavedGame] = useState<any | null>(null);
  const [highScore, setHighScore] = useState(0);

  // Load saved game and high score on initial mount
  useEffect(() => {
    try {
      localStorage.removeItem('accentuateGameState'); // pre-v2 save format
      const savedState = localStorage.getItem(SAVE_KEY);
      if (savedState) {
        setSavedGame(JSON.parse(savedState));
      }
      const savedHighScore = localStorage.getItem('accentuateHighScore');
      if (savedHighScore) {
        setHighScore(parseInt(savedHighScore, 10));
      }
    } catch (error) {
      console.error("Failed to load game state from localStorage", error);
      localStorage.removeItem(SAVE_KEY);
      localStorage.removeItem('accentuateHighScore');
    }
  }, []);

  // Effect to save game progress
  useEffect(() => {
    if (gameState === GameState.Playing || gameState === GameState.LevelTransition) {
      const stateToSave = { gameState, score, lives, allRounds, currentLevel, sentenceIndex };
      localStorage.setItem(SAVE_KEY, JSON.stringify(stateToSave));
    } else {
      localStorage.removeItem(SAVE_KEY);
    }
  }, [gameState, score, lives, allRounds, currentLevel, sentenceIndex]);

  // Effect to update high score
  useEffect(() => {
    if (gameState === GameState.GameOver) {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('accentuateHighScore', score.toString());
      }
    }
  }, [gameState, score, highScore]);


  const startGame = useCallback(() => {
    setAllRounds(buildLevels(wordBank));
    setCurrentLevel(0);
    setSentenceIndex(0);
    setWon(false);
    setScore(0);
    setLives(3);
    setGameState(GameState.Playing);
    setSavedGame(null); // A new game clears any previously saved game
  }, []);

  const resumeGame = useCallback(() => {
    if (savedGame) {
      setAllRounds(savedGame.allRounds);
      setCurrentLevel(savedGame.currentLevel);
      setScore(savedGame.score);
      setLives(savedGame.lives);
      setSentenceIndex(savedGame.sentenceIndex ?? 0);
      setGameState(savedGame.gameState);
      setSavedGame(null);
    }
  }, [savedGame]);

  const handleLevelComplete = useCallback(() => {
    if (currentLevel < TOTAL_LEVELS - 1) {
      setGameState(GameState.LevelTransition);
    } else {
      setWon(true);
      setGameState(GameState.GameOver);
    }
  }, [currentLevel]);
  
  const quitGame = useCallback(() => {
    setGameState(GameState.GameOver);
  }, []);

  const startNextLevel = useCallback(() => {
    setCurrentLevel(prev => prev + 1);
    setSentenceIndex(0);
    setGameState(GameState.Playing);
  }, []);

  const handleCorrectAnswer = useCallback(() => {
    setScore(prev => prev + POINTS_PER_SENTENCE);
  }, []);
  
  const handleIncorrectAnswer = useCallback(() => {
    setLives(prevLives => {
      const newLives = prevLives - 1;
      if (newLives <= 0) {
        setGameState(GameState.GameOver);
      }
      return newLives;
    });
  }, []);

  const renderScreen = () => {
    switch (gameState) {
      case GameState.Playing:
        return (
          <GameScreen
            key={currentLevel}
            level={currentLevel + 1}
            sentences={allRounds.slice(currentLevel * SENTENCES_PER_LEVEL, (currentLevel + 1) * SENTENCES_PER_LEVEL)}
            initialSentenceIndex={sentenceIndex}
            onRoundResolved={setSentenceIndex}
            score={score}
            lives={lives}
            onLevelComplete={handleLevelComplete}
            onCorrectAnswer={handleCorrectAnswer}
            onIncorrectAnswer={handleIncorrectAnswer}
            onQuit={quitGame}
          />
        );
      case GameState.LevelTransition:
        return (
          <LevelTransitionScreen 
            level={currentLevel + 1} 
            score={score} 
            onNextLevel={startNextLevel} 
          />
        );
      case GameState.GameOver:
        return <GameOverScreen score={score} onRestart={startGame} won={won} maxScore={MAX_SCORE} />;
      case GameState.Start:
      default:
        return (
          <StartScreen 
            onStart={startGame} 
            onResume={resumeGame}
            hasSavedGame={!!savedGame}
            highScore={highScore}
          />
        );
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 to-sky-900 flex flex-col items-center justify-start font-sans"
      style={{
        paddingTop: 'calc(1rem + env(safe-area-inset-top))',
        paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))',
        paddingLeft: 'calc(1rem + env(safe-area-inset-left))',
        paddingRight: 'calc(1rem + env(safe-area-inset-right))',
      }}
    >
      <div className="w-full max-w-3xl mx-auto my-8 md:my-12">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
