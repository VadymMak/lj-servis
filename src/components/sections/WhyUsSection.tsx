import { WHY_US_ITEMS } from '@/lib/constants';

export default function WhyUsSection() {
  return (
    <section id="preco" className="section section--white">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Prečo my</span>
          <h2 className="section__title">6 dôvodov, prečo nás zákazníci odporúčajú</h2>
          <p className="section__subtitle">
            Každá oprava je pre nás príležitosťou ukázať, že elektronika sa dá opraviť správne.
          </p>
        </div>

        <div className="why-us__grid">
          {WHY_US_ITEMS.map((item) => (
            <div key={item.num} className="why-item">
              <div className="why-item__num">{item.num}</div>
              <h3 className="why-item__title">{item.title}</h3>
              <p className="why-item__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
