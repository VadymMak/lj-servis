import { WHATSAPP_NUMBER } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
  return (
    <div className={styles.float}>
      <span className={styles.tooltip}>Napíšte nám</span>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
        aria-label="Kontaktovať cez WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </div>
  );
}
