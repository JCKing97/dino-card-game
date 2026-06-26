import axios from "axios";
import dinoConfig from "../../dino.config";

export interface GameCardProps {
  name: string;
  description: string;
  image: string;
}

// Function to refresh two cards
export const getDinos = async (dinoCount: number): Promise<GameCardProps[]> => {
  const params = { dinoCount: dinoCount };
  const url = `/api/proxy/dinos`;
  console.debug('getDinos: request', { url, params });
  try {
    const response = await axios.get(url, { params });
    console.debug('getDinos: response', response.data);
    return response.data.dinos;
  } catch (err) {
    console.error('getDinos: error', err);
    throw err;
  }
};

// Function to check card equality
export const cardsEqual = async (card1: GameCardProps | undefined, card2: GameCardProps | undefined): Promise<boolean> => {
  if (card1 === undefined || card2 === undefined) {
    return true;
  }
  const params = { card1: card1.name, card2: card2.name };
  const url = `/api/proxy/dinos/allEqual`;
  console.debug('cardsEqual: request', { url, params });
  try {
    const response = await axios.get(url, { params });
    console.debug('cardsEqual: response', response.data);
    return response.data.equal;
  } catch (err) {
    console.error('cardsEqual: error', err);
    throw err;
  }
};

