import { GuessGame } from './components/GuessGame';
import { Gamepad2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-100">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-extrabold text-slate-900 text-base leading-none">Number Guessing Game</h1>
              <p className="text-[11px] text-slate-500 mt-1">Guess a random number between 1 and 100</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <GuessGame />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 mt-12 bg-white text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center text-slate-400">
          <span>Number Guessing Game (1–100)</span>
          <span>Interactive Web App</span>
        </div>
      </footer>
    </div>
  );
}
