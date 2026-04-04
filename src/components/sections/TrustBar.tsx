import { TRUST_ITEMS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__inner">
        <div className="trust-bar__grid">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="trust-item">
              <div className="trust-item__icon">
                <Icon name={item.icon} size={22} />
              </div>
              <div>
                <div className="trust-item__number">{item.number}</div>
                <div className="trust-item__label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
