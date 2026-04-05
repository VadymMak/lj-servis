'use client';

import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS, PHONE_NUMBER } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const shouldHide = y > lastScrollY.current && y > 100;
      document.documentElement.style.setProperty('--header-visible', shouldHide ? '0' : '1');
      lastScrollY.current = y;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      style={{
        transform: 'translateY(calc((1 - var(--header-visible, 1)) * -100%))',
        transition: 'transform 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
      }}
    >
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
