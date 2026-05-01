import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WA_URL, WHATSAPP_DISPLAY } from '../data';
import { WAIcon } from './Icons';

interface NavProps { active: 'home' | 'about' | 'portfolio' | 'contact'; }

const LINKS = [
  { id: 'home',      label: 'Home',      href: '/' },
  { id: 'about',     label: 'About',     href: '/about' },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { id: 'contact',   label: 'Contact',   href: '/contact' },
] as const;

export function Nav({ active }: NavProps) {
  const [open, setOpen] = useState(false);
  const left = LINKS.slice(0, 2);
  const right = LINKS.slice(2);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <ul className="nav-links nav-links-desktop">
          {left.map(l => (
            <li key={l.id}><Link to={l.href} className={active === l.id ? 'active' : ''}>{l.label}</Link></li>
          ))}
        </ul>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-mark"><img src="/assets/logo.jpeg" alt="Stitched by BBM"/></span>
          <span className="nav-brand-text">
            <span className="script">Stitched by</span>
            <span className="name">BBM</span>
          </span>
        </Link>

        <div className="nav-cta">
          <ul className="nav-links nav-links-desktop">
            {right.map(l => (
              <li key={l.id}><Link to={l.href} className={active === l.id ? 'active' : ''}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <a href={WA_URL()} className="nav-wa-mobile" aria-label="WhatsApp Samke" target="_blank" rel="noopener">
          <WAIcon/>
        </a>
      </div>

      <div
        id="mobile-drawer"
        className={`nav-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="nav-drawer-inner">
          <ul className="nav-drawer-links">
            {LINKS.map((l, i) => (
              <li key={l.id} style={{ ['--i' as string]: i } as React.CSSProperties}>
                <Link
                  to={l.href}
                  className={active === l.id ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-drawer-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="nav-drawer-label">{l.label}</span>
                  <span className="nav-drawer-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-drawer-foot">
            <span className="eyebrow">Atelier · Durban</span>
            <a href={WA_URL()} className="btn btn-whatsapp" target="_blank" rel="noopener" onClick={() => setOpen(false)}>
              <WAIcon/> WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <button
        className={`nav-drawer-backdrop ${open ? 'is-open' : ''}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}
