import { TopBar } from '../components/TopBar';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { SKILLS } from '../data';

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero-grid">
          <div>
            <span className="eyebrow">The Designer</span>
            <h1 className="h-display">
              <span className="script">Meet</span><br/>
              <em>Samkelisiwe</em><br/>
              Mhlongo.
            </h1>
            <p className="lead" style={{ marginTop: 28 }}>
              An experienced fashion designer with a keen eye for detail and a
              passion for creating innovative styles — from the first sketch
              to overseeing the final stitch.
            </p>
          </div>
          <div className="about-hero-img">
            <img src="/assets/portfolio/skirt-umkhonto.jpeg" alt="Samkelisiwe at work"/>
            <div className="about-hero-cap">
              <span>Durban, South Africa</span>
              <span>Atelier · 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="story">
      <div className="container story-grid">
        <div className="story-side">
          <span className="eyebrow">Her story</span>
        </div>
        <div className="story-text">
          <p className="story-lede">
            Samke designs clothes <em>and</em> oversees their making —
            two skills most designers split. Her workshop in Durban turns
            ideas into garments without ever losing sight of the wearer.
          </p>
          <p>
            Trained across the full discipline — sewing, pattern making, textile
            selection, illustration, and styling — she runs <em>Stitched by BBM</em>
            as a one-stop atelier. Clients arrive with a fabric, a club crest,
            a Pinterest board, or just an idea, and leave with a piece that
            actually fits.
          </p>
          <p>
            Her work has dressed political organisations, sports teams,
            day-care staff, and women looking for something they can't find
            on a hanger. Each project is drafted from scratch, sewn in-house,
            and finished to her standard before it ever goes out the door.
          </p>
          <blockquote>
            <span className="quote-mark">"</span>
            I want every piece to feel like it was made for one person —
            because it was.
            <footer>— Samkelisiwe Mhlongo</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function SkillsDeepDive() {
  return (
    <section className="skills-deep">
      <div className="container">
        <div className="skills-deep-head">
          <span className="eyebrow">Six disciplines · all expert</span>
          <h2 className="h-section">A complete <em>maker.</em></h2>
        </div>
        <div className="skills-deep-grid">
          {SKILLS.map((s, i) => (
            <div key={s.name} className={`skill-deep-card skill-card-${i % 3}`}>
              <div className="skill-deep-corner" aria-hidden="true">
                <span className="skill-deep-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="skill-deep-tag">/ {s.tag}</span>
              </div>
              <div className="skill-deep-glyph" aria-hidden="true">{s.glyph}</div>
              <h3>{s.name}</h3>
              <span className="skill-deep-level"><span className="skill-deep-dot" aria-hidden="true"></span>{s.level}</span>
              <p>{s.note}</p>
              <div className="skill-deep-stitch" aria-hidden="true"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: 'I',   t: 'Conversation',     d: 'Send a WhatsApp with your idea, sketch, or reference.',                                  meta: 'same day reply', glyph: '✎' },
    { n: 'II',  t: 'Sketch & Quote',   d: 'Samke sketches the concept and shares a quote and timeline.',                            meta: '2–3 days',       glyph: '✦' },
    { n: 'III', t: 'Pattern & Sample', d: 'A custom pattern is drafted; a fitting toile may be made for fit-critical pieces.',      meta: '1 week',         glyph: '✚' },
    { n: 'IV',  t: 'Make',             d: 'Cut, sew, finish — every step under her eye.',                                           meta: '2–4 weeks',      glyph: '✂' },
    { n: 'V',   t: 'Final fitting',    d: 'Adjustments if needed, then your piece is yours.',                                       meta: 'in studio',      glyph: '◈' },
  ];
  return (
    <section className="process">
      <div className="process-bg-glyph process-bg-glyph-1" aria-hidden="true">✦</div>
      <div className="process-bg-glyph process-bg-glyph-2" aria-hidden="true">❋</div>
      <div className="process-bg-glyph process-bg-glyph-3" aria-hidden="true">✦</div>
      <div className="container">
        <div className="process-head">
          <span className="eyebrow">From idea to wardrobe</span>
          <h2 className="h-section">The <em>process.</em></h2>
          <p className="process-sub">Five steps. One conversation. Your piece.</p>
        </div>
        <ol className="process-steps">
          {steps.map((s, i) => (
            <li key={s.n} style={{ ['--idx' as string]: i } as React.CSSProperties}>
              <div className="process-node">
                <span className="process-node-glyph" aria-hidden="true">{s.glyph}</span>
                <span className="process-node-num">{s.n}</span>
              </div>
              {i < steps.length - 1 && <div className="process-thread" aria-hidden="true"></div>}
              <div className="process-content">
                <span className="process-meta">{s.meta}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta-card cta-card-rich">
          <div className="cta-deco-1"/>
          <div className="cta-deco-2"/>
          <div className="cta-grid-bg" aria-hidden="true"></div>
          <div className="cta-stamp" aria-hidden="true">
            <span className="cta-stamp-inner">Atelier<br/>est. 2018</span>
          </div>
          <div className="cta-corner-tl" aria-hidden="true">✦</div>
          <div className="cta-corner-br" aria-hidden="true">❋</div>
          <div className="cta-content">
            <span className="eyebrow cta-eyebrow">Work with Samke</span>
            <h2 className="cta-title">
              Bring your <span className="script cta-script">idea</span><br/>
              to the atelier.
            </h2>
            <p className="cta-body">
              One WhatsApp message is all it takes to begin — <em>send a sketch,
              a reference, or just a feeling.</em>
            </p>
            <div className="cta-actions">
              <WhatsAppButton message="Hi Samke! I read about your work and I'd love to start a project.">Order on WhatsApp</WhatsAppButton>
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

export function AboutPage() {
  return (
    <div data-screen-label="02 About">
      <TopBar/>
      <Nav active="about"/>
      <AboutHero/>
      <StorySection/>
      <SkillsDeepDive/>
      <ProcessSection/>
      <AboutCTA/>
      <Footer/>
    </div>
  );
}
