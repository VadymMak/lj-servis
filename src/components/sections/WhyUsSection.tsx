import { WHY_US_ITEMS } from '@/lib/constants';
import styles from './WhyUsSection.module.css';

export default function WhyUsSection() {
  return (
    <section id="preco" className="section section--white">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Prečo my</span>
          <h2 className="section__title">6 dôvodov, prečo nás zákazníci odporúčajú</h2>
          <p className="section__subtitle">
            Každá oprava je pre nás príležitosťou ukázať, že elektronika sa dá opraviť správne.
          </p>
        </div>

        <div className={styles.grid}>
          {WHY_US_ITEMS.map((item) => (
            <div key={item.num} className={styles.item}>
              <div className={styles.itemNum}>{item.num}</div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
