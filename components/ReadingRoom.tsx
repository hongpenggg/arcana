import React, { useState, useEffect, useRef } from 'react';
import { Spread, ReadingState, CardData } from '../types';
import { ALL_CARDS } from '../constants';
import Card from './Card';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

interface ReadingRoomProps {
  spread: Spread;
  onReset: () => void;
  isTutorialMode?: boolean;
  onTutorialComplete?: () => void;
}

const ReadingRoom: React.FC<ReadingRoomProps> = ({ spread, onReset, isTutorialMode = false, onTutorialComplete }) => {
  const [deck, setDeck] = useState<CardData[]>([]);
  const [drawnCards, setDrawnCards] = useState<CardData[]>([]);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const [reversedStates, setReversedStates] = useState<boolean[]>([]);
  const [isShuffling, setIsShuffling] = useState(true);
  
  // AI State
  const [aiReading, setAiReading] = useState<string>('');
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  // Tutorial State
  const [tutorialStep, setTutorialStep] = useState(1); // 1: Shuffle wait, 2: Draw, 3: Reveal, 4: Interpret

  // Initialize deck and shuffle on mount
  useEffect(() => {
    const newDeck = [...ALL_CARDS];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setDeck(newDeck);
    
    setTimeout(() => {
      setIsShuffling(false);
      if (isTutorialMode) setTutorialStep(2);
    }, 2000); // Longer shuffle for effect
  }, [isTutorialMode]);

  const handleDraw = () => {
    if (drawnCards.length >= spread.positions.length) return;

    const nextCard = deck[drawnCards.length];
    const isReversed = Math.random() < 0.2; 

    setDrawnCards([...drawnCards, nextCard]);
    setReversedStates([...reversedStates, isReversed]);

    if (isTutorialMode && drawnCards.length === 0) {
      setTutorialStep(3);
    }
  };

  const handleReveal = (index: number) => {
    if (!revealedIndices.includes(index)) {
      setRevealedIndices([...revealedIndices, index]);
      
      if (isTutorialMode && revealedIndices.length === 0) {
        setTutorialStep(4);
      }
    }
  };

  const generateFullReading = async () => {
    setIsLoadingAI(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your repository secrets.');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const cardSummaries = drawnCards.map((card, i) => {
        const pos = spread.positions[i];
        return `${pos.name}: ${card.name} (${reversedStates[i] ? 'Reversed' : 'Upright'}) - Context: ${pos.description}`;
      }).join('\n');

      const prompt = `You are a mystical, wise, and highly experienced Tarot Reader. Your goal is to provide a profound, tangible, and actionable reading for the user based on the ${spread.name} spread.

      Here are the cards drawn:
      ${cardSummaries}

      Please provide your response in valid Markdown format. Do NOT use standard markdown code blocks (backticks) for the whole text, just format the content itself.
      
      Structure your response as follows:
      # The Reading
      A brief, mystical opening setting the scene.
      
      ## ✧ The Energy of the Spread
      Synthesize the overall story the cards are telling together. How do they interact?
      
      ## ✧ Detailed Card Analysis
      (For each card, provide a dedicated section like "### [Card Name] as [Position]")
      Provide specific interpretation relevant to the position.
      
      ## ✧ Actionable Guidance
      This is the most important part. Provide 3 concrete, tangible steps the user can take based on this reading. Be specific, not generic. 
      
      ## ✧ Final Reflection
      A closing thought or affirmation.
      `;

      const result = await ai.models.generateContent({
        model: 'gemini-3.0-flash-exp',
        contents: prompt
      });
      
      const text = result.text || "The mists are too thick to see clearly right now.";
      
      setAiReading(text);
      if (isTutorialMode) onTutorialComplete?.();

    } catch (e: any) {
      console.error('Gemini API Error:', e);
      const errorMessage = e?.message || 'Unknown error';
      setAiReading(`⚠️ **Connection Error**\n\nThe connection to the ethereal plane was interrupted.\n\nError: ${errorMessage}\n\nPlease ensure your Gemini API key is properly configured in the repository secrets.`);
    } finally {
      setIsLoadingAI(false);
    }
  };

  const allCardsDrawn = drawnCards.length === spread.positions.length;
  const allCardsRevealed = revealedIndices.length === spread.positions.length;

  if (isShuffling) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative w-32 h-48">
          <div className="absolute inset-0 bg-purple-900 border border-purple-500 rounded-xl animate-shuffle shadow-2xl"></div>
          <div className="absolute inset-0 bg-purple-900 border border-purple-500 rounded-xl" style={{ transform: 'rotate(2deg)'}}></div>
        </div>
        <p className="mt-8 text-xl font-serif text-white tracking-widest animate-pulse">Shuffling the Deck...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 animate-in fade-in duration-700 relative">
      
      {/* Tutorial Overlays */}
      {isTutorialMode && tutorialStep === 2 && !allCardsDrawn && (
        <div className="absolute top-40 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <div className="bg-purple-600 text-white px-6 py-3 rounded-full animate-bounce shadow-[0_0_20px_rgba(147,51,234,0.8)] font-bold">
            Tap the deck to draw your card ↓
          </div>
        </div>
      )}
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8 glass-panel p-4 rounded-xl">
        <div>
          <h2 className="text-xl font-serif text-white">{spread.name}</h2>
          <p className="text-xs text-purple-300 uppercase tracking-widest mt-1">
            {allCardsRevealed ? "Reading Complete" : "Draw and Reveal"}
          </p>
        </div>
        <button 
          onClick={onReset}
          className="px-4 py-2 border border-purple-500/30 rounded-lg text-sm hover:bg-purple-500/20 transition-colors"
        >
          New Reading
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Side: The Spread Board */}
        <div className="lg:col-span-8 flex flex-col items-center">
          
          {/* Draw Pile */}
          {!allCardsDrawn && (
            <div className="mb-12 text-center">
              <div 
                onClick={handleDraw} 
                className="relative cursor-pointer group w-32 h-48 md:w-40 md:h-64 mx-auto transition-transform active:scale-95"
              >
                 <div className="absolute top-2 left-2 w-full h-full bg-purple-900 rounded-xl border border-purple-500/30"></div>
                 <div className="absolute top-1 left-1 w-full h-full bg-purple-900 rounded-xl border border-purple-500/30"></div>
                 <div className="absolute top-0 left-0 w-full h-full z-10 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-shadow rounded-xl">
                    <Card isRevealed={false} />
                 </div>
              </div>
            </div>
          )}

          {/* Slots */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {spread.positions.map((pos, index) => {
              const card = drawnCards[index];
              const isRevealed = revealedIndices.includes(index);
              const isReversed = reversedStates[index];

              return (
                <div key={pos.id} className="flex flex-col items-center gap-3 relative">
                   {/* Tutorial Pointer for Reveal */}
                   {isTutorialMode && tutorialStep === 3 && card && !isRevealed && index === 0 && (
                      <div className="absolute -top-12 z-50 pointer-events-none">
                        <div className="bg-purple-600 text-white px-4 py-2 rounded-full animate-bounce shadow-lg text-xs font-bold whitespace-nowrap">
                           Tap to reveal
                        </div>
                      </div>
                   )}

                  <div className="relative">
                    {/* Placeholder slot */}
                    {!card && (
                      <div className="w-24 h-40 md:w-40 md:h-64 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center bg-white/5 shadow-inner">
                        <span className="text-3xl text-white/10">{index + 1}</span>
                      </div>
                    )}
                    
                    {/* The Card */}
                    {card && (
                      <div className="animate-in zoom-in duration-500">
                        <Card 
                          card={card} 
                          isRevealed={isRevealed} 
                          isReversed={isReversed}
                          onClick={() => handleReveal(index)}
                          className={isRevealed ? "shadow-[0_0_20px_rgba(168,85,247,0.3)]" : ""}
                        />
                      </div>
                    )}
                  </div>
                  <div className="text-center max-w-[8rem] md:max-w-[10rem]">
                    <span className="text-[10px] md:text-xs font-bold text-purple-400 uppercase tracking-wider">{pos.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Action Button */}
          {allCardsRevealed && !aiReading && !isLoadingAI && (
             <button 
               onClick={generateFullReading}
               className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold tracking-widest shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_50px_rgba(147,51,234,0.6)] transform hover:-translate-y-1 transition-all flex items-center gap-3 animate-in slide-in-from-bottom"
             >
               <span className="text-xl">✨</span> CONSULT THE ORACLE
             </button>
          )}

          {isLoadingAI && (
            <div className="mt-12 flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-purple-300 animate-pulse font-serif">Communing with the spirits...</p>
            </div>
          )}
        </div>

        {/* Right Side: Interpretation Panel */}
        <div className="lg:col-span-4 flex flex-col h-full max-h-[80vh]">
           <div className="glass-panel p-6 rounded-2xl flex-grow overflow-y-auto custom-scrollbar">
             <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4 sticky top-0 bg-transparent backdrop-blur-md z-10">Interpretation</h3>
             
             {revealedIndices.length === 0 && (
               <div className="h-full flex flex-col items-center justify-center text-gray-400 italic opacity-50">
                 <span className="text-4xl mb-2">🎴</span>
                 <p>Draw cards to begin...</p>
               </div>
             )}

             <div className="space-y-6 pb-20">
               {/* AI Reading Result with ReactMarkdown */}
               {aiReading && (
                 <div className="animate-in fade-in duration-1000 bg-purple-900/30 p-6 rounded-xl border border-purple-500/30 mb-8">
                   <div className="prose prose-invert prose-purple max-w-none">
                     <ReactMarkdown
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-2xl font-serif text-purple-300 border-b border-purple-500/30 pb-2 mb-4" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-xl font-bold text-white mt-6 mb-3 flex items-center gap-2" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-purple-200 mt-4 mb-2" {...props} />,
                          p: ({node, ...props}) => <p className="mb-4 text-gray-200 leading-relaxed" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 text-gray-300" {...props} />,
                          li: ({node, ...props}) => <li className="mb-1" {...props} />,
                          strong: ({node, ...props}) => <strong className="text-purple-300 font-bold" {...props} />
                        }}
                     >
                        {aiReading}
                     </ReactMarkdown>
                   </div>
                 </div>
               )}

               {/* Individual Card Interpretations (Hidden if AI reading is present to reduce clutter, or kept for reference? Let's keep them for reference below) */}
               {!aiReading && drawnCards.map((card, index) => {
                 if (!revealedIndices.includes(index)) return null;
                 const position = spread.positions[index];
                 const isReversed = reversedStates[index];

                 return (
                   <div key={card.id} className="animate-in slide-in-from-right duration-500 border-l-2 border-purple-500/20 pl-4 py-2 hover:bg-white/5 transition-colors rounded-r-lg">
                     <div className="flex items-center gap-2 mb-1">
                       <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                         {position.name}
                       </span>
                       {isReversed && (
                         <span className="text-red-400 text-[10px] font-bold border border-red-500/30 px-1 rounded">
                           REV
                         </span>
                       )}
                     </div>
                     <h4 className="text-lg font-bold text-white mb-1 font-serif">{card.name}</h4>
                     <p className="text-xs text-purple-200/80 mb-2 italic">
                       "{isReversed ? card.meaningReversed : card.meaningUpright}"
                     </p>
                     <p className="text-sm text-gray-400 leading-relaxed">
                       {card.description}
                     </p>
                   </div>
                 );
               })}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingRoom;
