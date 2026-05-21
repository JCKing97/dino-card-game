import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-top']}>
        <div className={styles.container}>
          <span>Welcome to the Natural History Museum</span>
          <div>
            <Link href="#" className={styles.link}>Sign in</Link> |
            <Link href="#" className={styles.link}>Help</Link>
          </div>
        </div>
      </div>
      <div className={styles['header-main']}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              src="https://www.nhm.ac.uk/content/dam/nhmwww/about-us/logo-nhm.svg"
              alt="Natural History Museum Logo"
              width={150}
            />
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
