import React, { useState } from 'react';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
  onSearch: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleNavClick = (view: string) => {
    setView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="glass-panel sticky top-0 z-50 w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shadow-lg shadow-purple-900/10">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleNavClick('home')}>
          <span className="text-xl sm:text-2xl text-purple-400 group-hover:rotate-180 transition-transform duration-700">✧</span>
          <h1 className="text-sm sm:text-xl font-serif font-bold tracking-widest text-white group-hover:text-purple-300 transition-colors">
            <span className="hidden sm:inline">ARCANA MYSTICA</span>
            <span className="sm:hidden">ARCANA</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`text-xs lg:text-sm tracking-widest uppercase transition-all duration-300 relative group px-2 py-1 ${
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

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-md"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 z-40 glass-panel border-t border-white/10 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 py-4 text-left text-sm tracking-widest uppercase transition-all border-b border-white/5 last:border-b-0 ${
                  currentView === item.id 
                    ? 'bg-purple-600/20 text-purple-400 font-bold' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white active:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Quick Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-24 animate-in fade-in duration-200" onClick={() => setIsSearchOpen(false)}>
          <div className="w-full max-w-2xl px-4 sm:px-6" onClick={e => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                autoFocus
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a card..."
                className="w-full bg-slate-900/90 border border-purple-500/50 text-white text-lg sm:text-xl p-4 sm:p-6 rounded-2xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500 font-serif"
              />
              <button type="submit" className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-purple-400 uppercase text-xs font-bold tracking-widest">
                <span className="hidden sm:inline">Press Enter</span>
                <span className="sm:hidden">↵</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
