import styles from './GameCard.module.css';
import { GameCardProps } from "../../lib/card-utils";

export default function GameCard({ name, description, image }: GameCardProps) {
  return (
    <div className={styles.gamecard}>
      <div className={styles['game-card-content']}>
        <h3>{name}</h3>
        <img src={image} alt={name}/>
        <p>{description}</p>
      </div>
    </div>
  );
}
