import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-main']}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/" className={styles.homelink}>Natural History Museum</Link>
          </div>
          <nav className={styles['header-nav']}>
            <Link href="#" className={styles.link}>Visit</Link>
            <Link href="#" className={styles.link}>Explore</Link>
            <Link href="#" className={styles.link}>What's on</Link>
            <Link href="#" className={styles.link}>Support us</Link>
            <Link href="#" className={styles.link}>Shop</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
