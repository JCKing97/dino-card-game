export interface GameCardProps {
  title: string;
  description: string;
  image: string;
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
    title: 'Tyrannosaurus Rex',
    description: 'Ferocious carnivore!',
    image: "https://live.staticflickr.com/65535/55342339193_7c643e2acd_c.jpg"
  },
  {
    title: 'Brachiosaurus',
    description: 'Gentle giant!',
    image: "https://live.staticflickr.com/65535/55342406499_200e2b116b_c.jpg"
  },
  {
    title: 'Velociraptor',
    description: 'Pack hunter!',
    image: "https://live.staticflickr.com/65535/55342202106_4fb61d2f13_c.jpg"
  },
  {
    title: 'Triceratops',
    description: 'A three-horned herbivore',
    image: "https://live.staticflickr.com/65535/55342339203_563531d3bf_c.jpg"
  },
  {
    title: 'Stegosaurus',
    description: 'A spiny herbivore with a barbed tail',
    image: "https://live.staticflickr.com/65535/55342202066_1487f536cb_c.jpg"
  },
  {
    title: 'Pterodactyl',
    description: 'A flying pterosaur!',
    image: "https://live.staticflickr.com/65535/55342348978_b997274ed7_c.jpg"
  },
  {
    title: 'Archaeopteryx',
    description: 'The link between dinosaurs and birds!',
    image: "https://live.staticflickr.com/65535/55342202096_766c99d5e4_z.jpg"
  }
];
