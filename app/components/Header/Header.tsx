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
            <Link href="#" className={styles.link}>Visit</Link>
            <Link href="#" className={styles.link}>Explore</Link>
            <Link href="#" className={styles.link}>What's on</Link>
            <Link href="#" className={styles.link}>Support us</Link>
            <Link href="#" className={styles.link}>Shop</Link>
            <div
              className={styles['dropdown-container']}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="#"
                className={styles.link}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                Games
              </Link>
              {isDropdownOpen && (
                <div className={styles['dropdown-menu']}>
                  <Link href="#" className={styles['dropdown-link']}>Jigsaw Puzzles</Link>
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
