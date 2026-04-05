import { TRUST_ITEMS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import styles from './TrustBar.module.css';

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className={styles.item}>
              <div className={styles.itemIcon}>
                <Icon name={item.icon} size={22} />
              </div>
              <div>
                <div className={styles.itemNumber}>{item.number}</div>
                <div className={styles.itemLabel}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
