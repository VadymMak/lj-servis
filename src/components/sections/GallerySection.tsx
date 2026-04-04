import { GALLERY_ITEMS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function GallerySection() {
  return (
    <section id="galeria" className="section section--white">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Galéria</span>
          <h2 className="section__title">Naše práce</h2>
          <p className="section__subtitle">
            Ukážky opráv z nášho servisu. Každé zariadenie dostáva plnú pozornosť.
          </p>
        </div>

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`gallery-item${item.large ? ' gallery-item--large' : ''}`}
            >
              <Icon name="image" size={60} className="gallery-item__placeholder" />
              <div className="gallery-item__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
