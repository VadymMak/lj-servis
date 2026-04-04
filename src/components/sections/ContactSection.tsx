'use client';

import { useState } from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

interface FormState {
  name: string;
  phone: string;
  device: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', device: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="section section--white">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Kontakt</span>
          <h2 className="section__title">Príďte alebo napíšte</h2>
          <p className="section__subtitle">
            Sme tu pre vás v Trenčíne. Diagnostika je vždy zadarmo.
          </p>
        </div>

        <div className="contact__grid">
          <div>
            <h3 className="contact__info-title">Kde nás nájdete</h3>
            <div className="contact__info-list">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-item__icon">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <div className="contact-info-item__label">{item.label}</div>
                    <div className="contact-info-item__value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact__map">
              <Icon name="map" size={32} />
              &nbsp; Mapa — Trenčín
            </div>
          </div>

          <div className="contact__form-card">
            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon">
                  <Icon name="check" size={28} />
                </div>
                <h3 className="form-success__title">Správa odoslaná!</h3>
                <p>Ozveme sa vám čo najskôr. Ďakujeme za záujem.</p>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Napíšte nám</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Meno</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Vaše meno"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Telefón</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+421 900 000 000"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="device">Zariadenie</label>
                    <input
                      id="device"
                      name="device"
                      type="text"
                      className="form-input"
                      placeholder="napr. iPhone 13, ASUS notebook..."
                      value={form.device}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Popis problému</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Opíšte závadu alebo čo potrebujete opraviť..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? 'Odosielam...' : 'Odoslať správu'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
