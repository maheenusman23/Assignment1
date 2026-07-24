import React from 'react';
import { GuessAttempt } from '../types';

interface GuessHistoryProps {
  guesses: GuessAttempt[];
}

export const GuessHistory: React.FC<GuessHistoryProps> = ({ guesses }) => {
  if (guesses.length === 0) {
    return (
      <div className="text-center py-4 text-slate-400 text-xs bg-slate-50 rounded-xl border border-dashed border-slate-200">
        No guesses made yet.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold text-slate-500 px-1">Guess History</div>
      <div className="space-y-1.5 max-h-48 overflow-y-auto">
        {guesses.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between items-center px-3 py-2 rounded-lg text-xs border font-medium ${
              item.result === 'CORRECT'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : item.result === 'TOO_HIGH'
                ? 'bg-amber-50 border-amber-200 text-amber-800'
                : 'bg-indigo-50 border-indigo-200 text-indigo-800'
            }`}
          >
            <span>Attempt #{item.attemptNumber}: <strong>{item.guess}</strong></span>
            <span>
              {item.result === 'CORRECT' && '✓ Correct'}
              {item.result === 'TOO_HIGH' && '↓ Too High'}
              {item.result === 'TOO_LOW' && '↑ Too Low'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
