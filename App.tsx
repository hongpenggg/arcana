import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SpreadSelector from './components/SpreadSelector';
import ReadingRoom from './components/ReadingRoom';
import Encyclopedia from './components/Encyclopedia';
import Guide from './components/Guide';
import { Spread } from './types';
import { SPREADS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [activeSpread, setActiveSpread] = useState<Spread | null>(null);
  const [isTutorialMode, setIsTutorialMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSpreadSelect = (spread: Spread) => {
    setActiveSpread(spread);
    setCurrentView('reading-room');
  };

  const startTutorial = () => {
    setIsTutorialMode(true);
    setActiveSpread(SPREADS[0]); // Daily draw for simplicity
    setCurrentView('reading-room');
  };

  const resetReading = () => {
    setActiveSpread(null);
    setCurrentView('reading');
    setIsTutorialMode(false);
  };

  const handleSearch = (term: string) => {
    setSearchQuery(term);
    setCurrentView('encyclopedia');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-8 animate-in fade-in duration-1000 relative z-10">
            <div className="mb-6 sm:mb-8 relative group max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-purple-500 blur-[80px] sm:blur-[100px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-1000"></div>
              <h1 className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight drop-shadow-2xl">
                ARCANA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">MYSTICA</span>
              </h1>
              <p className="relative text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto font-light leading-relaxed mb-6 sm:mb-8 px-2">
                Unlock the secrets of the universe through the ancient wisdom of Tarot. 
                Consult the Oracle for tangible, actionable advice.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto max-w-md sm:max-w-none px-4">
               <button 
                 onClick={() => { setIsTutorialMode(false); setCurrentView('reading'); }}
                 className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-sm sm:text-base tracking-widest transition-all shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_50px_rgba(147,51,234,0.7)] hover:-translate-y-1 active:scale-95"
               >
                 START READING
               </button>
               <button 
                 onClick={startTutorial}
                 className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-purple-400/50 hover:bg-white/20 text-white rounded-full font-bold text-sm sm:text-base tracking-widest transition-all backdrop-blur-md active:scale-95"
               >
                 TUTORIAL
               </button>
            </div>
            
            <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-purple-400/60 font-serif tracking-widest uppercase">
               Explore • Reveal • Transcend
            </div>
          </div>
        );
      
      case 'reading':
        return <SpreadSelector onSelect={handleSpreadSelect} />;
      
      case 'reading-room':
        return activeSpread 
          ? <ReadingRoom 
              spread={activeSpread} 
              onReset={resetReading} 
              isTutorialMode={isTutorialMode}
              onTutorialComplete={() => setIsTutorialMode(false)}
            /> 
          : <SpreadSelector onSelect={handleSpreadSelect} />;
      
      case 'encyclopedia':
        return <Encyclopedia initialSearch={searchQuery} />;
      
      case 'guide':
        return <Guide />;
        
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-purple-500 selection:text-white pb-20 relative">
      <Navbar 
        currentView={currentView} 
        setView={(view) => {
          if (view === 'reading' && activeSpread) {
             setCurrentView('reading-room');
          } else {
             setCurrentView(view);
             if (view !== 'reading-room') setActiveSpread(null);
          }
          if (view !== 'encyclopedia') setSearchQuery('');
        }}
        onSearch={handleSearch}
      />
      
      <main className="mt-4 sm:mt-6 relative z-10">
        {renderContent()}
      </main>

      {/* Ambient background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-900/20 blur-[120px] rounded-full animate-pulse" style={{animationDuration: '10s'}}></div>
        {/* Stars */}
        <div className="absolute top-[20%] left-[20%] w-1 h-1 bg-white rounded-full opacity-40 animate-glow"></div>
        <div className="absolute top-[50%] right-[30%] w-1 h-1 bg-white rounded-full opacity-30 animate-glow" style={{ animationDelay: '1s'}}></div>
        <div className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-white rounded-full opacity-50 animate-glow" style={{ animationDelay: '2s'}}></div>
      </div>
    </div>
  );
}; 

export default App;
