import { useState, type FormEvent } from 'react';
import { TopBar } from '../components/TopBar';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { WAIcon } from '../components/Icons';
import { WA_URL, WHATSAPP_DISPLAY } from '../data';

interface ContactForm { name: string; what: string; when: string; details: string; }

function ContactHero() {
  const [form, setForm] = useState<ContactForm>({ name: '', what: '', when: '', details: '' });

  const message = () => {
    const lines = [
      `Hi Samke! I'd like to enquire about a piece.`,
      ``,
      form.name    ? `Name: ${form.name}` : '',
      form.what    ? `Looking for: ${form.what}` : '',
      form.when    ? `Needed by: ${form.when}` : '',
      form.details ? `Details: ${form.details}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(WA_URL(message()), '_blank');
  };

  return (
    <section className="contact-hero">
      <div className="container contact-hero-grid">
        <div className="contact-text">
          <span className="eyebrow">Get in touch</span>
          <h1 className="h-display">
            Let's <em>make</em><br/>
            <span className="script">something</span><br/>
            together.
          </h1>
          <p className="lead" style={{ marginTop: 28 }}>
            All orders happen on WhatsApp. Use the form to start your message —
            it'll open WhatsApp pre-filled with what you've shared.
          </p>

          <div className="contact-info">
            <div className="contact-info-row">
              <span className="contact-label">WhatsApp</span>
              <a href={WA_URL()} className="contact-value">{WHATSAPP_DISPLAY}</a>
            </div>
            <div className="contact-info-row">
              <span className="contact-label">Studio</span>
              <span className="contact-value">Durban, South Africa</span>
            </div>
            <div className="contact-info-row">
              <span className="contact-label">Hours</span>
              <span className="contact-value">Mon — Sat · 9:00 — 18:00</span>
            </div>
            <div className="contact-info-row">
              <span className="contact-label">Reply time</span>
              <span className="contact-value">Within a few hours</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-deco">№ Enquiry</div>
          <h3 className="form-title">Start your <em>message</em></h3>
          <div className="form-field">
            <label>Your name</label>
            <input type="text" value={form.name} placeholder="Thandi"
              onChange={e => setForm({ ...form, name: e.target.value })}/>
          </div>
          <div className="form-field">
            <label>What are you looking for?</label>
            <select value={form.what} onChange={e => setForm({ ...form, what: e.target.value })}>
              <option value="">Select a service</option>
              <option>Custom clothing</option>
              <option>Branded uniforms</option>
              <option>Bucket hats</option>
              <option>Traditional / event wear</option>
              <option>Pattern making</option>
              <option>Illustrations</option>
              <option>Other / not sure</option>
            </select>
          </div>
          <div className="form-field">
            <label>When do you need it?</label>
            <input type="text" value={form.when} placeholder="In 4 weeks, for an event on…"
              onChange={e => setForm({ ...form, when: e.target.value })}/>
          </div>
          <div className="form-field">
            <label>Tell Samke more</label>
            <textarea rows={4} value={form.details}
              placeholder="Fabric, colours, sizes, references — anything she should know."
              onChange={e => setForm({ ...form, details: e.target.value })}/>
          </div>
          <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', padding: '18px' }}>
            <WAIcon/> Send via WhatsApp
          </button>
          <p className="form-foot">Opens WhatsApp with your message ready to send.</p>
        </form>
      </div>
    </section>
  );
}

function ContactFAQ() {
  const faqs = [
    { q: 'How do I place an order?',
      a: 'Send Samke a WhatsApp message describing what you want — include reference images if you have them. She will reply with availability, a quote, and timeline.' },
    { q: 'Do you ship outside of Durban?',
      a: 'Yes, Samke ships across South Africa. Shipping is arranged once your piece is finished.' },
    { q: 'Can you make team or bulk orders?',
      a: 'Absolutely. Stitched by BBM regularly produces uniforms and merchandise for clubs, schools, day-cares, and political organisations. Bulk pricing applies.' },
    { q: 'Do you take walk-ins?',
      a: 'WhatsApp first, please — that way Samke can confirm availability and prepare for your visit.' },
    { q: 'How long does a custom piece take?',
      a: 'Most one-off pieces take 1–3 weeks depending on complexity. Bulk uniform orders are quoted with their own timeline.' },
  ];
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="contact-faq">
      <div className="container faq-grid">
        <div>
          <span className="eyebrow">Common questions</span>
          <h2 className="h-section">Before you <em>message.</em></h2>
        </div>
        <ul className="faq-list">
          {faqs.map((f, i) => (
            <li key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="faq-a">{f.a}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <div data-screen-label="04 Contact">
      <TopBar/>
      <Nav active="contact"/>
      <ContactHero/>
      <ContactFAQ/>
      <Footer/>
    </div>
  );
}
