import { REVIEWS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './ReviewsSection.module.css';

export default function ReviewsSection() {
  return (
    <section className="section section--gray">
      <div className="container">
        <ScrollReveal animation="fadeUp">
          <div className="section__header">
            <span className="section__tag">Recenzie</span>
            <h2 className="section__title">Čo hovoria naši zákazníci</h2>
            <p className="section__subtitle">
              Overené hodnotenia od ľudí, ktorým sme pomohli s opravou elektroniky.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={review.name} animation="fadeUp" delay={i * 100}>
              <div className={styles.card}>
                <div className={styles.stars}>
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Icon key={j} name="star" size={16} />
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
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeIn" delay={150}>
          <div className={styles.badge}>
            <Icon name="star" size={16} />
            <span>
              Priemerné hodnotenie <strong>4.9 / 5</strong> na Google
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
