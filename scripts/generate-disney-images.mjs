import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Castle SVG generator function
function makeCastleSvg(width, height, title, subtitle, theme = 'magic') {
  const isNight = theme === 'night' || theme === 'fireworks';
  const isSunset = theme === 'sunset' || theme === 'hero';
  
  const bgGradient = isNight 
    ? `<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a1936" />
        <stop offset="50%" stop-color="#102A5C" />
        <stop offset="100%" stop-color="#172F6B" />
       </linearGradient>`
    : isSunset
    ? `<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#172F6B" />
        <stop offset="40%" stop-color="#4A2563" />
        <stop offset="75%" stop-color="#E94B83" />
        <stop offset="100%" stop-color="#D6A84F" />
       </linearGradient>`
    : `<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#102A5C" />
        <stop offset="40%" stop-color="#172F6B" />
        <stop offset="80%" stop-color="#DCEAF7" />
        <stop offset="100%" stop-color="#FCF8F1" />
       </linearGradient>`;

  const stars = Array.from({ length: 45 }).map(() => {
    const cx = (Math.random() * width).toFixed(1);
    const cy = (Math.random() * (height * 0.6)).toFixed(1);
    const r = (Math.random() * 2 + 1).toFixed(1);
    const opacity = (Math.random() * 0.7 + 0.3).toFixed(2);
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFFFFF" opacity="${opacity}" />`;
  }).join('\n');

  const sparkles = Array.from({ length: 15 }).map(() => {
    const cx = (Math.random() * width).toFixed(1);
    const cy = (Math.random() * (height * 0.5)).toFixed(1);
    const size = (Math.random() * 12 + 8).toFixed(1);
    const color = Math.random() > 0.5 ? '#E94B83' : '#D6A84F';
    return `<g transform="translate(${cx}, ${cy})">
      <path d="M0,${-size} L2,-2 L${size},0 L2,2 L0,${size} L-2,2 L${-size},0 L-2,-2 Z" fill="${color}" opacity="0.85" />
    </g>`;
  }).join('\n');

  const fireworks = (isNight || isSunset) ? `
    <g transform="translate(${width * 0.25}, ${height * 0.25})">
      <circle cx="0" cy="0" r="4" fill="#E94B83" />
      ${Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const x2 = (Math.cos(angle) * 45).toFixed(1);
        const y2 = (Math.sin(angle) * 45).toFixed(1);
        return `<line x1="0" y1="0" x2="${x2}" y2="${y2}" stroke="#E94B83" stroke-width="2" opacity="0.75" stroke-dasharray="4 2" />`;
      }).join('')}
    </g>
    <g transform="translate(${width * 0.75}, ${height * 0.2})">
      <circle cx="0" cy="0" r="5" fill="#D6A84F" />
      ${Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const x2 = (Math.cos(angle) * 55).toFixed(1);
        const y2 = (Math.sin(angle) * 55).toFixed(1);
        return `<line x1="0" y1="0" x2="${x2}" y2="${y2}" stroke="#D6A84F" stroke-width="2.5" opacity="0.8" stroke-dasharray="5 3" />`;
      }).join('')}
    </g>
  ` : '';

  // Silhouette castle parameters centered
  const cX = width / 2;
  const cY = height * 0.75;
  const scale = width / 1200;

  const safeTitle = (title || '').replace(/&/g, '&amp;');
  const safeSubtitle = (subtitle || '').replace(/&/g, '&amp;');

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      ${bgGradient}
      <linearGradient id="castleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#102A5C" />
        <stop offset="100%" stop-color="#0a152e" />
      </linearGradient>
      <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#E94B83" />
        <stop offset="100%" stop-color="#102A5C" />
      </linearGradient>
      <linearGradient id="goldRoof" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FCE195" />
        <stop offset="100%" stop-color="#D6A84F" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />

    <!-- Stars & Sparkles -->
    ${stars}
    ${fireworks}
    ${sparkles}

    <!-- Main Castle Silhouette -->
    <g transform="translate(${cX}, ${cY}) scale(${scale})">
      <!-- Outer Base Walls -->
      <rect x="-350" y="-120" width="700" height="250" fill="url(#castleGrad)" />
      
      <!-- Side Turrets -->
      <rect x="-320" y="-250" width="80" height="200" fill="url(#castleGrad)" />
      <polygon points="-320,-250 -280,-390 -240,-250" fill="url(#roofGrad)" />
      <path d="M-280,-390 L-280,-420 L-265,-405 Z" fill="#D6A84F" />

      <rect x="240" y="-250" width="80" height="200" fill="url(#castleGrad)" />
      <polygon points="240,-250 280,-390 320,-250" fill="url(#roofGrad)" />
      <path d="M280,-390 L280,-420 L295,-405 Z" fill="#D6A84F" />

      <!-- Inner Towers -->
      <rect x="-210" y="-320" width="100" height="250" fill="url(#castleGrad)" />
      <polygon points="-210,-320 -160,-480 -110,-320" fill="url(#roofGrad)" />

      <rect x="110" y="-320" width="100" height="250" fill="url(#castleGrad)" />
      <polygon points="110,-320 160,-480 210,-320" fill="url(#roofGrad)" />

      <!-- Central Main Tower -->
      <rect x="-110" y="-450" width="220" height="380" fill="url(#castleGrad)" />
      <polygon points="-110,-450 0,-650 110,-450" fill="url(#goldRoof)" />
      <!-- Top Spire Flag -->
      <line x1="0" y1="-650" x2="0" y2="-720" stroke="#D6A84F" stroke-width="4" />
      <polygon points="0,-720 45,-705 0,-690" fill="#E94B83" />

      <!-- Glowing Windows -->
      <rect x="-40" y="-350" width="80" height="120" rx="40" fill="#FCE195" opacity="0.9" />
      <rect x="-180" y="-220" width="40" height="70" rx="20" fill="#FCE195" opacity="0.8" />
      <rect x="140" y="-220" width="40" height="70" rx="20" fill="#FCE195" opacity="0.8" />

      <!-- Castle Gateway Arch -->
      <path d="M-60,130 L-60,20 Q0,-40 60,20 L60,130 Z" fill="#050b17" />
      <path d="M-60,20 Q0,-40 60,20" stroke="#D6A84F" stroke-width="6" fill="none" />
    </g>

    <!-- Foreground Water / Plaza Glow -->
    <rect x="0" y="${height * 0.85}" width="${width}" height="${height * 0.15}" fill="#081329" opacity="0.9" />
    <ellipse cx="${width/2}" cy="${height * 0.85}" rx="${width * 0.45}" ry="${height * 0.08}" fill="#E94B83" opacity="0.15" />

    <!-- Overlay Title Card if provided -->
    ${safeTitle ? `
    <g filter="url(#shadow)">
      <rect x="${width * 0.08}" y="${height * 0.12}" width="${width * 0.5}" height="${height * 0.35}" rx="20" fill="#102A5C" opacity="0.82" />
      <rect x="${width * 0.08}" y="${height * 0.12}" width="${width * 0.5}" height="${height * 0.35}" rx="20" stroke="#D6A84F" stroke-width="2" fill="none" opacity="0.6" />
      <text x="${width * 0.12}" y="${height * 0.22}" font-family="Outfit, sans-serif" font-weight="800" font-size="${Math.round(width * 0.038)}" fill="#FFFFFF">${safeTitle}</text>
      <text x="${width * 0.12}" y="${height * 0.32}" font-family="Plus Jakarta Sans, sans-serif" font-weight="600" font-size="${Math.round(width * 0.022)}" fill="#E94B83">${safeSubtitle}</text>
      <text x="${width * 0.12}" y="${height * 0.40}" font-family="Plus Jakarta Sans, sans-serif" font-size="${Math.round(width * 0.016)}" fill="#DCEAF7">Official E-Tickets &amp; Instant Mobile Delivery</text>
    </g>
    ` : ''}
  </svg>`;
}

const imagesToCreate = [
  { name: 'disneyland-paris-hero.jpg', width: 1920, height: 1080, title: 'Disneyland Paris Tickets', subtitle: 'Step Into Pure Magic & Wonder', theme: 'hero' },
  { name: 'disneyland-paris-hero-mobile.jpg', width: 800, height: 1200, title: 'Disneyland Paris', subtitle: 'Book E-Tickets Online', theme: 'hero' },
  { name: 'disneyland-paris-tickets.jpg', width: 1200, height: 800, title: 'Disneyland Paris Park Tickets', subtitle: '1-Day & Multi-Day Passes', theme: 'magic' },
  { name: 'disneyland-paris-castle.jpg', width: 1200, height: 800, title: 'Sleeping Beauty Castle', subtitle: 'Disneyland Park Landmark', theme: 'sunset' },
  { name: 'disneyland-paris-park.jpg', width: 1200, height: 800, title: 'Disneyland Park Access', subtitle: '5 Magical Lands to Explore', theme: 'magic' },
  { name: 'disneyland-paris-family.jpg', width: 1200, height: 800, title: 'Family Ticket Packages', subtitle: 'Unforgettable Memories for All Ages', theme: 'magic' },
  { name: 'disneyland-paris-fireworks.jpg', width: 1200, height: 800, title: 'Nighttime Illuminations', subtitle: 'Spectacular Fireworks & Light Show', theme: 'fireworks' },
  { name: 'disneyland-paris-rides.jpg', width: 1200, height: 800, title: 'Thrill Rides & Attractions', subtitle: 'Space Mountain, Big Thunder & More', theme: 'sunset' },
  { name: 'disneyland-paris-attractions.jpg', width: 1200, height: 800, title: 'Park Attractions Guide', subtitle: 'Explore All Shows & Rides', theme: 'magic' },
  { name: 'disneyland-paris-night.jpg', width: 1200, height: 800, title: 'Disneyland Paris by Night', subtitle: 'Magical Evening Park Atmosphere', theme: 'night' },
  { name: 'disneyland-paris-studios.jpg', width: 1200, height: 800, title: 'Walt Disney Studios Park', subtitle: 'Marvel, Pixar & Cinematic Magic', theme: 'hero' },
  { name: 'disneyland-paris-blog-guide.jpg', width: 1200, height: 675, title: 'Disneyland Paris Planning Guide', subtitle: 'Complete Ticket & Visitor Guide', theme: 'magic' },
  { name: 'disneyland-paris-blog-prices.jpg', width: 1200, height: 675, title: 'Disneyland Paris Ticket Prices 2026', subtitle: 'How to Find Deals & Discount Passes', theme: 'sunset' },
  { name: 'disneyland-paris-blog-best-time.jpg', width: 1200, height: 675, title: 'Best Time to Visit Disneyland Paris', subtitle: 'Crowd Calendar & Seasonal Highlights', theme: 'hero' }
];

async function generateAll() {
  console.log('Generating Disneyland Paris image assets...');
  for (const img of imagesToCreate) {
    const svgStr = makeCastleSvg(img.width, img.height, img.title, img.subtitle, img.theme);
    const outputPath = path.join(outputDir, img.name);
    await sharp(Buffer.from(svgStr))
      .jpeg({ quality: 92 })
      .toFile(outputPath);
    console.log(`Saved ${img.name} (${img.width}x${img.height})`);
  }
  console.log('All images generated successfully!');
}

generateAll().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
