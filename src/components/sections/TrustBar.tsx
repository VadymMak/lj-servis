import { TRUST_ITEMS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './TrustBar.module.css';

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {TRUST_ITEMS.map((item, i) => (
            <ScrollReveal key={item.label} animation="fadeUp" delay={i * 80}>
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Icon name={item.icon} size={22} />
                </div>
                <div>
                  <div className={styles.itemNumber}>{item.number}</div>
                  <div className={styles.itemLabel}>{item.label}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
