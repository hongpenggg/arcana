import React, { useState, useEffect } from 'react';
import { ALL_CARDS } from '../constants';
import Card from './Card';

interface EncyclopediaProps {
  initialSearch?: string;
}

const Encyclopedia: React.FC<EncyclopediaProps> = ({ initialSearch = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filter, setFilter] = useState<'All' | 'Major' | 'Minor'>('All');
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const filteredCards = ALL_CARDS.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' ? true : card.arcana === filter;
    return matchesSearch && matchesFilter;
  });

  const selectedCard = ALL_CARDS.find(c => c.id === selectedCardId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 animate-in fade-in duration-500">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3 sm:mb-4">Card Encyclopedia</h2>
        <p className="text-sm sm:text-base text-purple-300">Discover the wisdom of the 78 keys.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 sticky top-20 sm:top-24 z-30 bg-[#0f0c29]/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/5">
        <input 
          type="text" 
          placeholder="Search cards..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 w-full md:w-96 backdrop-blur-sm transition-all focus:bg-white/20"
        />
        <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
          {['All', 'Major', 'Minor'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filter === f ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50' : 'text-gray-400 hover:text-white active:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {filteredCards.map(card => (
            <div 
              key={card.id} 
              onClick={() => setSelectedCardId(card.id)}
              className="group cursor-pointer flex flex-col items-center gap-2 sm:gap-3 animate-in zoom-in duration-300"
            >
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg sm:rounded-xl border border-white/10 group-hover:border-purple-400 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95">
                 <img src={card.imageUrl} alt={card.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-purple-900/20 transition-colors"></div>
              </div>
              <span className="text-xs sm:text-sm font-serif text-gray-300 group-hover:text-white text-center transition-colors leading-tight">{card.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 sm:py-20 text-gray-500">
           <p className="text-lg sm:text-xl">No cards found matching your query.</p>
        </div>
      )}

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedCardId(null)}>
          <div className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 shadow-2xl border border-purple-500/30" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedCardId(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-shrink-0 w-full md:w-64 lg:w-80 mx-auto md:mx-0">
               <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-white/20">
                 <img src={selectedCard.imageUrl} alt={selectedCard.name} className="w-full" />
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg sm:rounded-xl"></div>
               </div>
            </div>

            <div className="flex-grow overflow-y-auto">
               <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                 <span className="bg-purple-900/50 text-purple-300 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-purple-500/20">{selectedCard.arcana} Arcana</span>
                 {selectedCard.suit && <span className="bg-blue-900/30 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase border border-blue-500/20">{selectedCard.suit}</span>}
               </div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 sm:mb-6 drop-shadow-lg">{selectedCard.name}</h2>
               
               <div className="space-y-4 sm:space-y-6">
                 <div>
                   <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-serif border-b border-white/10 pb-1 inline-block">Description</h3>
                   <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg font-light">{selectedCard.description}</p>
                 </div>
                 
                 <div className="grid grid-cols-1 gap-4 sm:gap-6">
                   <div className="bg-green-900/10 p-4 sm:p-5 rounded-xl border border-green-500/20 hover:bg-green-900/20 transition-colors">
                     <h4 className="text-green-400 font-bold mb-2 uppercase text-xs tracking-wider flex items-center gap-2">
                       <span className="text-base sm:text-lg">↑</span> Upright
                     </h4>
                     <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">{selectedCard.meaningUpright}</p>
                   </div>
                   <div className="bg-red-900/10 p-4 sm:p-5 rounded-xl border border-red-500/20 hover:bg-red-900/20 transition-colors">
                     <h4 className="text-red-400 font-bold mb-2 uppercase text-xs tracking-wider flex items-center gap-2">
                       <span className="text-base sm:text-lg">↓</span> Reversed
                     </h4>
                     <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">{selectedCard.meaningReversed}</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Encyclopedia;
