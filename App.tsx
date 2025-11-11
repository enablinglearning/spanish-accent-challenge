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

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [allRounds, setAllRounds] = useState<GameRound[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);

  // State for saved game and high score
  const [savedGame, setSavedGame] = useState<any | null>(null);
  const [highScore, setHighScore] = useState(0);

  // Load saved game and high score on initial mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('accentuateGameState');
      if (savedState) {
        setSavedGame(JSON.parse(savedState));
      }
      const savedHighScore = localStorage.getItem('accentuateHighScore');
      if (savedHighScore) {
        setHighScore(parseInt(savedHighScore, 10));
      }
    } catch (error) {
      console.error("Failed to load game state from localStorage", error);
      localStorage.removeItem('accentuateGameState');
      localStorage.removeItem('accentuateHighScore');
    }
  }, []);

  // Effect to save game progress
  useEffect(() => {
    if (gameState === GameState.Playing || gameState === GameState.LevelTransition) {
      const stateToSave = { gameState, score, lives, allRounds, currentLevel };
      localStorage.setItem('accentuateGameState', JSON.stringify(stateToSave));
    } else {
      localStorage.removeItem('accentuateGameState');
    }
  }, [gameState, score, lives, allRounds, currentLevel]);

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
    const shuffledRounds = shuffleArray([...wordBank]);
    setAllRounds(shuffledRounds);
    setCurrentLevel(0);
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
      setGameState(savedGame.gameState);
      setSavedGame(null);
    }
  }, [savedGame]);

  const handleLevelComplete = useCallback(() => {
    if (currentLevel < TOTAL_LEVELS - 1) {
      setGameState(GameState.LevelTransition);
    } else {
      setGameState(GameState.GameOver); // Game won
    }
  }, [currentLevel]);
  
  const quitGame = useCallback(() => {
    setGameState(GameState.GameOver);
  }, []);

  const startNextLevel = useCallback(() => {
    setCurrentLevel(prev => prev + 1);
    setGameState(GameState.Playing);
  }, []);

  const handleCorrectAnswer = useCallback(() => {
    setScore(prev => prev + 10);
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
        return <GameOverScreen score={score} onRestart={startGame} won={lives > 0 && currentLevel >= TOTAL_LEVELS - 1} />;
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
