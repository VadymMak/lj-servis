'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/images/gallery/cistenie-notebooku-01.webp',
    alt: 'Čistenie notebooku — ventilátory',
    caption: 'Čistenie notebooku',
  },
  {
    src: '/images/gallery/oprava-notebooku-01.webp',
    alt: 'Oprava notebooku — výmena klávesnice',
    caption: 'Výmena klávesnice',
  },
  {
    src: '/images/gallery/termopasta-01.webp',
    alt: 'Výmena termopasty — CPU',
    caption: 'Výmena termopasty',
  },
  {
    src: '/images/gallery/mikrospajkovanie-01.webp',
    alt: 'Mikrospájkovanie — oprava plošného spoja',
    caption: 'Mikrospájkovanie',
  },
  {
    src: '/images/gallery/oprava-televizora-01.webp',
    alt: 'Oprava televízora — napájacia doska',
    caption: 'Oprava televízora',
  },
  {
    src: '/images/gallery/oprava-notebooku-02.webp',
    alt: 'Oprava notebooku — základná doska',
    caption: 'Základná doska',
  },
];

export default function GallerySection() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const prev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, close, prev, next]);

  return (
    <section id="galeria" className="section section--white">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Galéria</span>
          <h2 className="section__title">Naše práce</h2>
          <p className="section__subtitle">
            Ukážky opráv z nášho servisu. Každé zariadenie dostáva plnú pozornosť.
          </p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onClick={() => setActive(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(index)}
              aria-label={item.alt}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className={styles.caption}>{item.caption}</div>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className={styles.overlay} onClick={close} role="dialog" aria-modal="true">
          <button className={styles.closeBtn} onClick={close} aria-label="Zavrieť">
            ×
          </button>

          <button
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Predchádzajúci"
          >
            ←
          </button>

          <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryItems[active].src}
              alt={galleryItems[active].alt}
              className={styles.overlayImg}
            />
            <p className={styles.overlayCaption}>{galleryItems[active].caption}</p>
          </div>

          <button
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Nasledujúci"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
