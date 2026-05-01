import { useState, useEffect } from 'react';
import { TopBar } from '../components/TopBar';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PORTFOLIO, CATEGORIES, type PortfolioItem, type PortfolioCategory } from '../data';

function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <div className="container">
        <span className="eyebrow">The Work</span>
        <h1 className="h-display">
          <em>Portfolio</em><br/>
          <span className="script">of pieces</span> made.
        </h1>
        <p className="lead" style={{ maxWidth: 680, marginTop: 28 }}>
          A selection of recent work from the studio — bucket hats, branded
          uniforms, sport jerseys, and one-of-one pieces. Tap any item to enquire.
        </p>
      </div>
    </section>
  );
}

function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioCategory>('all');
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);
  const filtered = active === 'all' ? PORTFOLIO : PORTFOLIO.filter(p => p.cat === active);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-tabs">
          {CATEGORIES.map(c => {
            const count = c.id === 'all' ? PORTFOLIO.length : PORTFOLIO.filter(p => p.cat === c.id).length;
            return (
              <button key={c.id}
                onClick={() => setActive(c.id)}
                className={`portfolio-tab ${active === c.id ? 'is-active' : ''}`}>
                {c.label}
                <span className="portfolio-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="portfolio-grid">
          {filtered.map(item => (
            <button key={item.id} className="portfolio-item" onClick={() => setLightbox(item)}>
              <div className="portfolio-img">
                <img src={item.img} alt={item.title} loading="lazy"/>
              </div>
              <div className="portfolio-meta">
                <span className="portfolio-cat">{(CATEGORIES.find(c => c.id === item.cat) || { label: '' }).label}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-card" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
            <div className="lightbox-img"><img src={lightbox.img} alt={lightbox.title}/></div>
            <div className="lightbox-text">
              <span className="portfolio-cat">{(CATEGORIES.find(c => c.id === lightbox.cat) || { label: '' }).label}</span>
              <h3 className="h-section" style={{ fontSize: 36 }}>{lightbox.title}</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: 16, marginTop: 12, marginBottom: 24 }}>{lightbox.note}</p>
              <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}>
                Like this piece? Samke can make a similar one for you, or design something
                completely original. Send a message on WhatsApp to start.
              </p>
              <WhatsAppButton message={`Hi Samke! I love the "${lightbox.title}" piece on your portfolio. Could we discuss something similar?`}>
                Enquire about this piece
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function PortfolioPage() {
  return (
    <div data-screen-label="03 Portfolio">
      <TopBar/>
      <Nav active="portfolio"/>
      <PortfolioHero/>
      <PortfolioGrid/>
      <Footer/>
    </div>
  );
}
