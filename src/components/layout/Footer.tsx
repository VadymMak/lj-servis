import { NAV_LINKS, PHONE_NUMBER, SITE_TAGLINE } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <div className={styles.logoMark}>LJ</div>
              <span className={styles.logoName}>LJ Servis</span>
            </div>
            <p className={styles.tagline}>{SITE_TAGLINE}</p>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className={styles.link}>
              <div className={styles.contactItem}>
                <Icon name="phone" size={14} className={styles.contactIcon} />
                {PHONE_NUMBER}
              </div>
            </a>
          </div>

          <div>
            <h4 className={styles.colTitle}>Navigácia</h4>
            <ul className={styles.links}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Služby</h4>
            <ul className={styles.links}>
              <li><a href="#sluzby" className={styles.link}>Mobilné telefóny</a></li>
              <li><a href="#sluzby" className={styles.link}>Notebooky</a></li>
              <li><a href="#sluzby" className={styles.link}>Tablety</a></li>
              <li><a href="#sluzby" className={styles.link}>Bluetooth zariadenia</a></li>
              <li><a href="#sluzby" className={styles.link}>Robotické vysávače</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Kontakt</h4>
            <div className={styles.contactItem}>
              <Icon name="location" size={14} className={styles.contactIcon} />
              <span>Trenčín, Slovensko</span>
            </div>
            <div className={styles.contactItem}>
              <Icon name="clock" size={14} className={styles.contactIcon} />
              <span>Pon–Pia: 9:00–18:00</span>
            </div>
            <div className={styles.contactItem}>
              <Icon name="clock" size={14} className={styles.contactIcon} />
              <span>Sob: 9:00–13:00</span>
            </div>
            <div className={styles.contactItem}>
              <Icon name="email" size={14} className={styles.contactIcon} />
              <span>info@ljservis.sk</span>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <span className={styles.copy}>
            &copy; {year} LJ Servis. Všetky práva vyhradené.
          </span>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.link}>Ochrana súkromia</a>
            <a href="#" className={styles.link}>Podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
