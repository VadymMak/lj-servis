import { PRICE_CATEGORIES } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  return (
    <section id="cennik" className="section section--gray">
      <div className="container">
        <ScrollReveal animation="fadeUp">
          <div className="section__header">
            <span className="section__tag">Cenník</span>
            <h2 className="section__title">Transparentné ceny</h2>
            <p className="section__subtitle">
              Žiadne skryté poplatky. Konečnú cenu vždy určíme po bezplatnej diagnostike.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {PRICE_CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.category} animation="fadeUp" delay={i * 100}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <Icon name={cat.icon} size={20} />
                  </div>
                  <h3 className={styles.cardCategory}>{cat.category}</h3>
                </div>
                <div className={styles.cardBody}>
                  {cat.items.map((item) => (
                    <div key={item.service} className={styles.row}>
                      <span className={styles.rowService}>{item.service}</span>
                      <span className={styles.rowCost}>{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.cardNote}>{cat.note}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeIn" delay={200}>
          <p className={styles.note}>
            Diagnostika je vždy <strong>zadarmo</strong>. Platíte až po schválení opravy.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
