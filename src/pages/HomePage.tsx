import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Sparkle, Squiggle, HeartIcon, WAIcon } from '../components/Icons';
import { HeroEditorial, HeroBoutique, HeroAtelier } from '../components/Heroes';
import { HeroSwitcher, type HeroVariant } from '../components/HeroSwitcher';
import { PORTFOLIO, CATEGORIES, SKILLS, SERVICES, WA_URL } from '../data';

function MarqueeBanner() {
  const items = SKILLS;
  const repeat = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-stitch marquee-stitch-top" aria-hidden="true"></div>
      <div className="marquee-track">
        {repeat.map((it, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-glyph" aria-hidden="true">{it.glyph}</span>
            <span className="marquee-text">{it.name}</span>
            <span className="marquee-dash" aria-hidden="true"></span>
          </span>
        ))}
      </div>
      <div className="marquee-stitch marquee-stitch-bottom" aria-hidden="true"></div>
    </div>
  );
}

function AboutPreview() {
  return (
    <section className="section-about">
      <div className="hero-deco" style={{ top: '8%', right: '6%' }}><Sparkle size={22}/></div>
      <div className="container about-grid">
        <div className="about-images">
          <div className="about-img-main">
            <img src="/assets/portfolio/skirt-umkhonto.jpeg" alt="Sewing"/>
          </div>
          <div className="about-img-sub">
            <img src="/assets/portfolio/hoodie-zokuhli.jpeg" alt="Embroidery"/>
          </div>
          <div className="about-quote">
            <span className="quote-mark">"</span>
            <p>I sew the kind of clothes I dreamed about as a girl — fit, finish, and feeling, in every seam.</p>
            <span className="quote-attrib">— Samke</span>
          </div>
        </div>
        <div className="about-text">
          <span className="eyebrow">Meet the maker</span>
          <h2 className="h-section">
            An <em>experienced</em><br/>
            fashion designer with<br/>
            a keen eye for <span className="handdrawn-underline"><em>detail.</em></span> <Sparkle size={22} delay={0.3}/>
          </h2>
          <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 520 }}>
            Samkelisiwe Mhlongo runs <em>Stitched by BBM</em> from Durban, designing
            and producing custom clothing for individuals, clubs, political
            and community organisations across South Africa. Her workshop balances
            handmade craft with full production oversight — every piece is drafted,
            sewn, and finished to her standard.
          </p>
          <ul className="about-skills">
            {SKILLS.map(s => (
              <li key={s.name}>
                <span className="skill-dot"/>
                <strong>{s.name}</strong>
                <span className="skill-level">{s.level}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn btn-outline" style={{ marginTop: 32 }}>The full story</Link>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="section-services">
      <div className="services-bg-glyph services-bg-glyph-1" aria-hidden="true">✦</div>
      <div className="services-bg-glyph services-bg-glyph-2" aria-hidden="true">❋</div>
      <div className="container">
        <div className="services-head">
          <span className="eyebrow">What Samke makes</span>
          <h2 className="h-section">From <em>sketch</em> <Squiggle width={50}/> to <em>stitch</em>,<br/>and everything between.</h2>
          <p className="services-sub">Seven services — every one of them done by hand in the Durban atelier.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <a key={s.title}
               className={`service-card service-card-${i % 3}${s.popular ? ' service-card-popular' : ''}`}
               href={WA_URL(s.cta)}
               target="_blank" rel="noopener noreferrer">
              <div className="service-card-top">
                <div className="service-glyph" aria-hidden="true">{s.glyph}</div>
                <div className="service-num">{String(i + 1).padStart(2, '0')}</div>
              </div>
              {s.popular && <span className="service-popular">★ popular</span>}
              <span className="service-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-card-foot">
                <span className="service-arrow" aria-hidden="true">
                  <WAIcon/>
                  Enquire on WhatsApp
                </span>
              </div>
              <div className="service-stitch" aria-hidden="true"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const featured = ['skirt-umkhonto', 'puffer-pcc', 'hat-pcc-bluegreen', 'polo-volley', 'hats-trio-2', 'hoodie-zokuhli'];
  const items = featured.map(id => PORTFOLIO.find(p => p.id === id)!);
  return (
    <section className="section-featured">
      <div className="container">
        <div className="featured-head">
          <div>
            <span className="eyebrow">Recent work</span>
            <h2 className="h-section">A few <span className="handdrawn-underline"><em>favourite</em></span><br/>pieces from the studio. <HeartIcon size={28}/></h2>
          </div>
          <Link to="/portfolio" className="btn btn-outline">Full portfolio →</Link>
        </div>
        <div className="featured-grid">
          {items.map((it, i) => (
            <Link key={it.id} to="/portfolio" className={`featured-card featured-card-${i + 1}`}>
              <div className="featured-img"><img src={it.img} alt={it.title}/></div>
              <div className="featured-meta">
                <span className="featured-cat">{(CATEGORIES.find(c => c.id === it.cat) || { label: '' }).label}</span>
                <h4>{it.title}</h4>
                <p>{it.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta-card cta-card-rich">
          <div className="cta-deco-1"/>
          <div className="cta-deco-2"/>
          <div className="cta-grid-bg" aria-hidden="true"></div>
          <div className="cta-stamp" aria-hidden="true">
            <span className="cta-stamp-inner">Made in<br/>Durban</span>
          </div>
          <div className="cta-corner-tl" aria-hidden="true">✦</div>
          <div className="cta-corner-br" aria-hidden="true">❋</div>
          <div className="cta-content">
            <span className="eyebrow cta-eyebrow">Ready to begin?</span>
            <h2 className="cta-title">
              Tell Samke what you<br/>
              want <span className="script cta-script">made</span>.
            </h2>
            <p className="cta-body">
              Send a WhatsApp with your idea, sketch, or reference. She'll reply
              with availability and a quote — <em>no order form, no fuss.</em>
            </p>
            <div className="cta-actions">
              <WhatsAppButton message="Hi Samke! I have an idea I'd love to get made.">Start on WhatsApp</WhatsAppButton>
              <span className="cta-reply">
                <span className="cta-reply-dot"></span>
                Usually replies <strong>within the hour</strong>
              </span>
            </div>
            <div className="cta-meta-row">
              <span className="cta-meta"><span className="cta-meta-glyph">✚</span>Bespoke fit</span>
              <span className="cta-meta-divider">·</span>
              <span className="cta-meta"><span className="cta-meta-glyph">✂</span>Made by hand</span>
              <span className="cta-meta-divider">·</span>
              <span className="cta-meta"><span className="cta-meta-glyph">✦</span>One of one</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [variant, setVariant] = useState<HeroVariant>('editorial');
  const Hero = variant === 'boutique' ? HeroBoutique
            : variant === 'atelier'  ? HeroAtelier
            : HeroEditorial;
  return (
    <div data-screen-label="01 Home">
      <TopBar/>
      <Nav active="home"/>
      <Hero/>
      <MarqueeBanner/>
      <AboutPreview/>
      <ServicesGrid/>
      <FeaturedWork/>
      <CTABanner/>
      <Footer/>
      <HeroSwitcher value={variant} onChange={setVariant} />
    </div>
  );
}
