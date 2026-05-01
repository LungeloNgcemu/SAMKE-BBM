import { useEffect, useState } from 'react';
import { WA_URL, WHATSAPP_DISPLAY } from '../data';

const MESSAGES = [
  'Atelier in Durban · Shipping across South Africa',
  'Bespoke fit · Made by hand · One of one',
  'Custom orders open · Reply within the hour',
  'From sketch to stitch · Every piece by Samke',
];

export function TopBar() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % MESSAGES.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <span className="topbar-tag" aria-live="polite">
          <span className="topbar-sparkle" aria-hidden="true">✦</span>
          <span className="topbar-ticker">
            {MESSAGES.map((m, i) => (
              <span
                key={i}
                className={`topbar-ticker-item ${
                  i === idx ? 'is-active' : i === (idx - 1 + MESSAGES.length) % MESSAGES.length ? 'is-leaving' : ''
                }`}
              >
                {m}
              </span>
            ))}
          </span>
        </span>
        <span className="topbar-right">
          <span className="topbar-status">
            <span className="topbar-dot" aria-hidden="true"></span>
            Custom orders open
          </span>
          <span className="sep">·</span>
          <a href={WA_URL()} className="topbar-wa">WhatsApp {WHATSAPP_DISPLAY}</a>
        </span>
      </div>
    </div>
  );
}
