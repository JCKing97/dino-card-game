interface GameCardProps {
  title: string;
  description: string;
}

// Function to generate a random card
export const getRandomCard = (): GameCardProps => {
  return dinos[Math.floor(Math.random() * dinos.length)];
};

// Function to refresh two cards
export const refreshCards = (): [GameCardProps, GameCardProps] => {
  const card1 = getRandomCard();
  const card2 = getRandomCard();
  return [card1, card2];
};

const dinos = [
  {
    title: 'T-Rex',
    description: 'Ferocious carnivore!'
  },
  {
    title: 'Diplodocus',
    description: 'Gentle giant!'
  },
  {
    title: 'Velociraptor',
    description: 'Pack hunter!'
  }
];
