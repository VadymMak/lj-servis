import { PRICE_CATEGORIES } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function PricingSection() {
  return (
    <section id="cennik" className="section section--gray">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Cenník</span>
          <h2 className="section__title">Transparentné ceny</h2>
          <p className="section__subtitle">
            Žiadne skryté poplatky. Konečnú cenu vždy určíme po bezplatnej diagnostike.
          </p>
        </div>

        <div className="pricing__grid">
          {PRICE_CATEGORIES.map((cat) => (
            <div key={cat.category} className="price-card">
              <div className="price-card__header">
                <div className="price-card__header-icon">
                  <Icon name={cat.icon} size={20} />
                </div>
                <h3 className="price-card__category">{cat.category}</h3>
              </div>
              <div className="price-card__body">
                {cat.items.map((item) => (
                  <div key={item.service} className="price-row">
                    <span className="price-row__service">{item.service}</span>
                    <span className="price-row__cost">{item.cost}</span>
                  </div>
                ))}
              </div>
              <div className="price-card__note">{cat.note}</div>
            </div>
          ))}
        </div>

        <p className="pricing__note">
          Diagnostika je vždy <strong>zadarmo</strong>. Platíte až po schválení opravy.
        </p>
      </div>
    </section>
  );
}
