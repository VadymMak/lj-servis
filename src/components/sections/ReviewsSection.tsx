import { REVIEWS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import styles from './ReviewsSection.module.css';

export default function ReviewsSection() {
  return (
    <section className="section section--gray">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Recenzie</span>
          <h2 className="section__title">Čo hovoria naši zákazníci</h2>
          <p className="section__subtitle">
            Overené hodnotenia od ľudí, ktorým sme pomohli s opravou elektroniky.
          </p>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((review) => (
            <div key={review.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{review.initials}</div>
                <div>
                  <div className={styles.authorName}>{review.name}</div>
                  <div className={styles.authorDevice}>{review.device}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.badge}>
          <Icon name="star" size={16} />
          <span>
            Priemerné hodnotenie <strong>4.9 / 5</strong> na Google
          </span>
        </div>
      </div>
    </section>
  );
}
