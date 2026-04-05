import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import HeroFloatBadges from '@/components/ui/HeroFloatBadges';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.bgDiagonal} />
        <div className={styles.bgDots} />
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Trenčín &amp; okolie
          </div>

          <h1 className={styles.title}>
            Oprava elektroniky{' '}
            <span className={styles.titleAccent}>rýchlo</span> a{' '}
            <span className={styles.titleAccent}>spoľahlivo</span>
          </h1>

          <p className={styles.description}>
            Profesionálny servis mobilných telefónov, notebookov, tabletov a ďalšej elektroniky.
            Diagnostika zadarmo. Záruka na každú opravu.
          </p>

          <div className={styles.actions}>
            <a href="#kontakt" className="btn btn--primary">
              Objednať opravu
              <Icon name="arrow-right" size={16} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp
            </a>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Icon name="check" size={16} className={styles.featureIcon} />
              Diagnostika zadarmo
            </div>
            <div className={styles.feature}>
              <Icon name="check" size={16} className={styles.featureIcon} />
              6-mesačná záruka
            </div>
            <div className={styles.feature}>
              <Icon name="check" size={16} className={styles.featureIcon} />
              Férové ceny
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-banner.webp"
              alt="Servis elektroniky — notebooky, telefóny, tablety"
              width={600}
              height={400}
              priority
              className={styles.image}
            />
          </div>

          <HeroFloatBadges />
        </div>
      </div>
    </section>
  );
}
