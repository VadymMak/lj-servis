import { SERVICES } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section id="sluzby" className={`section section--gray ${styles.services}`}>
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Naše služby</span>
          <h2 className="section__title">Čo opravujeme</h2>
          <p className="section__subtitle">
            Opravujeme širokú škálu elektroniky — od smartfónov až po robotické vysávače.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon name={service.icon} size={24} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <span className={styles.cardPrice}>{service.priceFrom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
