'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS, PHONE_NUMBER } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="/" className="header__logo">
          <div className="header__logo-mark">LJ</div>
          <div className="header__logo-text">
            <span className="header__logo-name">LJ Servis</span>
            <span className="header__logo-tagline">oprava elektroniky</span>
          </div>
        </a>

        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__cta">
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="header__phone">
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
