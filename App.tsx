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
          <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-1000 relative z-10">
            <div className="mb-8 relative group">
              <div className="absolute inset-0 bg-purple-500 blur-[100px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-1000"></div>
              <h1 className="relative text-5xl md:text-8xl font-serif font-bold text-white mb-4 tracking-tighter drop-shadow-2xl">
                ARCANA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">MYSTICA</span>
              </h1>
              <p className="relative text-lg md:text-xl text-purple-200 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                Unlock the secrets of the universe through the ancient wisdom of Tarot. 
                Consult the Oracle for tangible, actionable advice.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
               <button 
                 onClick={() => { setIsTutorialMode(false); setCurrentView('reading'); }}
                 className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold tracking-widest transition-all shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_50px_rgba(147,51,234,0.7)] hover:-translate-y-1"
               >
                 START READING
               </button>
               <button 
                 onClick={startTutorial}
                 className="px-8 py-4 bg-white/10 border border-purple-400/50 hover:bg-white/20 text-white rounded-full font-bold tracking-widest transition-all backdrop-blur-md"
               >
                 TUTORIAL
               </button>
            </div>
            
            <div className="mt-12 text-sm text-purple-400/60 font-serif tracking-widest uppercase">
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
      
      <main className="mt-6 relative z-10">
        {renderContent()}
      </main>

      {/* Ambient background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full animate-pulse" style={{animationDuration: '10s'}}></div>
        {/* Stars */}
        <div className="absolute top-[20%] left-[20%] w-1 h-1 bg-white rounded-full opacity-40 animate-glow"></div>
        <div className="absolute top-[50%] right-[30%] w-1 h-1 bg-white rounded-full opacity-30 animate-glow" style={{ animationDelay: '1s'}}></div>
        <div className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-white rounded-full opacity-50 animate-glow" style={{ animationDelay: '2s'}}></div>
      </div>
    </div>
  );
}; 

export default App;
