import React from 'react';
import { CardData } from '../types';

interface CardProps {
  card?: CardData;
  isRevealed: boolean;
  isReversed?: boolean;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ card, isRevealed, isReversed = false, onClick, className = "", size = 'md' }) => {
  
  const sizeClasses = {
    sm: "w-24 h-40",
    md: "w-40 h-64",
    lg: "w-64 h-96"
  };

  return (
    <div 
      className={`card-flip cursor-pointer ${sizeClasses[size]} ${isRevealed ? 'flipped' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="card-inner">
        {/* Back of Card */}
        <div className="card-back rounded-xl border-2 border-purple-500/30">
          <div className="w-full h-full opacity-50 flex items-center justify-center">
            <span className="text-4xl text-purple-300 opacity-80">☾</span>
          </div>
        </div>

        {/* Front of Card */}
        <div className="card-front rounded-xl bg-slate-900 border border-slate-700">
          {card ? (
            <div className={`w-full h-full relative ${isReversed ? 'rotate-180' : ''}`}>
              <img 
                src={card.imageUrl} 
                alt={card.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm p-2 text-center">
                 <span className="text-xs font-serif text-white uppercase tracking-widest">{card.name}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-white">?</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
