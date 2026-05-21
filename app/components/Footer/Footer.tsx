import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['footer-grid']}>
          <div className={styles['footer-col']}>
            <h4>Visit</h4>
            <ul>
              <li><Link href="#">Plan your visit</Link></li>
              <li><Link href="#">Opening times</Link></li>
              <li><Link href="#">Tickets</Link></li>
              <li><Link href="#">Getting here</Link></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h4>Explore</h4>
            <ul>
              <li><Link href="#">Collections</Link></li>
              <li><Link href="#">Research</Link></li>
              <li><Link href="#">Scientists</Link></li>
              <li><Link href="#">Library</Link></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h4>Support us</h4>
            <ul>
              <li><Link href="#">Donate</Link></li>
              <li><Link href="#">Become a member</Link></li>
              <li><Link href="#">Volunteer</Link></li>
              <li><Link href="#">Corporate partnerships</Link></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h4>About us</h4>
            <ul>
              <li><Link href="#">Our story</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Contact us</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <p>&copy; 2024 Natural History Museum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
