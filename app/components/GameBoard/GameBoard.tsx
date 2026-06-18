"use client";

import Link from 'next/link';
import styles from './GameBoard.module.css';
import GameCard from '@/components/GameCard';
import { useState } from "react";
import { GameCardProps, getRandomCard, cardsEqual } from "../../lib/card-utils";

export default function GameBoard() {

  // State to hold the current cards
  const [cards, setCards] = useState({
    left: getRandomCard(),
    right: getRandomCard(),
  });
  const [gameboard, setGameboard] = useState({
    gameboard: getNewGameboardWithCards(cards.left, cards.right)
  });

  // Function to refresh the cards
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const msg = cardsEqual(cards.left, cards.right) ? "Missed a snap!" : "Well skipped!"; 
    setGameboard({ gameboard: getNewGameboardWithMessage(msg) });
  };
  const handleSnap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const msg = cardsEqual(cards.left, cards.right) ? "Snap!" : "Those didn't match!"; 
    setGameboard({ gameboard: getNewGameboardWithMessage(msg) });
  };
  const handleRefreshCards = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const cardLeft = getRandomCard();
    const cardRight = getRandomCard();
    setCards({ left: cardLeft, right: cardRight });
    setGameboard( { gameboard: getNewGameboardWithCards(cardLeft, cardRight) });
  };

  return (
    <div>
        <div className={styles['game-board-controls']}>
            <h1>Jurassic Jumble</h1>
            <p>Click Snap! when the cards match!</p>
            <div className={styles['game-board-controls-buttons']}>
                <div className={styles['game-board-controls-button']}>
                    <Link href="#" className="btn" onClick={handleSkip}>Skip!</Link>
                </div>
                <div className={styles['game-board-controls-button']}>
                    <Link href="#" className="btn" onClick={handleSnap}>Snap!</Link>
                </div>
                <div className={styles['game-board-controls-button']}>
                    <Link href="#" className="btn" onClick={handleRefreshCards}>Next!</Link>
                </div>
            </div>
        </div>
        <div className={styles.gameboard}>
            {gameboard.gameboard}
        </div>
    </div>
  );
}

function getNewGameboardWithCards(cardLeft: GameCardProps, cardRight: GameCardProps): React.ReactNode {
  return (
    <div className={styles['game-board-card-container']}>
        <div className={styles['game-board-card-container']}>
            <GameCard title={cardLeft.title} description={cardLeft.description} image={cardLeft.image} />
        </div>
        <div className={styles['game-board-card-container']}>
            <GameCard title={cardRight.title} description={cardRight.description} image={cardRight.image} />
        </div>
    </div>
  );
}

function getNewGameboardWithMessage(msg: String): React.ReactNode {
  return (
    <div className={styles['game-board-msg-container']}>
      <div className={styles['game-board-msg-container-container']}>
        <div className={styles['game-board-msg']}>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
}
