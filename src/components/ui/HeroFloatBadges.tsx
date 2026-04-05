'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/Icon';
import styles from '@/components/sections/HeroSection.module.css';

export default function HeroFloatBadges() {
  const [showTl, setShowTl] = useState(false);
  const [showBr, setShowBr] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTl(true), 1000);
    const t2 = setTimeout(() => setShowBr(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      <div className={`${styles.floatCard} ${styles.floatCardTl} ${showTl ? styles.floatCardVisible : ''}`}>
        <div className={styles.floatCardIcon}>
          <Icon name="check-circle" size={20} />
        </div>
        <div className={styles.floatCardText}>
          <strong>Diagnostika zadarmo</strong>
          <span>bez skrytých poplatkov</span>
        </div>
      </div>

      <div className={`${styles.floatCard} ${styles.floatCardBr} ${showBr ? styles.floatCardVisible : ''}`}>
        <div className={styles.floatCardIcon}>
          <Icon name="shield" size={20} />
        </div>
        <div className={styles.floatCardText}>
          <strong>6 mesiacov záruka</strong>
          <span>na každú opravu</span>
        </div>
      </div>
    </>
  );
}
