import { Link } from 'react-router-dom';
import { WA_URL, WHATSAPP_DISPLAY } from '../data';
import { WhatsAppButton } from './WhatsAppButton';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-deco footer-deco-1" aria-hidden="true">✦</div>
      <div className="footer-deco footer-deco-2" aria-hidden="true">❋</div>
      <div className="footer-deco footer-deco-3" aria-hidden="true">✦</div>

      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-mark" aria-hidden="true">
              <span className="footer-logo-letters">BBM</span>
            </div>
            <div>
              <div className="footer-script">Stitched by BBM</div>
              <p className="footer-tag">An atelier in Durban dressing dreamers, teams, and tastemakers — <em>one stitch at a time.</em></p>
            </div>
          </div>
          <div className="footer-cta">
            <span className="footer-cta-label">
              <span className="cta-reply-dot"></span>
              Open for orders
            </span>
            <p className="footer-cta-msg">Send a WhatsApp.<br/>Get a reply <em>within the hour.</em></p>
            <WhatsAppButton message="Hi Samke! I'd like to start a project.">Order on WhatsApp</WhatsAppButton>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true">
          <span className="footer-divider-glyph">✦</span>
        </div>

        <div className="footer-grid">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Samke</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Custom Clothing</li>
              <li>Branded Uniforms</li>
              <li>Bucket Hats</li>
              <li>Traditional Wear</li>
              <li>Pattern Making</li>
            </ul>
          </div>
          <div>
            <h4>Atelier</h4>
            <ul>
              <li><a href={WA_URL()}>WhatsApp {WHATSAPP_DISPLAY}</a></li>
              <li><span className="footer-place">Durban,<br/>South Africa</span></li>
              <li><span className="footer-hours">Mon — Sat<br/><strong>9:00 — 18:00</strong></span></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul className="footer-social">
              <li><a href="#" aria-label="Instagram"><span className="social-icon">IG</span> Instagram</a></li>
              <li><a href="#" aria-label="TikTok"><span className="social-icon">TT</span> TikTok</a></li>
              <li><a href="#" aria-label="Facebook"><span className="social-icon">FB</span> Facebook</a></li>
            </ul>
            <p className="footer-handle">@stitchedbybbm</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2025 Stitched by BBM</span>
            <span className="footer-bullet">·</span>
            <span>Est. Durban</span>
          </div>
          <div className="footer-bottom-right">
            <span className="footer-craft">
              <span className="footer-craft-glyph">✂</span>
              Crafted with thread, patience, and pink
              <span className="footer-craft-glyph">♥</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
