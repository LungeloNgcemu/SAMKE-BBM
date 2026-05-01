import type { CSSProperties } from 'react';

interface SparkleProps { delay?: number; size?: number; style?: CSSProperties; }
export function Sparkle({ delay = 0, size = 14, style }: SparkleProps) {
  return (
    <span className="sparkle" style={{ animationDelay: `${delay}s`, fontSize: size, ...style }}>✦</span>
  );
}

interface SquiggleProps { color?: string; width?: number; }
export function Squiggle({ color = '#E91E8C', width = 80 }: SquiggleProps) {
  return (
    <svg className="squiggle" width={width} height="14" viewBox="0 0 80 14" fill="none">
      <path d="M2 7 Q 12 1 22 7 T 42 7 T 62 7 T 78 7" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

interface HeartIconProps { color?: string; size?: number; }
export function HeartIcon({ color = '#E91E8C', size = 14 }: HeartIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <path d="M12 21s-7-4.5-9.5-9C.5 8 2.5 4 6.5 4c2 0 3.5 1.2 5.5 3.5C14 5.2 15.5 4 17.5 4c4 0 6 4 4 8-2.5 4.5-9.5 9-9.5 9z"/>
    </svg>
  );
}

export function WAIcon() {
  return (
    <svg className="icon-wa" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.595 5.337l-.999 3.648 3.893-.684zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}
