'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS, PHONE_NUMBER } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoMark}>LJ</div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>LJ Servis</span>
            <span className={styles.logoTagline}>oprava elektroniky</span>
          </div>
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.cta}>
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className={styles.phone}>
            {PHONE_NUMBER}
          </a>
          <a href="#kontakt" className="btn btn--primary">
            Kontaktovať
          </a>
        </div>
      </div>
    </header>
  );
}
