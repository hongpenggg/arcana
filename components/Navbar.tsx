import React, { useState } from 'react';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
  onSearch: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navItems = [
    { id: 'home', label: 'Sanctuary' },
    { id: 'reading', label: 'Reading' },
    { id: 'encyclopedia', label: 'Encyclopedia' },
    { id: 'guide', label: 'Guide' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setIsSearchOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <>
      <nav className="glass-panel sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between shadow-lg shadow-purple-900/10">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('home')}>
          <span className="text-2xl text-purple-400 group-hover:rotate-180 transition-transform duration-700">✧</span>
          <h1 className="text-xl font-serif font-bold tracking-widest text-white group-hover:text-purple-300 transition-colors">ARCANA MYSTICA</h1>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8">
          <div className="flex gap-4 md:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`text-xs md:text-sm tracking-widest uppercase transition-all duration-300 relative group px-2 py-1 ${
                  currentView === item.id 
                    ? 'text-purple-400 font-bold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-purple-400 transition-all duration-300 ${currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Quick Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 animate-in fade-in duration-200" onClick={() => setIsSearchOpen(false)}>
          <div className="w-full max-w-2xl px-4" onClick={e => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                autoFocus
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a card..."
                className="w-full bg-slate-900/90 border border-purple-500/50 text-white text-xl p-6 rounded-2xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500 font-serif"
              />
              <button type="submit" className="absolute right-6 top-1/2 -translate-y-1/2 text-purple-400 uppercase text-xs font-bold tracking-widest">
                Press Enter
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
