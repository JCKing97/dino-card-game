import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

export default function Card({ title, description, buttonText }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles['card-content']}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href="#" className="btn">{buttonText}</Link>
      </div>
    </div>
  );
}
