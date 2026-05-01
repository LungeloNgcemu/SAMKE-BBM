export const WHATSAPP_NUMBER = '27797453988';
export const WHATSAPP_DISPLAY = '+27 79 745 3988';

export const WA_URL = (
  msg = "Hi Samkelisiwe, I saw your website and I'd like to enquire about your work."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export type PortfolioCategory = 'all' | 'hats' | 'jerseys' | 'skirts' | 'custom';

export interface PortfolioItem {
  id: string;
  cat: Exclude<PortfolioCategory, 'all'>;
  img: string;
  title: string;
  note: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  { id: 'puffer-pcc',         cat: 'custom',  img: '/assets/portfolio/puffer-pcc.jpeg',          title: 'PCC Puffer Jacket',         note: 'Branded outerwear · custom print + crest' },
  { id: 'polo-volley',        cat: 'jerseys', img: '/assets/portfolio/polo-volley.jpeg',         title: 'Volley Polo',               note: 'Sublimated polo · sport cut' },
  { id: 'polo-pcc-bw',        cat: 'jerseys', img: '/assets/portfolio/polo-pcc-blackwhite.jpeg', title: 'PCC Mosaic Polo',           note: 'Front + back print · party kit' },
  { id: 'polo-triangles',     cat: 'jerseys', img: '/assets/portfolio/polo-triangles.jpeg',     title: 'Triangle Polo',             note: 'Geometric sublimation · turquoise' },
  { id: 'hats-trio-2',        cat: 'hats',    img: '/assets/portfolio/hats-trio-2.jpeg',        title: 'School Crest Bucket Hats',  note: 'Trio of branded buckets' },
  { id: 'hat-pcc-white',      cat: 'hats',    img: '/assets/portfolio/hat-pcc-white.jpeg',      title: 'PCC Pattern Bucket',        note: 'All-over crest print' },
  { id: 'hat-pcc-bluegreen',  cat: 'hats',    img: '/assets/portfolio/hat-pcc-bluegreen.jpeg',  title: 'PCC Two-Tone Bucket',       note: 'Reversible · blue / green' },
  { id: 'hat-pcc-tan',        cat: 'hats',    img: '/assets/portfolio/hat-pcc-tan.jpeg',        title: 'PCC Sport Bucket',          note: 'Athletic stripe · tan trim' },
  { id: 'hat-womens-league',  cat: 'hats',    img: '/assets/portfolio/hat-womens-league.jpeg',  title: 'Women’s League Bucket', note: 'Heritage green · honeycomb base' },
  { id: 'hat-skull',          cat: 'hats',    img: '/assets/portfolio/hat-skull.jpeg',          title: 'Statement Bucket',          note: 'Custom graphic print' },
  { id: 'hats-trio-inside',   cat: 'hats',    img: '/assets/portfolio/hats-trio-inside.jpeg',   title: 'Inside Lining Detail',      note: 'Satin-lined buckets' },
  { id: 'skirt-umkhonto',     cat: 'skirts',  img: '/assets/portfolio/skirt-umkhonto.jpeg',     title: 'Umkhonto Peplum Skirt',     note: 'Knit bodice · printed flounce' },
  { id: 'shorts-green',       cat: 'custom',  img: '/assets/portfolio/shorts-green.jpeg',       title: 'Sport Shorts',              note: 'Two-tone · embroidered crest' },
  { id: 'tshirt-shorts-set',  cat: 'custom',  img: '/assets/portfolio/tshirt-shorts-set.jpeg',  title: 'Match Day Set',             note: 'Tee + shorts · coordinated print' },
  { id: 'hoodie-zokuhli',     cat: 'custom',  img: '/assets/portfolio/hoodie-zokuhli.jpeg',     title: 'Zokuhli Day Care Hoodie',   note: 'Embroidered logo · uniform' },
  { id: 'badge-pcc',          cat: 'custom',  img: '/assets/portfolio/badge-pcc.jpeg',          title: 'PCC Pin Badge',             note: 'Branded merchandise' },
  { id: 'fabric-pcc',         cat: 'custom',  img: '/assets/portfolio/fabric-pcc.jpeg',         title: 'PCC Custom Fabric',         note: 'Pattern design · printed yardage' },
];

export interface Category { id: PortfolioCategory; label: string; }

export const CATEGORIES: Category[] = [
  { id: 'all',     label: 'Everything' },
  { id: 'hats',    label: 'Bucket Hats' },
  { id: 'jerseys', label: 'Jerseys & Polos' },
  { id: 'skirts',  label: 'Skirts & Dresses' },
  { id: 'custom',  label: 'Custom & Uniforms' },
];

export interface Skill { name: string; level: string; note: string; glyph: string; tag: string; }

export const SKILLS: Skill[] = [
  { name: 'Sewing',         level: 'Expert', note: 'Clean finishes, durable seams, professional construction.', glyph: '✂', tag: 'craft' },
  { name: 'Pattern Making', level: 'Expert', note: 'Drafted from scratch — bespoke fit for every body.',         glyph: '✚', tag: 'fit' },
  { name: 'Designing',      level: 'Expert', note: 'Original silhouettes built around the wearer.',              glyph: '✦', tag: 'vision' },
  { name: 'Textile',        level: 'Expert', note: 'Fabric selection, sourcing, and custom prints.',             glyph: '❋', tag: 'material' },
  { name: 'Styling',        level: 'Expert', note: 'Coordinating sets, palettes, and personal looks.',           glyph: '◈', tag: 'curation' },
  { name: 'Illustration',   level: 'Expert', note: 'Hand-rendered tech sketches and concept art.',               glyph: '✎', tag: 'sketch' },
];

export interface Service {
  title: string;
  desc: string;
  glyph: string;
  tag: string;
  starts: string;
  popular: boolean;
  cta: string;
}

export const SERVICES: Service[] = [
  { title: 'Custom Clothing',          desc: 'One-of-one pieces made to your measurements and ideas.',         glyph: '✂', tag: 'Bespoke',    starts: 'from R1 200',     popular: true,  cta: "Hi Samke! I'd like custom clothing made." },
  { title: 'Branded Uniforms',         desc: 'Polo shirts, tracksuits, and jackets — printed or embroidered.', glyph: '◈', tag: 'Bulk',       starts: 'from R350 / unit', popular: false, cta: "Hi Samke! I'd like a quote on branded uniforms." },
  { title: 'Bucket Hats',              desc: 'Sublimation prints, club crests, full-bleed patterns.',          glyph: '❋', tag: 'Print',      starts: 'from R180',        popular: true,  cta: "Hi Samke! I'd like to order bucket hats." },
  { title: 'Traditional & Event Wear', desc: 'Showpieces for weddings, ceremonies, and big days.',             glyph: '✦', tag: 'Showpiece',  starts: 'from R3 500',      popular: false, cta: "Hi Samke! I'm planning an event and need a piece made." },
  { title: 'Pattern Making',           desc: 'Custom drafting and grading from sketch to sample.',             glyph: '✚', tag: 'Drafting',   starts: 'from R600',        popular: false, cta: "Hi Samke! I need pattern-making help." },
  { title: 'Illustrations',            desc: 'Concept sketches, tech packs, and hand drawings.',               glyph: '✎', tag: 'Concept',    starts: 'from R450',        popular: false, cta: "Hi Samke! I'd like an illustration commission." },
  { title: 'Production Oversight',     desc: 'Quality control across the full make cycle.',                    glyph: '◐', tag: 'Consulting', starts: 'on request',       popular: false, cta: "Hi Samke! I need production oversight." },
];
