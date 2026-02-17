import React from 'react';
import { SPREADS } from '../constants';
import { Spread } from '../types';

interface SpreadSelectorProps {
  onSelect: (spread: Spread) => void;
}

const SpreadSelector: React.FC<SpreadSelectorProps> = ({ onSelect }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-purple-100 mb-2">Choose Your Spread</h2>
      <p className="text-center text-sm sm:text-base text-purple-300 mb-8 sm:mb-12">Select a layout that resonates with your query.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {SPREADS.map((spread) => (
          <div 
            key={spread.id}
            onClick={() => onSelect(spread)}
            className="glass-panel p-6 sm:p-8 rounded-2xl cursor-pointer hover:bg-white/10 transition-all duration-300 group border border-purple-500/20 hover:border-purple-400 active:scale-95"
          >
            <div className="flex justify-center mb-4 sm:mb-6">
               {/* Simple visual representation of spread cards */}
               <div className="flex gap-1.5 sm:gap-2">
                 {spread.positions.slice(0,3).map((_, i) => (
                   <div key={i} className={`w-6 h-10 sm:w-8 sm:h-12 bg-purple-900/50 border border-purple-400/50 rounded-sm ${i === 1 && spread.positions.length > 1 ? '-mt-1 sm:-mt-2' : ''}`}></div>
                 ))}
               </div>
            </div>
            <h3 className="text-lg sm:text-xl font-serif text-white mb-2 sm:mb-3 text-center group-hover:text-purple-300">{spread.name}</h3>
            <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">{spread.description}</p>
            <div className="mt-4 sm:mt-6 text-center text-xs text-purple-400 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Select
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpreadSelector;