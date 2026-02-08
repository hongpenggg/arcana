import React from 'react';

const Guide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-white mb-4">A Beginner's Guide to Tarot</h2>
        <p className="text-purple-300">Unlock the mysteries of the cards.</p>
      </div>

      <div className="space-y-12">
        <section className="glass-panel p-8 rounded-2xl">
          <h3 className="text-2xl font-serif text-white mb-4">What is Tarot?</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Tarot is a tool for storytelling, reflection, and intuition. It consists of a deck of 78 cards, each with its own imagery, symbolism, and story. It is not necessarily about predicting the future, but rather reflecting on the present to make better choices for the future.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-serif text-purple-200 mb-3">The Major Arcana</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The 22 cards of the Major Arcana represent life's karmic and spiritual lessons. They follow a path known as "The Fool's Journey," starting from The Fool (0) and ending with The World (21). When these appear, they point to significant life events.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-serif text-purple-200 mb-3">The Minor Arcana</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The 56 cards of the Minor Arcana reflect the trials and tribulations that we experience on a daily basis. They are divided into four suits: Cups (emotions), Swords (intellect), Wands (passion), and Pentacles (material world).
            </p>
          </div>
        </section>

        <section className="glass-panel p-8 rounded-2xl">
          <h3 className="text-2xl font-serif text-white mb-4">How to Read</h3>
          <ol className="space-y-6 text-gray-300">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">1</span>
              <div>
                <strong className="text-white block mb-1">Clear your mind</strong>
                Take a deep breath. Focus on a specific question or ask for general guidance.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">2</span>
              <div>
                <strong className="text-white block mb-1">Shuffle and Draw</strong>
                Shuffle the cards while holding your question in mind. When you feel ready, draw the cards for your spread.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">3</span>
              <div>
                <strong className="text-white block mb-1">Interpret the Story</strong>
                Look at the imagery. How does it make you feel? Read the meanings but trust your intuition first. How do the cards relate to each other?
              </div>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Guide;
