import { WHATSAPP_NUMBER } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function WhatsAppFloat() {
  return (
    <div className="whatsapp-float">
      <span className="whatsapp-float__tooltip">Napíšte nám</span>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float__btn"
        aria-label="Kontaktovať cez WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </div>
  );
}
