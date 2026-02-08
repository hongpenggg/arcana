import React from 'react';
import { SPREADS } from '../constants';
import { Spread } from '../types';

interface SpreadSelectorProps {
  onSelect: (spread: Spread) => void;
}

const SpreadSelector: React.FC<SpreadSelectorProps> = ({ onSelect }) => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-serif text-center text-purple-100 mb-2">Choose Your Spread</h2>
      <p className="text-center text-purple-300 mb-12">Select a layout that resonates with your query.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SPREADS.map((spread) => (
          <div 
            key={spread.id}
            onClick={() => onSelect(spread)}
            className="glass-panel p-8 rounded-2xl cursor-pointer hover:bg-white/10 transition-all duration-300 group border border-purple-500/20 hover:border-purple-400"
          >
            <div className="flex justify-center mb-6">
               {/* Simple visual representation of spread cards */}
               <div className="flex gap-2">
                 {spread.positions.slice(0,3).map((_, i) => (
                   <div key={i} className={`w-8 h-12 bg-purple-900/50 border border-purple-400/50 rounded-sm ${i === 1 && spread.positions.length > 1 ? '-mt-2' : ''}`}></div>
                 ))}
               </div>
            </div>
            <h3 className="text-xl font-serif text-white mb-3 text-center group-hover:text-purple-300">{spread.name}</h3>
            <p className="text-gray-400 text-sm text-center leading-relaxed">{spread.description}</p>
            <div className="mt-6 text-center text-xs text-purple-400 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Select
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpreadSelector;