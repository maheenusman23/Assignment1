export interface GuessAttempt {
  id: string;
  guess: number;
  result: 'TOO_HIGH' | 'TOO_LOW' | 'CORRECT';
  timestamp: string;
  attemptNumber: number;
}

export type GameStatus = 'PLAYING' | 'WON' | 'LOST';

export interface GameSettings {
  min: number;
  max: number;
  maxAttempts: number | null; // null for unlimited
}
