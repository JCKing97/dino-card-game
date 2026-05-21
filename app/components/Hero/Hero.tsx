import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Discover the wonders of the natural world</h1>
        <p>Explore our collections, exhibitions, and events</p>
        <Link href="#" className="btn">Plan your visit</Link>
      </div>
    </section>
  );
}
