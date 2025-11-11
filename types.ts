export enum GameState {
  Start,
  Playing,
  LevelTransition,
  GameOver,
}

export interface WordToAccent {
  withAccent: string;
  withoutAccent: string;
}

export interface GameRound {
  sentence: string;
  wordsToAccent: WordToAccent[];
  explanation: string;
}