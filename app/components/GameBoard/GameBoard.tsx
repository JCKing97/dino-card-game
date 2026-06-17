"use client";

import Link from 'next/link';
import styles from './GameBoard.module.css';
import GameCard from '@/components/GameCard';
import { useState } from "react";
import { refreshCards } from "./card-utils";

interface GameBoardProps {
  gameCardLeft: React.ReactNode;
  gameCardRight: React.ReactNode;
}

interface GameCardProps {
  title: string;
  description: string;
}

export default function GameBoard() {

  // State to hold the current cards
  const [cards, setCards] = useState<[GameCardProps, GameCardProps]>([
    { title: 'T-Rex', description: 'Ferocious carnivore!' },
    { title: 'Diplodocus', description: 'Gentle giant!' },
  ]);

  // Function to refresh the cards
  const handleRefreshCards = () => {
    const newCards = refreshCards();
    setCards(newCards);
  };

  return (
    <div>
        <div className={styles['game-board-controls']}>
            <h1>Jurassic Jumble</h1>
            <p>Click Snap! when the cards match!</p>
            <div className={styles['game-board-controls-buttons']}>
                <div className={styles['game-board-controls-button']}>
                    <Link href="#" className="btn" onClick={handleRefreshCards}>Skip!</Link>
                </div>
                <div className={styles['game-board-controls-button']}>
                    <Link href="#" className="btn" onClick={handleRefreshCards}>Snap!</Link>
                </div>
            </div>
        </div>
        <div className={styles.gameboard}>
            <div className={styles['game-board-card-container']}>
                <div className={styles['game-board-card-container']}>
                    <GameCard title={cards[0].title} description={cards[0].description} />
                </div>
                <div className={styles['game-board-card-container']}>
                    <GameCard title={cards[1].title} description={cards[1].description} />
                </div>
            </div>
        </div>
    </div>
  );
}
