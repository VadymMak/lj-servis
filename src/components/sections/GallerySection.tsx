import { GALLERY_ITEMS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import styles from './GallerySection.module.css';

export default function GallerySection() {
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
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${styles.item}${item.large ? ` ${styles.itemLarge}` : ''}`}
            >
              <Icon name="image" size={60} className={styles.itemPlaceholder} />
              <div className={styles.itemLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
