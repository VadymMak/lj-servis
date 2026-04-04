import { WHATSAPP_NUMBER } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__bg-diagonal" />
        <div className="hero__bg-dots" />
      </div>

      <div className="hero__content">
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Trenčín &amp; okolie
          </div>

          <h1 className="hero__title">
            Oprava elektroniky{' '}
            <span className="hero__title-accent">rýchlo</span> a{' '}
            <span className="hero__title-accent">spoľahlivo</span>
          </h1>

          <p className="hero__description">
            Profesionálny servis mobilných telefónov, notebookov, tabletov a ďalšej elektroniky.
            Diagnostika zadarmo. Záruka na každú opravu.
          </p>

          <div className="hero__actions">
            <a href="#kontakt" className="btn btn--primary">
              Objednať opravu
              <Icon name="arrow-right" size={16} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp
            </a>
          </div>

          <div className="hero__features">
            <div className="hero__feature">
              <Icon name="check" size={16} className="hero__feature-icon" />
              Diagnostika zadarmo
            </div>
            <div className="hero__feature">
              <Icon name="check" size={16} className="hero__feature-icon" />
              6-mesačná záruka
            </div>
            <div className="hero__feature">
              <Icon name="check" size={16} className="hero__feature-icon" />
              Férové ceny
            </div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__image-box">
            <Icon name="tool" size={120} className="hero__image-icon" />
          </div>

          <div className="hero__float-card hero__float-card--tl">
            <div className="hero__float-card-icon">
              <Icon name="check-circle" size={20} />
            </div>
            <div className="hero__float-card-text">
              <strong>Diagnostika zadarmo</strong>
              <span>bez skrytých poplatkov</span>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--br">
            <div className="hero__float-card-icon">
              <Icon name="shield" size={20} />
            </div>
            <div className="hero__float-card-text">
              <strong>6 mesiacov záruka</strong>
              <span>na každú opravu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
