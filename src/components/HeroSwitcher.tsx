import { useState } from 'react';

export type HeroVariant = 'editorial' | 'boutique' | 'atelier';

const OPTIONS: { value: HeroVariant; label: string }[] = [
  { value: 'editorial', label: 'Editorial' },
  { value: 'boutique',  label: 'Boutique' },
  { value: 'atelier',   label: 'Atelier' },
];

interface Props {
  value: HeroVariant;
  onChange: (v: HeroVariant) => void;
}

export function HeroSwitcher({ value, onChange }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const idx = OPTIONS.findIndex(o => o.value === value);

  if (collapsed) {
    return (
      <button
        className="hero-switcher-fab"
        aria-label="Show hero variants"
        onClick={() => setCollapsed(false)}
      >
        <span className="hero-switcher-fab-glyph">✦</span>
      </button>
    );
  }

  return (
    <div className="hero-switcher" role="radiogroup" aria-label="Hero variant">
      <span className="hero-switcher-label">
        <span className="hero-switcher-spark">✦</span>
        Hero
      </span>
      <div className="hero-switcher-track">
        <div
          className="hero-switcher-thumb"
          style={{ transform: `translateX(${idx * 100}%)` }}
          aria-hidden="true"
        />
        {OPTIONS.map(o => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={o.value === value}
            className={`hero-switcher-btn ${o.value === value ? 'is-active' : ''}`}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
      <button
        className="hero-switcher-close"
        aria-label="Hide hero switcher"
        onClick={() => setCollapsed(true)}
      >
        ×
      </button>
    </div>
  );
}
