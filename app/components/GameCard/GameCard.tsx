import styles from './GameCard.module.css';
import { GameCardProps } from "../../lib/card-utils";

export default function GameCard({ title, description, image }: GameCardProps) {
  return (
    <div className={styles.gamecard}>
      <div className={styles['game-card-content']}>
        <h3>{title}</h3>
        <img src={image} alt={title}/>
        <p>{description}</p>
      </div>
    </div>
  );
}
