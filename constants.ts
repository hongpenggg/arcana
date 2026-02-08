import { CardData, Spread } from './types';

// Helper to generate image URLs for Rider-Waite
const WIKI_BASE = "https://upload.wikimedia.org/wikipedia/commons";

export const MAJOR_ARCANA: CardData[] = [
  {
    id: 'major-0',
    name: 'The Fool',
    arcana: 'Major',
    number: 0,
    imageUrl: `${WIKI_BASE}/9/90/RWS_Tarot_00_Fool.jpg`,
    meaningUpright: "The Fool represents the very beginning of all journeys. It is the spirit of innocence, spontaneity, and the potential for infinite possibilities. When this card appears, it calls you to take a leap of faith, trusting that the universe will catch you. It encourages you to embrace the unknown with an open heart and a playful spirit, free from the cynicism of past experiences.",
    meaningReversed: "Reversed, The Fool warns of recklessness and poor judgment. You may be acting impulsively without considering the consequences of your actions. It can also signify a fear of the unknown that is holding you back from starting a necessary new chapter. You are either leaping before you look or refusing to leap at all.",
    description: "The Fool depicts a young man walking joyfully toward a cliff's edge, symbolizing the leap of faith into the unknown. He carries a small sack, representing his potential, and holds a white rose, a symbol of purity. A small dog snaps at his heels, representing the warnings of the real world which he happily ignores."
  },
  {
    id: 'major-1',
    name: 'The Magician',
    arcana: 'Major',
    number: 1,
    imageUrl: `${WIKI_BASE}/d/de/RWS_Tarot_01_Magician.jpg`,
    meaningUpright: "The Magician is the master of manifestation. This card signifies that you have all the tools, resources, and skills you need to achieve your goals. It is a powerful sign of inspired action, willpower, and the ability to turn your dreams into reality through focus and determination. As above, so below—you are the conduit for creating magic in your life.",
    meaningReversed: "When reversed, The Magician suggests manipulation, trickery, or wasted potential. You may be feeling disconnected from your power or unsure of how to proceed. It can also indicate that someone may not be showing you their true intentions, or that you are using your skills for selfish or unethical ends.",
    description: "The Magician stands with one arm stretching upwards to the Universe and the other pointing down to the earth, acting as a bridge between the spiritual and material realms. On the table before him are the four symbols of the Tarot suits—a cup, a pentacle, a sword, and a wand—representing the elements he commands."
  },
  {
    id: 'major-2',
    name: 'The High Priestess',
    arcana: 'Major',
    number: 2,
    imageUrl: `${WIKI_BASE}/8/88/RWS_Tarot_02_High_Priestess.jpg`,
    meaningUpright: "The High Priestess is the guardian of the subconscious and the keeper of sacred mysteries. She represents intuition, inner wisdom, and the divine feminine. When she appears, you are being called to trust your gut feelings and listen to the quiet voice within. It is a time for stillness, reflection, and connecting with the deeper truths that lie beneath the surface.",
    meaningReversed: "Reversed, The High Priestess indicates that you are ignoring your intuition or are out of touch with your inner self. Secrets may be kept from you, or you may be engaging in gossip and superficiality. It is a warning to stop looking for answers externally and instead turn your gaze inward.",
    description: "She sits in front of the thin veil of awareness, adorned with pomegranates, which separates the conscious mind from the subconscious. She holds a scroll of law and sits between two pillars, Boaz and Jachin, representing the duality of nature—darkness and light, severity and mercy."
  },
  {
    id: 'major-3',
    name: 'The Empress',
    arcana: 'Major',
    number: 3,
    imageUrl: `${WIKI_BASE}/d/d2/RWS_Tarot_03_Empress.jpg`,
    meaningUpright: "The Empress is the archetype of the Mother—abundant, nurturing, and deeply connected to nature. She brings a period of growth, fertility, and creative expression. This card encourages you to connect with your senses, enjoy the beauty of the world, and nurture your projects and relationships with love and care.",
    meaningReversed: "When reversed, The Empress suggests creative blocks or a lack of self-care. You may be focusing too much on others at the expense of your own well-being, or perhaps feeling smothered in a relationship. It can also indicate financial or domestic disharmony.",
    description: "The Empress sits on a comfortable throne surrounded by lush nature and a field of grain, signifying her connection to the earth and abundance. She wears a crown of twelve stars, representing the zodiac, showing her dominion over the cycle of the year."
  },
  {
    id: 'major-4',
    name: 'The Emperor',
    arcana: 'Major',
    number: 4,
    imageUrl: `${WIKI_BASE}/c/c3/RWS_Tarot_04_Emperor.jpg`,
    meaningUpright: "The Emperor represents structure, authority, and stability. He is the Father figure of the Tarot, offering protection and discipline. This card suggests that logic, order, and organization are needed to achieve your goals. It is a time to step into your power, set boundaries, and lead with a firm but fair hand.",
    meaningReversed: "Reversed, The Emperor can signify tyranny, rigidity, or a misuse of power. It may indicate a domineering figure in your life or your own tendency to be overly controlling and inflexible. Alternatively, it can suggest a lack of discipline and an inability to stand up for yourself.",
    description: "The Emperor sits on a solid stone throne, adorned with four rams' heads, representing Aries and intellectual power. He holds an ankh, the symbol of life, and an orb, representing the world over which he rules. His backdrop is stark mountains, emphasizing his resilience."
  },
  {
    id: 'major-5',
    name: 'The Hierophant',
    arcana: 'Major',
    number: 5,
    imageUrl: `${WIKI_BASE}/8/8d/RWS_Tarot_05_Hierophant.jpg`,
    meaningUpright: "The Hierophant represents spiritual tradition, religious beliefs, and conformity. He is a teacher and a guide who interprets sacred knowledge for the masses. This card suggests following established paths, seeking mentorship, or adhering to social structures and traditions. It is about finding comfort in shared belief systems.",
    meaningReversed: "Reversed, The Hierophant represents rebellion and challenging the status quo. You may be feeling restricted by traditional structures or are questioning authority. It is a call to find your own spiritual path and personal freedom, breaking away from the expectations of society.",
    description: "The Hierophant sits between two pillars of a sacred temple, wearing the three-tiered crown of the Pope. He holds a scepter and raises his hand in blessing. Two acolytes kneel before him, representing the transmission of wisdom to the next generation."
  },
  {
    id: 'major-6',
    name: 'The Lovers',
    arcana: 'Major',
    number: 6,
    imageUrl: `${WIKI_BASE}/d/db/RWS_Tarot_06_Lovers.jpg`,
    meaningUpright: "The Lovers card represents deep connection, harmony, and the union of opposites. While often associated with romantic love, it fundamentally signifies a major choice that must be made from the heart. It asks you to align your actions with your true values and to seek unity within yourself and with others.",
    meaningReversed: "Reversed, The Lovers suggests disharmony, imbalance, or a fear of commitment. You may be feeling torn between two choices or experiencing conflict in a relationship. It can also indicate that you are acting out of alignment with your core values, leading to internal fracture.",
    description: "A naked man and woman stand beneath the angel Raphael, representing physical and emotional healing. Behind the woman is the Tree of Knowledge with a serpent, and behind the man is the Tree of Life. They stand in the Garden of Eden, symbolizing innocence and vulnerability."
  },
  {
    id: 'major-7',
    name: 'The Chariot',
    arcana: 'Major',
    number: 7,
    imageUrl: `${WIKI_BASE}/9/9b/RWS_Tarot_07_Chariot.jpg`,
    meaningUpright: "The Chariot is a card of triumph, willpower, and determination. It signifies success achieved through discipline and control. You are being called to harness your opposing forces and direct them towards a singular goal. Victory is assured if you maintain your focus and do not let obstacles deter you.",
    meaningReversed: "Reversed, The Chariot warns of a lack of direction or losing control. You may be letting your emotions drive you, or you are facing aggression and opposition that feels overwhelming. It suggests a need to pause and re-evaluate your path before you crash.",
    description: "A warrior stands inside a chariot, driven by two sphinxes—one black and one white—representing duality. He holds no reins, controlling them through the power of his will alone. A canopy of stars protects him, linking him to the divine."
  },
  {
    id: 'major-8',
    name: 'Strength',
    arcana: 'Major',
    number: 8,
    imageUrl: `${WIKI_BASE}/f/f5/RWS_Tarot_08_Strength.jpg`,
    meaningUpright: "Strength represents courage, persuasion, and inner fortitude. It is not about brute force, but the power of the human spirit to overcome animalistic instincts with compassion and patience. You have the strength to endure whatever challenges you face, provided you approach them with grace and calmness.",
    meaningReversed: "Reversed, Strength indicates self-doubt, insecurity, or a weakness of will. You may be letting fear paralysis you or giving in to your baser impulses. It calls for you to reconnect with your inner core and find the confidence to face your demons.",
    description: "A woman gently strokes a lion, showing that true strength is not force, but resilience. She wears white for purity and is garlanded with flowers, symbolizing the civilized world interacting with the wild. The infinity symbol hovers above her head."
  },
  {
    id: 'major-9',
    name: 'The Hermit',
    arcana: 'Major',
    number: 9,
    imageUrl: `${WIKI_BASE}/4/4d/RWS_Tarot_09_Hermit.jpg`,
    meaningUpright: "The Hermit is a card of soul-searching and introspection. It suggests a time to withdraw from the noise of the world to seek your own inner truth. It is not about loneliness, but about the rich solitude needed to find the light of wisdom within yourself. You are being guided to look inward for answers.",
    meaningReversed: "Reversed, The Hermit warns of isolation and withdrawal that has gone too far. You may be cutting yourself off from others out of fear or sadness. Alternatively, it can mean you are avoiding self-reflection and are too distracted by the external world.",
    description: "The Hermit stands alone on the top of a snowy mountain with a lantern containing a six-pointed star, representing the seal of Solomon and wisdom. He holds a staff to guide his steps on the lonely path."
  },
  {
    id: 'major-10',
    name: 'Wheel of Fortune',
    arcana: 'Major',
    number: 10,
    imageUrl: `${WIKI_BASE}/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg`,
    meaningUpright: "The Wheel of Fortune reminds us that life is in constant flux. It represents good luck, karma, and destiny. A turning point is approaching, and the universe is working in your favor. It asks you to remain optimistic and adaptable, knowing that every phase of life is temporary.",
    meaningReversed: "Reversed, the Wheel suggests a run of bad luck or resistance to inevitable change. You may feel like the universe is working against you, but this is often a sign that you are clinging to the past. It asks you to accept what you cannot control and break negative cycles.",
    description: "A giant wheel floats in the sky, inscribed with alchemical symbols and the letters T-A-R-O. In the corners are the four fixed signs of the zodiac, reading books of wisdom, while a sphinx sits atop the wheel."
  },
  {
    id: 'major-11',
    name: 'Justice',
    arcana: 'Major',
    number: 11,
    imageUrl: `${WIKI_BASE}/e/e0/RWS_Tarot_11_Justice.jpg`,
    meaningUpright: "Justice signifies fairness, truth, and the law of cause and effect. It represents a time where your actions will be judged fairly. If you have acted with integrity, you have nothing to fear. It is a call to seek the truth, make balanced decisions, and accept accountability for your choices.",
    meaningReversed: "Reversed, Justice indicates dishonesty, unfairness, or a lack of accountability. You may be refusing to accept the consequences of your actions or feeling the victim of an injustice. It warns against trying to cheat the system or hide from the truth.",
    description: "The figure of Justice sits in front of a purple veil, holding scales in one hand to weigh the evidence and a double-edged sword in the other to deliver the verdict. She steps forward, showing action."
  },
  {
    id: 'major-12',
    name: 'The Hanged Man',
    arcana: 'Major',
    number: 12,
    imageUrl: `${WIKI_BASE}/2/2b/RWS_Tarot_12_Hanged_Man.jpg`,
    meaningUpright: "The Hanged Man represents surrender, letting go, and seeing things from a new perspective. It is a time of suspension and waiting. You are asked to pause and sacrifice your current view or desire to gain a greater understanding. Success comes not through action, but through yielding.",
    meaningReversed: "Reversed, The Hanged Man suggests stalling, unnecessary delay, and resistance to sacrifice. You may be holding onto control too tightly or playing the martyr. It is a sign that you need to make a move, as the period of useful suspension has passed.",
    description: "A man hangs upside down from a T-shaped living tree. His face is peaceful, and a halo glows around his head, indicating enlightenment. He chose this position voluntarily to gain wisdom."
  },
  {
    id: 'major-13',
    name: 'Death',
    arcana: 'Major',
    number: 13,
    imageUrl: `${WIKI_BASE}/d/d7/RWS_Tarot_13_Death.jpg`,
    meaningUpright: "Death is rarely about physical death; rather, it signifies a profound transformation, an ending that makes way for a new beginning. It is the card of transition and the shedding of what no longer serves you. Embrace the change, for it is inevitable and necessary for your growth.",
    meaningReversed: "Reversed, Death indicates a resistance to change. You are holding onto the past or decaying situations out of fear of the unknown. This stagnation is painful. The card urges you to release your grip and allow the transformation to occur.",
    description: "Death rides a white horse, holding a black flag with a white rose, symbolizing purification and immortality. A king has fallen, while a child and a bishop plead with him, showing that death respects no hierarchy."
  },
  {
    id: 'major-14',
    name: 'Temperance',
    arcana: 'Major',
    number: 14,
    imageUrl: `${WIKI_BASE}/f/f8/RWS_Tarot_14_Temperance.jpg`,
    meaningUpright: "Temperance is the card of balance, moderation, and alchemy. It calls for patience and the blending of opposites to create a harmonious middle path. You are being asked to find your center, avoid extremes, and proceed with a calm sense of purpose. It implies healing and long-term stability.",
    meaningReversed: "Reversed, Temperance suggests imbalance, excess, or impatience. You may be acting hastily or indulging too much in one area of your life. It indicates a clash of interests or a lack of long-term vision. Realign your energies and seek moderation.",
    description: "A winged angel with one foot on land and one in water pours liquid between two cups, defying gravity. On their chest is a triangle within a square, representing the spirit within matter. A path leads to a rising sun in the distance."
  },
  {
    id: 'major-15',
    name: 'The Devil',
    arcana: 'Major',
    number: 15,
    imageUrl: `${WIKI_BASE}/5/55/RWS_Tarot_15_Devil.jpg`,
    meaningUpright: "The Devil represents the shadow self, addiction, and attachment to the material world. It signifies the chains we forge for ourselves through obsession, fear, or toxic patterns. You may feel trapped, but the chains are loose—you have the power to free yourself if you choose to confront your shadow.",
    meaningReversed: "Reversed, The Devil is a powerful card of liberation. It indicates that you are breaking free from addictions, toxic relationships, or limiting beliefs. You are reclaiming your power and stepping out of the darkness. It is a time of releasing what has held you captive.",
    description: "The horned figure of Baphomet sits above a chained man and woman. They have horns and tails, showing their regression to animalistic nature. However, the chains around their necks are loose, implying their bondage is voluntary."
  },
  {
    id: 'major-16',
    name: 'The Tower',
    arcana: 'Major',
    number: 16,
    imageUrl: `${WIKI_BASE}/5/53/RWS_Tarot_16_Tower.jpg`,
    meaningUpright: "The Tower represents sudden, chaotic, and often destructive change. It is the collapse of false structures and beliefs. While terrifying, this upheaval is necessary to clear the ground for truth. It is a flash of enlightenment that shatters illusions. Trust that what remains is what is real.",
    meaningReversed: "Reversed, The Tower suggests that you are delaying the inevitable or narrowly avoiding disaster. It can also indicate a personal transformation that is internal rather than external. You may be resisting change, but the pressure is building. It is better to let the tower fall than to prop it up.",
    description: "A tall tower atop a craggy mountain is struck by lightning, and two figures fall from it. The crown at the top is blasted off, symbolizing the sudden fall of those in power or the destruction of ego."
  },
  {
    id: 'major-17',
    name: 'The Star',
    arcana: 'Major',
    number: 17,
    imageUrl: `${WIKI_BASE}/d/db/RWS_Tarot_17_Star.jpg`,
    meaningUpright: "The Star is the card of hope, renewal, and spiritual guidance. After the destruction of The Tower, The Star offers healing and inspiration. It signifies a period of peace, faith in the future, and a deep connection to the universe. You are being guided to follow your true north.",
    meaningReversed: "Reversed, The Star indicates a lack of faith, despair, or disconnection. You may be feeling hopeless or cynical about the future. It calls for you to nurture your self-esteem and reconnect with your spiritual practice. The light is there, even if you cannot see it right now.",
    description: "A naked woman kneels by a pool of water, pouring water onto the land (nourishment) and into the pool (subconscious). Above her shines a large star surrounded by seven smaller stars, representing the chakras."
  },
  {
    id: 'major-18',
    name: 'The Moon',
    arcana: 'Major',
    number: 18,
    imageUrl: `${WIKI_BASE}/7/7f/RWS_Tarot_18_Moon.jpg`,
    meaningUpright: "The Moon represents illusion, fear, and the subconscious. It is a time of uncertainty where things are not what they seem. You may be projecting your fears onto reality. It asks you to pay attention to your dreams and intuition, as they hold the key to navigating this misty landscape.",
    meaningReversed: "Reversed, The Moon signifies the release of fear and the lifting of illusions. Confusion is clearing, and you are beginning to see the truth of a situation. It can also indicate dealing with repressed emotions or mental health issues surfacing to be healed.",
    description: "A full moon shines down on a path between two towers. A dog and a wolf bay at the moon, representing the tame and wild aspects of the mind. A crayfish crawls out of a pool, symbolizing the emergence of consciousness."
  },
  {
    id: 'major-19',
    name: 'The Sun',
    arcana: 'Major',
    number: 19,
    imageUrl: `${WIKI_BASE}/1/17/RWS_Tarot_19_Sun.jpg`,
    meaningUpright: "The Sun is the most positive card in the deck, representing joy, success, vitality, and clarity. It brings warmth and enlightenment to any situation. Everything is illuminated, and you are radiating confidence and happiness. It is a resounding 'Yes' from the universe.",
    meaningReversed: "Reversed, The Sun still indicates positivity, but perhaps it is clouded or delayed. You may be struggling to see the bright side or your inner child is feeling neglected. It can also suggest being overly optimistic to the point of being unrealistic. Turn your face to the light.",
    description: "A large, bright sun with a human face shines in the sky. Beneath it, a young naked child rides a white horse, holding a red banner. Sunflowers grow in the background behind a brick wall."
  },
  {
    id: 'major-20',
    name: 'Judgement',
    arcana: 'Major',
    number: 20,
    imageUrl: `${WIKI_BASE}/d/dd/RWS_Tarot_20_Judgement.jpg`,
    meaningUpright: "Judgement is the card of rebirth and self-evaluation. It represents a spiritual awakening or a moment of reckoning where you must review your past actions to move forward. It is a call to rise up and embrace your higher calling. Absolution is available if you face the truth.",
    meaningReversed: "Reversed, Judgement suggests self-doubt and a refusal to heed the call. You may be judging yourself too harshly or ignoring the lessons of the past. It indicates a fear of change and a reluctance to transform. You are blocking your own rebirth.",
    description: "Archangel Gabriel blows a trumpet from the clouds. Below, men, women, and children rise from their coffins with arms outstretched, ready to be judged and accepted into the higher realm."
  },
  {
    id: 'major-21',
    name: 'The World',
    arcana: 'Major',
    number: 21,
    imageUrl: `${WIKI_BASE}/f/ff/RWS_Tarot_21_World.jpg`,
    meaningUpright: "The World represents completion, integration, and accomplishment. It is the end of a major cycle and the promise of a new beginning. You have achieved what you set out to do and feel a sense of wholeness and belonging. The world is literally at your feet.",
    meaningReversed: "Reversed, The World suggests a lack of closure. You may be so close to finishing a goal but are stuck at the final hurdle. It can indicate a need to tie up loose ends or a feeling of emptiness despite external success. The cycle is not yet complete.",
    description: "A figure dances inside a large laurel wreath, holding two batons. In the four corners are the same figures from the Wheel of Fortune, now completed: a man, an eagle, a bull, and a lion."
  }
];

const SUITS = ['Cups', 'Pentacles', 'Swords', 'Wands'] as const;
const NUMBERS = [
  { val: 'Ace', name: 'Ace' }, 
  { val: '2', name: 'Two' }, 
  { val: '3', name: 'Three' }, 
  { val: '4', name: 'Four' }, 
  { val: '5', name: 'Five' }, 
  { val: '6', name: 'Six' }, 
  { val: '7', name: 'Seven' }, 
  { val: '8', name: 'Eight' }, 
  { val: '9', name: 'Nine' }, 
  { val: '10', name: 'Ten' }, 
  { val: 'Page', name: 'Page' }, 
  { val: 'Knight', name: 'Knight' }, 
  { val: 'Queen', name: 'Queen' }, 
  { val: 'King', name: 'King' }
];

export const MINOR_ARCANA: CardData[] = [];

// Improved generation for Minor Arcana to provide more "real" feeling descriptions
SUITS.forEach(suit => {
  NUMBERS.forEach(num => {
    let meaningUp = "";
    let meaningRev = "";
    let desc = "";

    // Basic procedural generation for meanings based on Suit + Number archetypes
    if (suit === 'Cups') {
        meaningUp = `The ${num.name} of Cups speaks to the realm of emotions, relationships, and intuition. It suggests a time of emotional ${num.val === 'Ace' ? 'new beginnings and pure love' : num.val === '10' ? 'fulfillment and harmony' : 'experience within the heart'}.`;
        meaningRev = `Reversed, the ${num.name} of Cups indicates emotional blocks, moodiness, or a disconnect from one's feelings. It asks you to look inward to resolve internal conflicts.`;
        desc = `The imagery of Cups often involves water, flowing streams, and vessels, symbolizing the fluidity of human emotion.`;
    } else if (suit === 'Wands') {
        meaningUp = `The ${num.name} of Wands is driven by fire, passion, and creativity. It indicates high energy, ambition, and the ${num.val === 'Ace' ? 'spark of a new idea' : 'momentum towards a goal'}.`;
        meaningRev = `Reversed, the ${num.name} of Wands suggests burnout, lack of direction, or delays in your plans. The fire may be burning too hot or flickering out.`;
        desc = `Wands are often depicted with sprouting leaves, showing growth, vitality, and the raw power of nature and will.`;
    } else if (suit === 'Swords') {
        meaningUp = `The ${num.name} of Swords governs the intellect, logic, and communication. It represents the double-edged nature of the mind—capable of great clarity but also ${num.val === '3' ? 'sorrow' : 'conflict'}.`;
        meaningRev = `Reversed, the ${num.name} of Swords suggests mental fog, confusion, or hurtful words. It is a call to clear your mind and speak your truth carefully.`;
        desc = `Swords are sharp and often depicted amidst clouds or wind, symbolizing the swift and sometimes turbulent nature of thought.`;
    } else { // Pentacles
        meaningUp = `The ${num.name} of Pentacles deals with the material world: money, work, and health. It indicates manifestation, practical results, and ${num.val === 'Ace' ? 'a tangible opportunity' : 'hard work paying off'}.`;
        meaningRev = `Reversed, the ${num.name} of Pentacles warns of financial loss, greed, or a lack of focus on practical matters. You may be neglecting your physical reality.`;
        desc = `Pentacles are coins inscribed with a star, representing the value we place on the material world and the fruits of our labor.`;
    }

    MINOR_ARCANA.push({
      id: `minor-${suit}-${num.val}`,
      name: `${num.name} of ${suit}`,
      arcana: 'Minor',
      suit: suit,
      number: num.val,
      imageUrl: `https://picsum.photos/seed/${suit}${num.val}/200/350`, 
      meaningUpright: meaningUp,
      meaningReversed: meaningRev,
      description: desc
    });
  });
});

export const ALL_CARDS = [...MAJOR_ARCANA, ...MINOR_ARCANA];

export const SPREADS: Spread[] = [
  {
    id: 'single',
    name: 'Daily Draw',
    description: 'A single card to guide your day or answer a simple question.',
    positions: [
      { id: 1, name: 'The Card', description: 'The answer to your question or theme of the day.' }
    ]
  },
  {
    id: 'three-card',
    name: 'Past, Present, Future',
    description: 'A classic spread to understand the timeline of a situation.',
    positions: [
      { id: 1, name: 'Past', description: 'Influences from the past that affect the situation.' },
      { id: 2, name: 'Present', description: 'The current state of affairs and energy.' },
      { id: 3, name: 'Future', description: 'The likely outcome if the current path continues.' }
    ]
  },
  {
    id: 'mind-body-spirit',
    name: 'Mind, Body, Spirit',
    description: 'Check in with your holistic self.',
    positions: [
      { id: 1, name: 'Mind', description: 'Your current mental state and thoughts.' },
      { id: 2, name: 'Body', description: 'Your physical health and energy.' },
      { id: 3, name: 'Spirit', description: 'Your spiritual connection and inner wisdom.' }
    ]
  },
  {
    id: 'career-path',
    name: 'Career Path',
    description: 'Gain clarity on your professional trajectory.',
    positions: [
      { id: 1, name: 'Current Role', description: 'Where you are now professionally.' },
      { id: 2, name: 'Challenges', description: 'Obstacles standing in your way.' },
      { id: 3, name: 'Hidden Factors', description: 'What you might not be seeing.' },
      { id: 4, name: 'Advice', description: 'Action to take.' },
      { id: 5, name: 'Outcome', description: 'Potential result if advice is followed.' }
    ]
  },
  {
    id: 'love-match',
    name: 'Love & Relationships',
    description: 'Explore the dynamics of your heart.',
    positions: [
      { id: 1, name: 'You', description: 'Your role and feelings in the relationship.' },
      { id: 2, name: 'Them', description: 'Their role and feelings.' },
      { id: 3, name: 'The Bond', description: 'The nature of the connection.' },
      { id: 4, name: 'Challenges', description: 'Friction points.' },
      { id: 5, name: 'Potential', description: 'Where this relationship can go.' }
    ]
  },
  {
    id: 'celtic-cross',
    name: 'Celtic Cross',
    description: 'The most comprehensive spread for deep insight into any situation.',
    positions: [
      { id: 1, name: 'The Present', description: 'The core of the situation.' },
      { id: 2, name: 'The Challenge', description: 'What crosses you (obstacles).' },
      { id: 3, name: 'The Past', description: 'Events leading up to this.' },
      { id: 4, name: 'The Future', description: 'Immediate future influence.' },
      { id: 5, name: 'Above', description: 'Your goal or best outcome.' },
      { id: 6, name: 'Below', description: 'Subconscious influences.' },
      { id: 7, name: 'Advice', description: 'Suggested approach.' },
      { id: 8, name: 'External Influences', description: 'Environment and others.' },
      { id: 9, name: 'Hopes & Fears', description: 'Your psychological state.' },
      { id: 10, name: 'Outcome', description: 'Final resolution.' }
    ]
  }
];