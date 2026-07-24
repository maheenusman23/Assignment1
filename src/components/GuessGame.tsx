import React, { useState, useEffect } from 'react';
import { GuessAttempt } from '../types';
import { GuessHistory } from './GuessHistory';
import { RotateCcw, Send } from 'lucide-react';

export const GuessGame: React.FC = () => {
  const maxAttempts = 5;
  const [secretNumber, setSecretNumber] = useState<number>(0);
  const [inputVal, setInputVal] = useState<string>('');
  const [guesses, setGuesses] = useState<GuessAttempt[]>([]);
  const [gameStatus, setGameStatus] = useState<'PLAYING' | 'WON' | 'LOST'>('PLAYING');
  const [message, setMessage] = useState<string>('Guess a number between 1 and 100!');

  // Start / Reset game
  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuesses([]);
    setGameStatus('PLAYING');
    setMessage('Guess a number between 1 and 100!');
    setInputVal('');
  };

  useEffect(() => {
    resetGame();
  }, []);

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameStatus !== 'PLAYING') return;

    const num = parseInt(inputVal, 10);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Please enter a valid number from 1 to 100.');
      return;
    }

    const attemptNum = guesses.length + 1;
    let result: 'TOO_HIGH' | 'TOO_LOW' | 'CORRECT';

    if (num === secretNumber) {
      result = 'CORRECT';
      setGameStatus('WON');
      setMessage(`🎉 Congratulations! You guessed ${secretNumber} in ${attemptNum} attempt(s)!`);
    } else if (num > secretNumber) {
      result = 'TOO_HIGH';
      if (attemptNum >= maxAttempts) {
        setGameStatus('LOST');
        setMessage(`Game Over! You reached ${maxAttempts} attempts. Secret number was ${secretNumber}.`);
      } else {
        setMessage(`Try a lower number! (${maxAttempts - attemptNum} attempts left)`);
      }
    } else {
      result = 'TOO_LOW';
      if (attemptNum >= maxAttempts) {
        setGameStatus('LOST');
        setMessage(`Game Over! You reached ${maxAttempts} attempts. Secret number was ${secretNumber}.`);
      } else {
        setMessage(`Try a higher number! (${maxAttempts - attemptNum} attempts left)`);
      }
    }

    const newAttempt: GuessAttempt = {
      id: Math.random().toString(),
      guess: num,
      result,
      timestamp: new Date().toLocaleTimeString(),
      attemptNumber: attemptNum,
    };

    setGuesses([newAttempt, ...guesses]);
    setInputVal('');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Guess the Number</h2>
          <p className="text-xs text-slate-500">Number between 1 and 100 ({maxAttempts} max attempts)</p>
        </div>
        <button
          onClick={resetGame}
          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Message Box */}
      <div
        className={`p-3 rounded-xl border text-xs font-medium ${
          gameStatus === 'WON'
            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
            : gameStatus === 'LOST'
            ? 'bg-rose-50 border-rose-200 text-rose-800'
            : 'bg-slate-50 border-slate-200 text-slate-700'
        }`}
      >
        {message}
      </div>

      {/* Input Form */}
      <form onSubmit={handleGuess} className="flex gap-2">
        <input
          type="number"
          min="1"
          max="100"
          disabled={gameStatus !== 'PLAYING'}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter guess (1-100)"
          className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={gameStatus !== 'PLAYING' || !inputVal}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <span>Guess</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* History Log */}
      <GuessHistory guesses={guesses} />
    </div>
  );
};
