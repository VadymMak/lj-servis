import { WHY_US_ITEMS } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './WhyUsSection.module.css';

export default function WhyUsSection() {
  return (
    <section id="preco" className="section section--white">
      <div className="container">
        <ScrollReveal animation="fadeUp">
          <div className="section__header">
            <span className="section__tag">Prečo my</span>
            <h2 className="section__title">6 dôvodov, prečo nás zákazníci odporúčajú</h2>
            <p className="section__subtitle">
              Každá oprava je pre nás príležitosťou ukázať, že elektronika sa dá opraviť správne.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {WHY_US_ITEMS.map((item, i) => (
            <ScrollReveal key={item.num} animation="fadeUp" delay={i * 80}>
              <div className={styles.item}>
                <div className={styles.itemNum}>{item.num}</div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
