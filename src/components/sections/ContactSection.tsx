'use client';

import { useState } from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import LeafletMap from '@/components/ui/LeafletMap';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './ContactSection.module.css';

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
        <ScrollReveal animation="fadeUp">
          <div className="section__header">
            <span className="section__tag">Kontakt</span>
            <h2 className="section__title">Príďte alebo napíšte</h2>
            <p className="section__subtitle">
              Sme tu pre vás v Trenčíne. Diagnostika je vždy zadarmo.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal animation="fadeLeft">
            <div>
              <h3 className={styles.infoTitle}>Kde nás nájdete</h3>
              <div className={styles.infoList}>
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className={styles.infoItem}>
                    <div className={styles.infoItemIcon}>
                      <Icon name={item.icon} size={18} />
                    </div>
                    <div>
                      <div className={styles.infoItemLabel}>{item.label}</div>
                      <div className={styles.infoItemValue}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.map}>
                <LeafletMap
                  lat={48.8942}
                  lng={18.0442}
                  label="LJ Servis — oprava elektroniky"
                  height={220}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeRight">
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>
                    <Icon name="check" size={28} />
                  </div>
                  <h3 className={styles.successTitle}>Správa odoslaná!</h3>
                  <p>Ozveme sa vám čo najskôr. Ďakujeme za záujem.</p>
                </div>
              ) : (
                <>
                  <h3 className={styles.formTitle}>Napíšte nám</h3>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="name">Meno</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className={styles.formInput}
                          placeholder="Vaše meno"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="phone">Telefón</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className={styles.formInput}
                          placeholder="+421 900 000 000"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="device">Zariadenie</label>
                      <input
                        id="device"
                        name="device"
                        type="text"
                        className={styles.formInput}
                        placeholder="napr. iPhone 13, ASUS notebook..."
                        value={form.device}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="message">Popis problému</label>
                      <textarea
                        id="message"
                        name="message"
                        className={styles.formTextarea}
                        placeholder="Opíšte závadu alebo čo potrebujete opraviť..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className={styles.formSubmit} disabled={loading}>
                      {loading ? 'Odosielam...' : 'Odoslať správu'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
