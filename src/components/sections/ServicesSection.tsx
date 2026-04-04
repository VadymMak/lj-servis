import { SERVICES } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function ServicesSection() {
  return (
    <section id="sluzby" className="section section--gray services">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Naše služby</span>
          <h2 className="section__title">Čo opravujeme</h2>
          <p className="section__subtitle">
            Opravujeme širokú škálu elektroniky — od smartfónov až po robotické vysávače.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-card__icon">
                <Icon name={service.icon} size={24} />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <span className="service-card__price">{service.priceFrom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
