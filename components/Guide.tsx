import React from 'react';

const Guide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3 sm:mb-4">A Beginner's Guide to Tarot</h2>
        <p className="text-sm sm:text-base text-purple-300">Unlock the mysteries of the cards.</p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        <section className="glass-panel p-6 sm:p-8 rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 sm:mb-4">What is Tarot?</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
            Tarot is a tool for storytelling, reflection, and intuition. It consists of a deck of 78 cards, each with its own imagery, symbolism, and story. It is not necessarily about predicting the future, but rather reflecting on the present to make better choices for the future.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg sm:text-xl font-serif text-purple-200 mb-2 sm:mb-3">The Major Arcana</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              The 22 cards of the Major Arcana represent life's karmic and spiritual lessons. They follow a path known as "The Fool's Journey," starting from The Fool (0) and ending with The World (21). When these appear, they point to significant life events.
            </p>
          </div>
          <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg sm:text-xl font-serif text-purple-200 mb-2 sm:mb-3">The Minor Arcana</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              The 56 cards of the Minor Arcana reflect the trials and tribulations that we experience on a daily basis. They are divided into four suits: Cups (emotions), Swords (intellect), Wands (passion), and Pentacles (material world).
            </p>
          </div>
        </section>

        <section className="glass-panel p-6 sm:p-8 rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-serif text-white mb-4 sm:mb-6">How to Read</h3>
          <ol className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300">
            <li className="flex gap-3 sm:gap-4">
              <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-sm sm:text-base">1</span>
              <div>
                <strong className="text-white block mb-1">Clear your mind</strong>
                <span className="text-xs sm:text-sm">Take a deep breath. Focus on a specific question or ask for general guidance.</span>
              </div>
            </li>
            <li className="flex gap-3 sm:gap-4">
              <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-sm sm:text-base">2</span>
              <div>
                <strong className="text-white block mb-1">Shuffle and Draw</strong>
                <span className="text-xs sm:text-sm">Shuffle the cards while holding your question in mind. When you feel ready, draw the cards for your spread.</span>
              </div>
            </li>
            <li className="flex gap-3 sm:gap-4">
              <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-sm sm:text-base">3</span>
              <div>
                <strong className="text-white block mb-1">Interpret the Story</strong>
                <span className="text-xs sm:text-sm">Look at the imagery. How does it make you feel? Read the meanings but trust your intuition first. How do the cards relate to each other?</span>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Guide;
