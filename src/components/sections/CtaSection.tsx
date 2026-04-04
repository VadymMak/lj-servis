import { WHATSAPP_NUMBER } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function CtaSection() {
  return (
    <section className="section section--orange cta">
      <div className="container">
        <div className="cta__inner">
          <h2 className="cta__title">
            Máte pokazenú elektroniku?
          </h2>
          <p className="cta__subtitle">
            Prinesťe zariadenie na bezplatnú diagnostiku. Zistíme problém a navrhneme riešenie
            bez záväzkov.
          </p>
          <div className="cta__actions">
            <a href="#kontakt" className="btn btn--ghost">
              Kontaktovať nás
              <Icon name="arrow-right" size={16} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <Icon name="whatsapp" size={18} />
              Napísať na WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
