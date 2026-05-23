# Fatima Hijama & Wellness — Webbplats

## Projektöversikt
Professionell single-page hemsida för Fatima Hijama & Wellness, en mobil hijama-terapitjänst i Stockholm.

## Teknikstack
- HTML5 (semantisk markup för SEO)
- CSS3 (custom properties, Flexbox, Grid — inga ramverk)
- Vanilla JavaScript (ES6+)
- Netlify (hosting + Forms)
- Google Fonts: Cormorant Garamond (rubriker) + Inter (brödtext)

## Filstruktur
/
├── index.html          # Huvud-HTML (single-page, 9 sektioner)
├── css/
│   ├── style.css       # Alla stilar (reset, typografi, layout, komponenter, responsiv)
│   └── patterns.css    # Marockaninspirerade dekorativa element
├── js/
│   └── main.js         # Mobilmeny, FAQ-accordion, formulär-AJAX, scroll
├── images/             # Bilder (ersätt placeholders med riktiga foton)
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── netlify.toml        # Netlify-konfiguration
├── CLAUDE.md           # Detta dokument
├── progress.md         # Framstegsspårning
└── MEMORY.md           # Minnesindex

## Lokal utveckling
Öppna index.html direkt i webbläsare, eller använd lokal server:
npx serve .
eller
python -m http.server 8000

## Deploy till Netlify
1. Pusha till GitHub
2. Koppla repo i Netlify dashboard (Build: inget, Publish: /)
3. Sätt upp e-postnotifiering för formuläret: Site settings → Forms → Notifications
4. Ange Fatimas riktiga e-postadress dit

## Placeholders att ersätta
| Vad | Var | Med |
|-----|-----|-----|
| E-post | netlify.toml kommentar + Netlify dashboard | Fatimas riktiga e-post |
| Hero-bakgrund | css/style.css .hero kommentar | ../images/hero-bg.jpg |
| Porträttfoto | index.html Om Fatima-sektion kommentar | images/fatima-portrait.jpg |
| Domän i schema | index.html JSON-LD script | Riktig domän |
| Domän i sitemap | sitemap.xml | Riktig domän |
| Canonical URL | index.html head | Riktig domän |

## CSS-konventioner
- BEM-liknande klassnamn: .block__element--modifier
- CSS custom properties i :root — inga hårdkodade färger
- Mobile-first: basstil för mobil, media queries för desktop

## Färgpalett
- --color-primary: #7D3030 — burgunder/terrakotta
- --color-gold: #C4973A — åldrat guld
- --color-bg: #F8F4EE — varm ivory
- --color-bg-alt: #EDE8DE — dämpad sand
- --color-dark: #1A1A1A — footer-bakgrund
