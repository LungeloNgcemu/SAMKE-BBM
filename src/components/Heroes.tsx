import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../data';
import { Sparkle, Squiggle, HeartIcon } from './Icons';
import { WhatsAppButton } from './WhatsAppButton';

export function HeroEditorial() {
  return (
    <section className="hero hero-editorial">
      <div className="hero-deco hero-deco-1"><Sparkle size={28}/></div>
      <div className="hero-deco hero-deco-2"><Sparkle size={20} delay={0.8}/></div>
      <div className="hero-deco hero-deco-3"><Squiggle width={120} color="#FFA9D2"/></div>
      <div className="container hero-editorial-grid">
        <div className="hero-editorial-img hero-editorial-logo">
          <div className="tape" style={{ top: -10, left: 30, transform: 'rotate(-6deg)' }}/>
          <div className="tape" style={{ top: -10, right: 40, transform: 'rotate(4deg)' }}/>
          <div className="hero-logo-stage">
            <span className="hero-logo-corner hero-logo-corner-tl">✦</span>
            <span className="hero-logo-corner hero-logo-corner-tr">✦</span>
            <span className="hero-logo-corner hero-logo-corner-bl">✦</span>
            <span className="hero-logo-corner hero-logo-corner-br">✦</span>
            <img src="/assets/logo.jpeg" alt="Stitched by BBM"/>
            <div className="hero-logo-rotator" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="hero-logo-rotator-svg">
                <defs>
                  <path id="heroLogoCircle" d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"/>
                </defs>
                <text className="hero-logo-rotator-text">
                  <textPath href="#heroLogoCircle">
                    Stitched by BBM ✦ Atelier Durban ✦ Custom Made ✦ Est. 2025 ✦&nbsp;
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="hero-editorial-tag">
            <span className="num">№ 01</span>
            <span>Custom Atelier · Durban</span>
          </div>
          <div className="hero-editorial-sticker">
            <span className="sticker-inner">
              <span>made</span>
              <span>with</span>
              <HeartIcon color="#FFF" size={12}/>
            </span>
          </div>
          <div className="hero-logo-signature">
            <span className="hero-logo-sig-line"></span>
            <span className="hero-logo-sig-text">Samkelisiwe Mhlongo, founder</span>
          </div>
        </div>
        <div className="hero-editorial-text">
          <span className="eyebrow">
            <Sparkle size={12}/> Stitched by BBM · Est. 2025
          </span>
          <h1 className="h-display">
            Clothes that <em>fit</em><br/>
            the woman<br/>
            <span className="script">who wears</span> them. <Sparkle size={32} delay={0.4}/>
          </h1>
          <p className="lead">
            Samkelisiwe Mhlongo is a fashion designer in Durban, South Africa —
            sewing, drafting, and dreaming up pieces from sketch to final stitch.
          </p>
          <div className="hero-cta">
            <WhatsAppButton message="Hi Samke! I'd like to order something from your atelier.">Order on WhatsApp</WhatsAppButton>
            <Link to="/portfolio" className="btn btn-outline">View the work</Link>
          </div>
          <div className="hero-meta">
            <div><strong>6</strong><span>Disciplines mastered</span></div>
            <div><strong>50+</strong><span>Pieces delivered</span></div>
            <div><strong>1:1</strong><span>Made for you</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroBoutique() {
  return (
    <section className="hero hero-boutique">
      <div className="hero-boutique-frame">
        <div className="hero-boutique-corner tl"/>
        <div className="hero-boutique-corner tr"/>
        <div className="hero-boutique-corner bl"/>
        <div className="hero-boutique-corner br"/>
        <div className="hero-boutique-content">
          <div className="hero-boutique-mark">
            <img src="/assets/logo.jpeg" alt="Stitched by BBM"/>
          </div>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The Atelier of Samkelisiwe Mhlongo</span>
          <h1 className="h-display" style={{ textAlign: 'center' }}>
            <span className="script">A wardrobe</span><br/>
            stitched with <em>intention.</em>
          </h1>
          <p className="lead" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
            Bespoke garments, branded uniforms, and bucket hats —
            designed, drafted, and sewn by hand in Durban.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <WhatsAppButton message="Hi Samke! I'd like to order something from your atelier.">Order on WhatsApp</WhatsAppButton>
            <Link to="/portfolio" className="btn btn-outline">View the work</Link>
          </div>
        </div>
      </div>
      <div className="hero-boutique-strip">
        {['skirt-umkhonto','hat-pcc-bluegreen','polo-volley','puffer-pcc','hats-trio-2'].map(id => {
          const item = PORTFOLIO.find(p => p.id === id)!;
          return <div key={id} className="hero-boutique-strip-img"><img src={item.img} alt={item.title}/></div>;
        })}
      </div>
    </section>
  );
}

export function HeroAtelier() {
  return (
    <section className="hero hero-atelier">
      <div className="container">
        <div className="hero-atelier-grid">
          <div className="hero-atelier-text">
            <div className="hero-atelier-num">2025</div>
            <span className="eyebrow">Issue 01 · The Debut</span>
            <h1 className="h-display">
              <em>Samkelisiwe</em><br/>
              Mhlongo,<br/>
              <span className="script">designer</span>
            </h1>
          </div>
          <div className="hero-atelier-stack">
            <div className="hero-atelier-card hero-atelier-card-1">
              <img src="/assets/portfolio/skirt-umkhonto.jpeg" alt="Skirt"/>
              <div className="hero-atelier-card-cap">Couture · Skirts</div>
            </div>
            <div className="hero-atelier-card hero-atelier-card-2">
              <img src="/assets/portfolio/hat-pcc-bluegreen.jpeg" alt="Hat"/>
              <div className="hero-atelier-card-cap">Print · Bucket Hats</div>
            </div>
            <div className="hero-atelier-card hero-atelier-card-3">
              <img src="/assets/portfolio/polo-volley.jpeg" alt="Polo"/>
              <div className="hero-atelier-card-cap">Sport · Jerseys</div>
            </div>
          </div>
        </div>
        <div className="hero-atelier-bottom">
          <p className="lead">
            A Durban-born designer working at the intersection of bespoke tailoring,
            club uniforms, and printed textiles. <strong style={{ color: 'var(--purple-700)', fontStyle: 'normal', fontWeight: 600 }}>Sketch → pattern → stitch → you.</strong>
          </p>
          <div className="hero-cta">
            <WhatsAppButton message="Hi Samke! I'd like to order something from your atelier.">Order on WhatsApp</WhatsAppButton>
            <Link to="/portfolio" className="btn btn-outline">Browse portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
