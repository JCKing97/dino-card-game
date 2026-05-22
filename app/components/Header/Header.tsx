"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles['header-main']}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/" className={styles.link}>Natural History Museum</Link>
          </div>
          <nav className={styles['header-nav']}>
            <Link href="#" className={styles.link}>Explore</Link>
            <Link href="#" className={styles.link}>What's on</Link>
            <Link href="#" className={styles.link}>Support us</Link>
            <Link href="#" className={styles.link}>Shop</Link>
            <div className={styles['dropdown-container']}>
              <Link href="#" className={styles.link} onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>Games&#x2335;</Link>
              {isDropdownOpen && (
                <div className={styles['dropdown-menu']}>
                  <Link href="/games/jurassic-jumble" className={styles['dropdown-link']}>Jurassic Jumble</Link>
                  <Link href="#" className={styles['dropdown-link']}>Memory Game</Link>
                  <Link href="#" className={styles['dropdown-link']}>Quiz</Link>
                  <Link href="#" className={styles['dropdown-link']}>Treasure Hunt</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
