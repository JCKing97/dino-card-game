"use client";

import Link from 'next/link';
import styles from './GameBoard.module.css';
import GameCard from '@/components/GameCard';
import { useState, useEffect, useRef } from "react";
import { GameCardProps, getDinos, cardsEqual } from "../../lib/card-utils";

export default function GameBoard() {

  // State to hold the current cards
  const [countDown, setCountDown] = useState<number>(3);
  const [msg, setMsg] = useState<string>("Loading Dinos...");
  const [cards, setCards] = useState<{ left: GameCardProps | undefined, right: GameCardProps | undefined }>
    ({ left: undefined, right: undefined });
  const [gameboard, setGameboard] = useState<({ board: React.ReactNode | undefined })>({
    board: undefined
  });
  const [msgboard, setMsgboard] = useState<({ board: React.ReactNode })>({
    board: getNewGameboardWithMessage(msg, countDown)
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Functions to refresh the cards
  const handleSkip = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (countDown > 0)
      return
    const msg = await cardsEqual(cards.left, cards.right) ? "Missed a snap!" : "Well skipped!";
    setCountDown(3);
    setMsg(msg);
    setMsgboard({ board: getNewGameboardWithMessage(msg, 3) });
    await startCountdown(msg);
  };
  const handleSnap = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (countDown > 0)
      return
    const msg = await cardsEqual(cards.left, cards.right) ? "Snap!" : "Those didn't match!";
    setCountDown(3);
    setMsg(msg);
    setMsgboard({ board: getNewGameboardWithMessage(msg, 3) });
    await startCountdown(msg);
  };
  const doRefreshCards = async () => {
    console.debug('doRefreshCards: fetching dinos');
    try {
      const dinos = await getDinos(2);
      console.debug('doRefreshCards: received dinos', dinos);
      if (!dinos || dinos.length < 2) {
        throw new Error('Did not receive two dinos');
      }
      setCards({ left: dinos[0], right: dinos[1] });
      setGameboard({ board: getNewGameboardWithCards(dinos[0], dinos[1]) });
    } catch (err) {
      console.error('doRefreshCards: error', err);
      const errMsg = (err as Error)?.message ?? 'Failed to load dinos';
      setMsg(errMsg);
      setMsgboard({ board: getNewGameboardWithMessage(errMsg, 0) });
      setGameboard({ board: undefined });
      throw err;
    }
  };
  // Start a timer to update the countdown every second
  const startCountdown = async (m: string) => {
    // ensure cards are refreshed before starting timer so board is ready when countdown hits 0
    try {
      await doRefreshCards();
    } catch (err) {
      // do not start countdown if refresh failed
      return;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    timerRef.current = setInterval(() => {
      setCountDown((prevCountdown) => {
        if (prevCountdown <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return 0;
        }
        setMsgboard({ board: getNewGameboardWithMessage(m, prevCountdown - 1) });
        return prevCountdown - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    // start initial countdown on mount
    startCountdown(msg);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            </div>
        </div>
        <div className={styles.gameboard}>
          {countDown > 0  && ( msgboard.board )}
          {countDown <= 0 && ( gameboard.board )}
        </div>
    </div>
  );
}

function getNewGameboardWithCards(cardLeft: GameCardProps, cardRight: GameCardProps): React.ReactNode {
  console.log('getNewGameboardWithCards: cardLeft', cardLeft, 'cardRight', cardRight);
  return (
    <div className={styles['game-board-card-container']}>
        <div className={styles['game-board-card-container']}>
            <GameCard name={cardLeft.name} description={cardLeft.description} image={cardLeft.image} />
        </div>
        <div className={styles['game-board-card-container']}>
            <GameCard name={cardRight.name} description={cardRight.description} image={cardRight.image} />
        </div>
    </div>
  );
}

function getNewGameboardWithMessage(msg: String, countDown: number): React.ReactNode {
  return (
    <div className={styles['game-board-msg-container']}>
      <div className={styles['gameboard-msg-container-container']}>
        <div className={styles['game-board-msg']}>
          <p>{msg}</p>  
          <p>{countDown}</p>
        </div>
      </div>
    </div>
  );
}
