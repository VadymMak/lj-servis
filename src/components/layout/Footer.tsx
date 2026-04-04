import { NAV_LINKS, PHONE_NUMBER, SITE_TAGLINE } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <div className="footer__logo-mark">LJ</div>
              <span className="footer__logo-name">LJ Servis</span>
            </div>
            <p className="footer__tagline">{SITE_TAGLINE}</p>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="footer__link">
              <div className="footer__contact-item">
                <Icon name="phone" size={14} className="footer__contact-icon" />
                {PHONE_NUMBER}
              </div>
            </a>
          </div>

          <div>
            <h4 className="footer__col-title">Navigácia</h4>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Služby</h4>
            <ul className="footer__links">
              <li><a href="#sluzby" className="footer__link">Mobilné telefóny</a></li>
              <li><a href="#sluzby" className="footer__link">Notebooky</a></li>
              <li><a href="#sluzby" className="footer__link">Tablety</a></li>
              <li><a href="#sluzby" className="footer__link">Bluetooth zariadenia</a></li>
              <li><a href="#sluzby" className="footer__link">Robotické vysávače</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Kontakt</h4>
            <div className="footer__contact-item">
              <Icon name="location" size={14} className="footer__contact-icon" />
              <span>Trenčín, Slovensko</span>
            </div>
            <div className="footer__contact-item">
              <Icon name="clock" size={14} className="footer__contact-icon" />
              <span>Pon–Pia: 9:00–18:00</span>
            </div>
            <div className="footer__contact-item">
              <Icon name="clock" size={14} className="footer__contact-icon" />
              <span>Sob: 9:00–13:00</span>
            </div>
            <div className="footer__contact-item">
              <Icon name="email" size={14} className="footer__contact-icon" />
              <span>info@ljservis.sk</span>
            </div>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; {year} LJ Servis. Všetky práva vyhradené.
          </span>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link">Ochrana súkromia</a>
            <a href="#" className="footer__link">Podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
