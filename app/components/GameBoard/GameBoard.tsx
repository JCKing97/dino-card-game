import styles from './GameBoard.module.css';
import GameCard from '@/components/GameCard';

export default function GameBoard() {
  return (
    <div className={styles.['game-board-controls']}>
        <h1>Jurassic Jumble</h1>
        <div class={styles.['game-board-controls-buttons']}>
            <div class={styles.['game-board-controls-button']}>
                <Link href="#" className="btn">New Cards</Link>
            </div>
            <div class={styles.['game-board-controls-button']}>
                <Link href="#" className="btn">Snap!</Link>
            </div>
        </div>
    </div>
    <div className={styles.gameboard}>
      <div className={styles['game-board-card-container']}>
        <GameCard title="Tyrannosaurus Rex" description="Monstrous carnivore!" />
      </div>
      <div className={styles['game-board-card-container']}>
        <GameCard title="Diplodocus" description="Giant herbivore!" />
      </div>
    </div>
  );
}
