# Fatima Hijama & Wellness Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional single-page website for Fatima Hijama & Wellness — a mobile hijama therapy service in Stockholm — with Moroccan-inspired design, Netlify Forms booking, and full Google SEO optimization.

**Architecture:** Vanilla HTML/CSS/JS single-page site with anchor navigation. CSS is organized into `style.css` (all styles) and `patterns.css` (Moroccan decorative elements). JavaScript in `main.js` handles mobile nav, FAQ accordion, and AJAX form submission to Netlify.

**Tech Stack:** HTML5, CSS3 (custom properties, Flexbox, Grid), Vanilla JS (ES6+), Google Fonts (Cormorant Garamond + Inter), Netlify Forms, Netlify hosting.

---

## File Map

| File | Responsibility |
|------|----------------|
| `index.html` | All page markup — 9 sections + nav + footer |
| `css/style.css` | All styles — reset, typography, layout, components, responsive |
| `css/patterns.css` | Moroccan geometric decorative elements |
| `js/main.js` | Mobile nav, scroll behavior, FAQ accordion, form AJAX |
| `robots.txt` | SEO crawler config |
| `sitemap.xml` | SEO sitemap |
| `netlify.toml` | Netlify build + redirect config |
| `CLAUDE.md` | Project instructions for Claude Code |
| `progress.md` | Feature checklist |
| `MEMORY.md` | Memory index |

---

## Task 1: Project Scaffold + Docs

**Files:**
- Create: `CLAUDE.md`
- Create: `progress.md`
- Create: `MEMORY.md`
- Create: `css/` (directory)
- Create: `js/` (directory)
- Create: `images/` (directory)

- [ ] **Step 1: Create directory structure**

```powershell
New-Item -ItemType Directory -Force css, js, images
```

- [ ] **Step 2: Create CLAUDE.md**

```markdown
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
```
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
```

## Lokal utveckling
Öppna index.html direkt i webbläsare, eller använd lokal server:
```bash
npx serve .
# eller
python -m http.server 8000
```

## Deploy till Netlify
1. Pusha till GitHub
2. Koppla repo i Netlify dashboard (Build: inget, Publish: /)
3. Sätt upp e-postnotifiering för formuläret: Site settings → Forms → Notifications
4. Ange Fatimas riktiga e-postadress dit

## Placeholders att ersätta
| Vad | Var | Med |
|-----|-----|-----|
| E-post | `netlify.toml` kommentar + Netlify dashboard | Fatimas riktiga e-post |
| Hero-bakgrund | `css/style.css` `.hero` kommentar | `../images/hero-bg.jpg` |
| Porträttfoto | `index.html` Om Fatima-sektion kommentar | `images/fatima-portrait.jpg` |
| Domän i schema | `index.html` JSON-LD script | Riktig domän |
| Domän i sitemap | `sitemap.xml` | Riktig domän |
| Canonical URL | `index.html` head | Riktig domän |

## CSS-konventioner
- BEM-liknande klassnamn: `.block__element--modifier`
- CSS custom properties i `:root` — inga hårdkodade färger
- Mobile-first: basstil för mobil, media queries för desktop

## Färgpalett
- `--color-primary: #7D3030` — burgunder/terrakotta
- `--color-gold: #C4973A` — åldrat guld
- `--color-bg: #F8F4EE` — varm ivory
- `--color-bg-alt: #EDE8DE` — dämpad sand
- `--color-dark: #1A1A1A` — footer-bakgrund
```

- [ ] **Step 3: Create progress.md**

```markdown
# Fatima Hijama & Wellness — Framsteg

## Status: 🚧 Under utveckling

## Funktioner
- [ ] Task 1: Projektstruktur & docs
- [ ] Task 2: Netlify + SEO config
- [ ] Task 3: HTML-skelett + meta-taggar + schema
- [ ] Task 4: CSS-grund (variabler, reset, typografi, knappar)
- [ ] Task 5: Marockaninspirerade SVG-mönster (patterns.css)
- [ ] Task 6: Navigation (HTML + CSS)
- [ ] Task 7: Hero-sektion (HTML + CSS)
- [ ] Task 8: Om Hijama-sektion (HTML + CSS)
- [ ] Task 9: Om Fatima-sektion (HTML + CSS)
- [ ] Task 10: Tjänster-sektion (HTML + CSS)
- [ ] Task 11: Priser-sektion (HTML + CSS)
- [ ] Task 12: Bokningsformulär (HTML + CSS, Netlify Forms)
- [ ] Task 13: FAQ-sektion (HTML + CSS)
- [ ] Task 14: Footer (HTML + CSS)
- [ ] Task 15: JavaScript (main.js)
- [ ] Task 16: Responsiv CSS (media queries)

## Nästa steg efter lansering
- Ersätt hero CSS-gradient med riktigt foto (`images/hero-bg.jpg`)
- Ersätt FS-platshållare med porträttfoto (`images/fatima-portrait.jpg`)
- Uppdatera e-post i Netlify dashboard
- Koppla domän (fatimahijama.se eller liknande)
- Registrera Google Business Profile och peka på hemsidan
```

- [ ] **Step 4: Create MEMORY.md**

```markdown
# Memory Index

- [Business Info](memory/project_business_info.md) — Fatima Hijama & Wellness: mobil hijama i Stockholm Farsta, ägare Fatima Serghini, certifierad terapeut
- [Design Decisions](memory/project_design_decisions.md) — Burgunder + guld färgpalett, Cormorant Garamond rubriker, subtila marockanska SVG-mönster
```

- [ ] **Step 5: Commit**

```bash
git init
git add CLAUDE.md progress.md MEMORY.md
git commit -m "chore: add project docs (CLAUDE.md, progress.md, MEMORY.md)"
```

---

## Task 2: Netlify & SEO Config Files

**Files:**
- Create: `netlify.toml`
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Create netlify.toml**

```toml
[build]
  publish = "/"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# E-postnotifiering för formuläret konfigureras i Netlify dashboard:
# Site settings → Forms → Notifications → Add notification → Email
# Ange: kontakt@fatimahijama.se (byt mot äkta e-post)
```

- [ ] **Step 2: Create robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://fatimahijama.se/sitemap.xml
```

- [ ] **Step 3: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://fatimahijama.se/</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 4: Commit**

```bash
git add netlify.toml robots.txt sitemap.xml
git commit -m "chore: add Netlify config and SEO files"
```

---

## Task 3: HTML Skeleton + Meta Tags + Schema

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html with full head and empty section placeholders**

```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fatima Hijama & Wellness | Terapeutisk Hijama Stockholm</title>
  <meta name="description" content="Certifierad hijama-terapeut i Stockholm. Mobil tjänst – vi kommer till dig i Farsta och hela Stockholm. Boka terapeutisk hijama med lättmassage efterbehandling.">
  <meta name="keywords" content="hijama stockholm, koppning stockholm, terapeutisk hijama, hijama terapeut, mobil hijama, Fatima Hijama">
  <meta name="author" content="Fatima Serghini">
  <meta name="robots" content="index, follow">

  <link rel="canonical" href="https://fatimahijama.se/">

  <!-- Open Graph -->
  <meta property="og:title" content="Fatima Hijama & Wellness | Terapeutisk Hijama Stockholm">
  <meta property="og:description" content="Certifierad hijama-terapeut i Stockholm. Mobil tjänst – vi kommer till dig. Boka terapeutisk hijama med lättmassage.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://fatimahijama.se/">
  <meta property="og:locale" content="sv_SE">
  <meta property="og:site_name" content="Fatima Hijama & Wellness">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Fatima Hijama & Wellness | Terapeutisk Hijama Stockholm">
  <meta name="twitter:description" content="Certifierad hijama-terapeut i Stockholm. Mobil tjänst – vi kommer till dig.">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/patterns.css">

  <!-- Schema Markup (Local Business) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fatima Hijama & Wellness",
    "description": "Certifierad terapeutisk hijama med lättmassage efterbehandling. Mobil tjänst i Stockholm.",
    "url": "https://fatimahijama.se",
    "email": "kontakt@fatimahijama.se",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Farsta",
      "addressRegion": "Stockholm",
      "addressCountry": "SE"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stockholm"
    },
    "priceRange": "650–1750 kr",
    "employee": {
      "@type": "Person",
      "name": "Fatima Serghini",
      "jobTitle": "Certifierad Hijama-Terapeut"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hijama-behandlingar",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Terapeutisk Hijama med Efterbehandling — Enskild session",
          "price": "650",
          "priceCurrency": "SEK"
        },
        {
          "@type": "Offer",
          "name": "Terapeutisk Hijama — Paket 3 sessioner",
          "price": "1750",
          "priceCurrency": "SEK"
        }
      ]
    }
  }
  </script>
</head>
<body>

  <nav class="navbar" id="navbar">
    <!-- Task 6 -->
  </nav>

  <main>
    <section class="hero" id="hem">
      <!-- Task 7 -->
    </section>

    <section class="om-hijama" id="om-hijama">
      <!-- Task 8 -->
    </section>

    <section class="om-fatima" id="om-fatima">
      <!-- Task 9 -->
    </section>

    <section class="tjanster" id="tjanster">
      <!-- Task 10 -->
    </section>

    <section class="priser" id="priser">
      <!-- Task 11 -->
    </section>

    <section class="bokning" id="bokning">
      <!-- Task 12 -->
    </section>

    <section class="faq" id="faq">
      <!-- Task 13 -->
    </section>
  </main>

  <footer class="footer">
    <!-- Task 14 -->
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open index.html in browser, verify blank page with no console errors**

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add HTML skeleton with full head, meta tags, and schema markup"
```

---

## Task 4: CSS Foundation

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Create css/style.css with all base styles**

```css
/* === Custom Properties === */
:root {
  --color-primary: #7D3030;
  --color-primary-dark: #5C2020;
  --color-gold: #C4973A;
  --color-gold-light: #D4A84A;
  --color-bg: #F8F4EE;
  --color-bg-alt: #EDE8DE;
  --color-text: #2A2A2A;
  --color-text-light: #6B6B6B;
  --color-white: #FFFFFF;
  --color-dark: #1A1A1A;

  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;

  --container-max: 1180px;
  --section-padding: 5rem 1.5rem;
  --transition: 0.3s ease;
  --radius: 2px;
}

/* === Reset === */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  color: var(--color-text);
  background-color: var(--color-bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

/* === Utilities === */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.section-header--left {
  text-align: left;
}

.section-header--left .section-subtitle {
  margin-left: 0;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--color-text-light);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

/* === Buttons === */
.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition);
  border-radius: var(--radius);
}

.btn--gold {
  background-color: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-primary-dark);
}

.btn--gold:hover {
  background-color: var(--color-gold-light);
  border-color: var(--color-gold-light);
  transform: translateY(-1px);
}

.btn--dark {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-white);
}

.btn--dark:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-1px);
}

.btn--outline-light {
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.6);
  color: var(--color-white);
}

.btn--outline-light:hover {
  border-color: var(--color-white);
  background-color: rgba(255, 255, 255, 0.08);
}

/* === Moroccan Divider (shared) === */
.moroccan-divider {
  max-width: 360px;
  margin: 3.5rem auto 0;
  opacity: 0.75;
}

.moroccan-divider svg {
  width: 100%;
  display: block;
}
```

- [ ] **Step 2: Open index.html in browser — page should show blank ivory background, no errors**

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add CSS foundation (variables, reset, typography, buttons)"
```

---

## Task 5: Moroccan Patterns (patterns.css)

**Files:**
- Create: `css/patterns.css`

- [ ] **Step 1: Create css/patterns.css**

```css
/* Moroccan geometric decorative pattern — used as low-opacity hero overlay */
.hero__bg-pattern {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C4973A' stroke-width='0.5'%3E%3Cpath d='M40 12 L45 25 L58 25 L48 33 L52 46 L40 38 L28 46 L32 33 L22 25 L35 25 Z'/%3E%3Ccircle cx='40' cy='40' r='28'/%3E%3Cline x1='12' y1='12' x2='68' y2='68'/%3E%3Cline x1='68' y1='12' x2='12' y2='68'/%3E%3Cline x1='40' y1='4' x2='40' y2='76'/%3E%3Cline x1='4' y1='40' x2='76' y2='40'/%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.055;
  pointer-events: none;
}

/* Moroccan divider SVG (diamond chain motif) — reused between sections */
/* Usage: <div class="moroccan-divider" aria-hidden="true"><svg>...</svg></div> */
/* The SVG is inlined in HTML per section for flexibility */
```

- [ ] **Step 2: Commit**

```bash
git add css/patterns.css
git commit -m "feat: add Moroccan geometric pattern for hero overlay"
```

---

## Task 6: Navigation HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 6 -->` inside `<nav>`
- Modify: `css/style.css` — append navbar styles

- [ ] **Step 1: Replace the nav element's comment in index.html**

Replace:
```html
  <nav class="navbar" id="navbar">
    <!-- Task 6 -->
  </nav>
```

With:
```html
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="#hem" class="navbar__logo">Fatima Hijama <span>&amp;</span> Wellness</a>
      <button class="navbar__toggle" id="navToggle" aria-label="Öppna meny" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="navbar__links" id="navLinks" role="list">
        <li><a href="#om-hijama">Om Hijama</a></li>
        <li><a href="#om-fatima">Om Fatima</a></li>
        <li><a href="#tjanster">Tjänster</a></li>
        <li><a href="#priser">Priser</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#bokning" class="navbar__cta-link">Boka nu</a></li>
      </ul>
    </div>
  </nav>
```

- [ ] **Step 2: Append navbar CSS to css/style.css**

```css
/* === Navbar === */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
  transition: background-color var(--transition), box-shadow var(--transition), padding var(--transition);
  padding: 1.375rem 0;
}

.navbar.scrolled {
  background-color: var(--color-dark);
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
  padding: 0.875rem 0;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.navbar__logo span {
  color: var(--color-gold);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__links a {
  font-size: 0.825rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.82);
  letter-spacing: 0.05em;
  transition: color var(--transition);
}

.navbar__links a:hover,
.navbar__links a.active {
  color: var(--color-gold);
}

.navbar__cta-link {
  background-color: var(--color-gold);
  color: var(--color-primary-dark) !important;
  padding: 0.55rem 1.375rem;
  border-radius: var(--radius);
  font-weight: 600 !important;
  transition: background-color var(--transition) !important;
}

.navbar__cta-link:hover {
  background-color: var(--color-gold-light) !important;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 1002;
}

.navbar__toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-white);
  transition: transform var(--transition), opacity var(--transition);
  border-radius: 2px;
}
```

- [ ] **Step 3: Open in browser — verify navbar appears at top with correct fonts and gold "Boka nu" button**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add sticky navbar with logo and gold CTA button"
```

---

## Task 7: Hero Section HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 7 -->` inside `.hero`
- Modify: `css/style.css` — append hero styles

- [ ] **Step 1: Replace the hero section comment in index.html**

Replace:
```html
    <section class="hero" id="hem">
      <!-- Task 7 -->
    </section>
```

With:
```html
    <section class="hero" id="hem">
      <div class="hero__bg-pattern" aria-hidden="true"></div>
      <div class="hero__content container">
        <p class="hero__eyebrow">Certifierad behandling &middot; Stockholm &middot; Mobil tjänst</p>
        <h1 class="hero__title">Terapeutisk Hijama<br><em>i Stockholm</em></h1>
        <p class="hero__subtitle">Upplev helande hijama-behandling i ditt eget hem. Fatima Serghini, certifierad terapeut, reser till dig i hela Stockholm och erbjuder professionell hijama med lättmassage som efterbehandling.</p>
        <div class="hero__actions">
          <a href="#bokning" class="btn btn--gold">Boka din tid</a>
          <a href="#om-hijama" class="btn btn--outline-light">Läs mer</a>
        </div>
      </div>
      <a href="#om-hijama" class="hero__scroll-indicator" aria-label="Scrolla ner till Om Hijama">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>
    </section>
```

- [ ] **Step 2: Append hero CSS to css/style.css**

```css
/* === Hero === */
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Gradient placeholder — replace with real photo:
     background-image: linear-gradient(rgba(20,5,5,0.65), rgba(20,5,5,0.65)), url('../images/hero-bg.jpg');
     background-size: cover;
     background-position: center;
  */
  background: linear-gradient(150deg, #1E0808 0%, #3D1515 30%, #6B2323 60%, #3A1208 100%);
  overflow: hidden;
  text-align: center;
  padding-top: 80px;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  padding: var(--section-padding);
}

.hero__eyebrow {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 1.75rem;
}

.hero__title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 9vw, 6rem);
  font-weight: 600;
  color: var(--color-white);
  line-height: 1.05;
  margin-bottom: 1.5rem;
}

.hero__title em {
  font-style: italic;
  color: var(--color-gold);
}

.hero__subtitle {
  font-size: clamp(0.975rem, 2.2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.72);
  max-width: 620px;
  margin: 0 auto 2.75rem;
  line-height: 1.75;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero__scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.4);
  animation: hero-bounce 2.2s ease-in-out infinite;
  transition: color var(--transition);
}

.hero__scroll-indicator:hover {
  color: var(--color-gold);
}

@keyframes hero-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}
```

- [ ] **Step 3: Open in browser — verify full-viewport dark hero with title, gold eyebrow text, two buttons, bouncing scroll arrow**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add hero section with gradient background and CTA buttons"
```

---

## Task 8: Om Hijama Section HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 8 -->`
- Modify: `css/style.css` — append Om Hijama styles

- [ ] **Step 1: Replace the Om Hijama comment in index.html**

Replace:
```html
    <section class="om-hijama" id="om-hijama">
      <!-- Task 8 -->
    </section>
```

With:
```html
    <section class="om-hijama" id="om-hijama">
      <div class="container">
        <div class="section-header">
          <h2>Vad är Hijama?</h2>
          <p class="section-subtitle">En urgammal helmetod som stärker kropp och sinne</p>
        </div>
        <p class="om-hijama__intro">Hijama, eller terapeutisk koppning, är en traditionell islamisk och medicinsk behandlingsmetod med tusenåriga rötter. Behandlingen stimulerar blodcirkulationen, frigör toxiner och återställer kroppens naturliga balans — en kraftfull och naturlig metod för holistisk hälsa.</p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-card__icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6C24 6 12 18 12 28a12 12 0 0 0 24 0C36 18 24 6 24 6z" stroke="#C4973A" stroke-width="1.5" fill="rgba(196,151,58,0.08)"/>
                <path d="M24 20v8M20 24h8" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Förbättrad cirkulation</h3>
            <p>Stimulerar blodflödet och syresättningen i vävnaderna för ökad vitalitet och energi.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-card__icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="17" stroke="#C4973A" stroke-width="1.5" fill="rgba(196,151,58,0.08)"/>
                <path d="M17 24c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M24 31v2" stroke="#C4973A" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Smärtlindring</h3>
            <p>Lindrar muskelvärk, huvudvärk och kroniska smärtor naturligt och utan biverkningar.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-card__icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8 Q34 18 34 26 Q34 34 24 42 Q14 34 14 26 Q14 18 24 8Z" stroke="#C4973A" stroke-width="1.5" fill="rgba(196,151,58,0.08)"/>
                <path d="M19 26 Q24 21 29 26" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Stressreducering</h3>
            <p>Aktiverar det parasympatiska nervsystemet och skapar djup avslappning och ro.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-card__icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 38 Q24 6 38 38" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round" fill="none"/>
                <circle cx="24" cy="20" r="5" stroke="#C4973A" stroke-width="1.5" fill="rgba(196,151,58,0.1)"/>
                <path d="M17 38h14" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Rening &amp; Detox</h3>
            <p>Avlägsnar gifter och slagprodukter från blodet och kroppens vävnader.</p>
          </div>
        </div>
      </div>

      <div class="moroccan-divider" aria-hidden="true">
        <svg viewBox="0 0 320 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <line x1="0" y1="12" x2="130" y2="12" stroke="#C4973A" stroke-width="0.8"/>
          <path d="M140 12 L145 7 L150 12 L145 17 Z" fill="#C4973A" opacity="0.75"/>
          <path d="M153 12 L158 7 L163 12 L158 17 Z" fill="#C4973A" opacity="0.75"/>
          <path d="M166 12 L171 7 L176 12 L171 17 Z" fill="#C4973A" opacity="0.75"/>
          <line x1="186" y1="12" x2="320" y2="12" stroke="#C4973A" stroke-width="0.8"/>
        </svg>
      </div>
    </section>
```

- [ ] **Step 2: Append Om Hijama CSS to css/style.css**

```css
/* === Om Hijama === */
.om-hijama {
  padding: var(--section-padding);
  background-color: var(--color-bg);
  position: relative;
}

.om-hijama__intro {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;
  font-size: 1.05rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.benefit-card {
  background-color: var(--color-white);
  border: 1px solid rgba(196, 151, 58, 0.18);
  border-top: 3px solid var(--color-gold);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: transform var(--transition), box-shadow var(--transition);
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 36px rgba(125, 48, 48, 0.1);
}

.benefit-card__icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1.25rem;
}

.benefit-card__icon svg {
  width: 100%;
  height: 100%;
}

.benefit-card h3 {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.625rem;
}

.benefit-card p {
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.65;
}
```

- [ ] **Step 3: Open in browser — verify ivory section with 4 benefit cards, gold top-border on cards, divider below**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Om Hijama section with 4 benefit cards and Moroccan divider"
```

---

## Task 9: Om Fatima Section HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 9 -->`
- Modify: `css/style.css` — append Om Fatima styles

- [ ] **Step 1: Replace the Om Fatima comment in index.html**

Replace:
```html
    <section class="om-fatima" id="om-fatima">
      <!-- Task 9 -->
    </section>
```

With:
```html
    <section class="om-fatima" id="om-fatima">
      <div class="container">
        <div class="om-fatima__grid">

          <div class="om-fatima__photo-wrap">
            <!-- Replace placeholder div with <img> when real photo is available:
                 <img src="images/fatima-portrait.jpg" alt="Fatima Serghini, certifierad hijama-terapeut i Stockholm" class="om-fatima__photo"> -->
            <div class="om-fatima__photo-placeholder" aria-hidden="true">
              <span class="om-fatima__initials">FS</span>
            </div>
            <div class="om-fatima__cert-badge">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8.5" stroke="#C4973A" stroke-width="1.5"/>
                <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Certifierad Hijama-Terapeut</span>
            </div>
          </div>

          <div class="om-fatima__content">
            <div class="section-header section-header--left">
              <h2>Möt Fatima Serghini</h2>
              <p class="section-subtitle">Din certifierade hijama-terapeut i Stockholm</p>
            </div>
            <p>Med en djup passion för helande och välmående har Fatima Serghini utbildat sig till certifierad hijama-terapeut. Hon kombinerar traditionell kunskap med modern förståelse för kroppens behov och strävar alltid efter att ge varje klient en trygg och personlig upplevelse.</p>
            <p>Fatima erbjuder en mobil tjänst — hon kommer direkt till dig i Stockholm, vilket gör behandlingen enkel och bekväm. Som terapeut prioriterar hon din säkerhet, din komfort och ditt välbefinnande i varje steg.</p>
            <ul class="om-fatima__highlights">
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="rgba(196,151,58,0.15)" stroke="#C4973A" stroke-width="1"/><path d="M5 8l2 2 4-4" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Certifierad utbildning inom hijama-terapi
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="rgba(196,151,58,0.15)" stroke="#C4973A" stroke-width="1"/><path d="M5 8l2 2 4-4" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Mobil tjänst — vi kommer till dig i hela Stockholm
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="rgba(196,151,58,0.15)" stroke="#C4973A" stroke-width="1"/><path d="M5 8l2 2 4-4" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Steril engångsutrustning vid varje behandling
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="rgba(196,151,58,0.15)" stroke="#C4973A" stroke-width="1"/><path d="M5 8l2 2 4-4" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Personlig konsultation ingår vid varje besök
              </li>
            </ul>
            <a href="#bokning" class="btn btn--gold">Boka en tid</a>
          </div>

        </div>
      </div>
    </section>
```

- [ ] **Step 2: Append Om Fatima CSS to css/style.css**

```css
/* === Om Fatima === */
.om-fatima {
  padding: var(--section-padding);
  background-color: var(--color-bg-alt);
}

.om-fatima__grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4.5rem;
  align-items: center;
}

.om-fatima__photo-wrap {
  position: relative;
  max-width: 380px;
}

.om-fatima__photo-placeholder {
  aspect-ratio: 3 / 4;
  background: linear-gradient(160deg, #D4C4A8 0%, #BFA880 100%);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(196, 151, 58, 0.3);
  box-shadow: 8px 8px 0 rgba(196, 151, 58, 0.18);
}

.om-fatima__photo {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: 8px 8px 0 rgba(196, 151, 58, 0.18);
}

.om-fatima__initials {
  font-family: var(--font-serif);
  font-size: 5rem;
  color: rgba(125, 48, 48, 0.25);
  font-style: italic;
  user-select: none;
}

.om-fatima__cert-badge {
  position: absolute;
  bottom: -1.25rem;
  right: -1.25rem;
  background-color: var(--color-white);
  border: 1px solid rgba(196, 151, 58, 0.4);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
}

.om-fatima__cert-badge span {
  font-size: 0.775rem;
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.om-fatima__content .section-header {
  margin-bottom: 1.5rem;
}

.om-fatima__content p {
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.975rem;
}

.om-fatima__highlights {
  margin: 1.5rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.om-fatima__highlights li {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.9rem;
  color: var(--color-text);
}
```

- [ ] **Step 3: Open in browser — verify sand-background section with two-column layout, photo placeholder with gold shadow, cert badge, and gold button**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Om Fatima section with portrait placeholder and credentials"
```

---

## Task 10: Tjänster Section HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 10 -->`
- Modify: `css/style.css` — append Tjänster styles

- [ ] **Step 1: Replace the Tjänster comment in index.html**

Replace:
```html
    <section class="tjanster" id="tjanster">
      <!-- Task 10 -->
    </section>
```

With:
```html
    <section class="tjanster" id="tjanster">
      <div class="container">
        <div class="section-header">
          <h2>Vår Tjänst</h2>
          <p class="section-subtitle">En fullständig behandling för kropp och välmående</p>
        </div>

        <div class="service-card">
          <div class="service-card__icon-wrap" aria-hidden="true">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36" cy="36" r="34" stroke="#C4973A" stroke-width="1" fill="rgba(196,151,58,0.04)"/>
              <path d="M22 36 Q36 18 50 36 Q36 54 22 36Z" stroke="#C4973A" stroke-width="1.5" fill="rgba(196,151,58,0.08)"/>
              <circle cx="36" cy="36" r="8" stroke="#7D3030" stroke-width="1.5" fill="rgba(125,48,48,0.08)"/>
              <path d="M36 16v5M36 51v5M16 36h5M51 36h5" stroke="#C4973A" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="service-card__content">
            <h3>Terapeutisk Hijama med Efterbehandling</h3>
            <p class="service-card__duration">Ungefär 60–75 minuter per session</p>
            <p class="service-card__desc">En fullständig hijama-session som inkluderar inledande konsultation, den terapeutiska koppningsbehandlingen samt en lugnande lättmassage som eftervård — för optimal läkning och återhämtning. Fatima kommer till dig var du än befinner dig i Stockholm.</p>
            <ul class="service-card__includes">
              <li>Personlig hälsokonsultation</li>
              <li>Terapeutisk hijama-behandling</li>
              <li>Lättmassage som eftervård</li>
              <li>Efterrådgivning &amp; rekommendationer</li>
              <li>Steril engångsutrustning</li>
              <li>Mobil tjänst — hembesök i Stockholm</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="moroccan-divider" aria-hidden="true">
        <svg viewBox="0 0 320 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <line x1="0" y1="12" x2="130" y2="12" stroke="#C4973A" stroke-width="0.8"/>
          <path d="M140 12 L145 7 L150 12 L145 17 Z" fill="#C4973A" opacity="0.75"/>
          <path d="M153 12 L158 7 L163 12 L158 17 Z" fill="#C4973A" opacity="0.75"/>
          <path d="M166 12 L171 7 L176 12 L171 17 Z" fill="#C4973A" opacity="0.75"/>
          <line x1="186" y1="12" x2="320" y2="12" stroke="#C4973A" stroke-width="0.8"/>
        </svg>
      </div>
    </section>
```

- [ ] **Step 2: Append Tjänster CSS to css/style.css**

```css
/* === Tjänster === */
.tjanster {
  padding: var(--section-padding);
  background-color: var(--color-bg);
  position: relative;
}

.service-card {
  max-width: 820px;
  margin: 0 auto;
  background-color: var(--color-white);
  border: 1px solid rgba(196, 151, 58, 0.2);
  padding: 3rem 3rem 3rem 2.5rem;
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  box-shadow: 0 4px 32px rgba(125, 48, 48, 0.06);
}

.service-card__icon-wrap {
  flex-shrink: 0;
}

.service-card__content h3 {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.375rem;
  line-height: 1.2;
}

.service-card__duration {
  font-size: 0.775rem;
  color: var(--color-gold);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.service-card__desc {
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 0.975rem;
}

.service-card__includes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
}

.service-card__includes li {
  font-size: 0.875rem;
  color: var(--color-text);
  padding-left: 1.125rem;
  position: relative;
}

.service-card__includes li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background-color: var(--color-gold);
  border-radius: 50%;
}
```

- [ ] **Step 3: Open in browser — verify service card with icon, title, duration in gold, and two-column bullet list**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Tjänster section with service card"
```

---

## Task 11: Priser Section HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 11 -->`
- Modify: `css/style.css` — append Priser styles

- [ ] **Step 1: Replace the Priser comment in index.html**

Replace:
```html
    <section class="priser" id="priser">
      <!-- Task 11 -->
    </section>
```

With:
```html
    <section class="priser" id="priser">
      <div class="container">
        <div class="section-header">
          <h2>Transparenta Priser</h2>
          <p class="section-subtitle">Inga dolda avgifter — alltid ett klart och ärligt pris</p>
        </div>

        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-card__header">
              <h3>Enskild session</h3>
              <p class="pricing-card__tagline">Perfekt för dig som vill prova</p>
            </div>
            <div class="pricing-card__price">
              <span class="pricing-card__amount">650</span>
              <span class="pricing-card__currency">kr</span>
            </div>
            <ul class="pricing-card__features">
              <li>Hijama-behandling (ca 60–75 min)</li>
              <li>Lättmassage som eftervård</li>
              <li>Personlig konsultation</li>
              <li>Hembesök i Stockholm</li>
              <li>Steril engångsutrustning</li>
            </ul>
            <a href="#bokning" class="btn btn--outline-pricing">Boka nu</a>
          </div>

          <div class="pricing-card pricing-card--featured">
            <div class="pricing-card__badge">Rekommenderas</div>
            <div class="pricing-card__header">
              <h3>Paket 3 sessioner</h3>
              <p class="pricing-card__tagline">Bäst resultat och mest värde</p>
            </div>
            <div class="pricing-card__price">
              <span class="pricing-card__amount">1&nbsp;750</span>
              <span class="pricing-card__currency">kr</span>
            </div>
            <p class="pricing-card__saving">Spara 200 kr</p>
            <ul class="pricing-card__features">
              <li>3 &times; hijama-behandling</li>
              <li>3 &times; lättmassage som eftervård</li>
              <li>3 &times; personlig konsultation</li>
              <li>3 &times; hembesök i Stockholm</li>
              <li>Steril engångsutrustning ingår</li>
            </ul>
            <a href="#bokning" class="btn btn--gold" style="display:block;text-align:center;">Boka paket</a>
          </div>
        </div>

        <p class="pricing-note">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style="display:inline;vertical-align:middle;margin-right:5px" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.2"/>
            <path d="M8 7v4M8 5.5v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          Mobil tjänst ingår utan extra kostnad — Fatima reser till dig i hela Stockholm. Betalning sker kontant eller via Swish efter genomförd behandling.
        </p>
      </div>
    </section>
```

- [ ] **Step 2: Append Priser CSS to css/style.css**

```css
/* === Priser === */
.priser {
  padding: var(--section-padding);
  background-color: var(--color-primary);
}

.priser .section-header h2 {
  color: var(--color-white);
}

.priser .section-subtitle {
  color: rgba(255, 255, 255, 0.68);
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 780px;
  margin: 0 auto 2rem;
}

.pricing-card {
  background-color: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(196, 151, 58, 0.3);
  padding: 2.5rem 2rem;
  position: relative;
  transition: transform var(--transition);
}

.pricing-card:hover {
  transform: translateY(-3px);
}

.pricing-card--featured {
  background-color: var(--color-white);
  border-color: var(--color-gold);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
}

.pricing-card__badge {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-gold);
  color: var(--color-primary-dark);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 1.125rem;
  white-space: nowrap;
}

.pricing-card__header h3 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 0.25rem;
}

.pricing-card--featured .pricing-card__header h3 {
  color: var(--color-primary);
}

.pricing-card__tagline {
  font-size: 0.825rem;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 1.5rem;
}

.pricing-card--featured .pricing-card__tagline {
  color: var(--color-text-light);
}

.pricing-card__price {
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  margin-bottom: 0.25rem;
}

.pricing-card__amount {
  font-family: var(--font-serif);
  font-size: 3.75rem;
  font-weight: 600;
  color: var(--color-gold);
  line-height: 1;
}

.pricing-card--featured .pricing-card__amount {
  color: var(--color-primary);
}

.pricing-card__currency {
  font-size: 1.25rem;
  color: var(--color-gold);
  font-weight: 500;
}

.pricing-card--featured .pricing-card__currency {
  color: var(--color-primary);
}

.pricing-card__saving {
  font-size: 0.825rem;
  color: var(--color-gold);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.pricing-card__features {
  margin-bottom: 2rem;
}

.pricing-card__features li {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.78);
  padding: 0.45rem 0;
  padding-left: 1.25rem;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.pricing-card__features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-size: 0.75rem;
  font-weight: 700;
}

.pricing-card--featured .pricing-card__features li {
  color: var(--color-text);
  border-bottom-color: rgba(0, 0, 0, 0.06);
}

.pricing-card--featured .pricing-card__features li::before {
  color: var(--color-primary);
}

.btn--outline-pricing {
  display: block;
  text-align: center;
  background-color: transparent;
  border: 1.5px solid rgba(196, 151, 58, 0.6);
  color: var(--color-gold);
  padding: 0.875rem 2rem;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all var(--transition);
  border-radius: var(--radius);
  cursor: pointer;
}

.btn--outline-pricing:hover {
  background-color: rgba(196, 151, 58, 0.12);
  border-color: var(--color-gold);
}

.pricing-note {
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.65;
}
```

- [ ] **Step 3: Open in browser — verify burgundy section with two pricing cards; featured card is white with "Rekommenderas" gold badge**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Priser section with two pricing cards on burgundy background"
```

---

## Task 12: Bokningsformulär Section HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 12 -->`
- Modify: `css/style.css` — append Bokning styles

- [ ] **Step 1: Replace the Bokning comment in index.html**

Replace:
```html
    <section class="bokning" id="bokning">
      <!-- Task 12 -->
    </section>
```

With:
```html
    <section class="bokning" id="bokning">
      <div class="container">
        <div class="section-header">
          <h2>Boka din behandling</h2>
          <p class="section-subtitle">Fyll i formuläret — Fatima återkommer inom 24 timmar för att bekräfta din tid</p>
        </div>

        <form class="booking-form" name="bokning" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate id="bokningForm">
          <input type="hidden" name="form-name" value="bokning">
          <p class="booking-form__honeypot" aria-hidden="true">
            <label>Lämna tomt: <input name="bot-field" tabindex="-1" autocomplete="off"></label>
          </p>

          <div class="form-row">
            <div class="form-group">
              <label for="fornamn">Förnamn <span class="form-required" aria-hidden="true">*</span></label>
              <input type="text" id="fornamn" name="fornamn" required autocomplete="given-name" placeholder="Anna">
            </div>
            <div class="form-group">
              <label for="efternamn">Efternamn <span class="form-required" aria-hidden="true">*</span></label>
              <input type="text" id="efternamn" name="efternamn" required autocomplete="family-name" placeholder="Andersson">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="telefon">Telefonnummer <span class="form-required" aria-hidden="true">*</span></label>
              <input type="tel" id="telefon" name="telefon" required autocomplete="tel" placeholder="070-000 00 00">
            </div>
            <div class="form-group">
              <label for="epost">E-postadress <span class="form-required" aria-hidden="true">*</span></label>
              <input type="email" id="epost" name="epost" required autocomplete="email" placeholder="anna@exempel.se">
            </div>
          </div>

          <div class="form-group">
            <label for="tjanst">Tjänst</label>
            <select id="tjanst" name="tjanst">
              <option value="Enskild session - 650 kr">Enskild session — 650 kr</option>
              <option value="Paket 3 sessioner - 1750 kr">Paket 3 sessioner — 1 750 kr</option>
            </select>
          </div>

          <div class="form-group">
            <label for="onsketid">Önskad tid</label>
            <input type="text" id="onsketid" name="onsketid" placeholder="T.ex. vardagar eftermiddag, helger, eller ett specifikt datum">
          </div>

          <div class="form-group">
            <label for="meddelande">Meddelande eller frågor</label>
            <textarea id="meddelande" name="meddelande" rows="4" placeholder="Berätta gärna om dina besvär eller om du har några frågor inför behandlingen..."></textarea>
          </div>

          <button type="submit" class="booking-form__submit">Skicka bokningsförfrågan</button>

          <div class="booking-form__success" id="formSuccess" aria-live="polite" hidden>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <circle cx="22" cy="22" r="20" stroke="#C4973A" stroke-width="1.5"/>
              <path d="M13 22l7 7 11-13" stroke="#C4973A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Tack för din bokningsförfrågan! Fatima återkommer till dig inom 24 timmar för att bekräfta din tid.</p>
          </div>
        </form>
      </div>
    </section>
```

- [ ] **Step 2: Append Bokning CSS to css/style.css**

```css
/* === Bokning === */
.bokning {
  padding: var(--section-padding);
  background-color: var(--color-bg-alt);
}

.booking-form {
  max-width: 640px;
  margin: 0 auto;
}

.booking-form__honeypot {
  display: none;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.125rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text);
  letter-spacing: 0.01em;
}

.form-required {
  color: var(--color-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-white);
  border: 1.5px solid #D2C9BE;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  transition: border-color var(--transition), box-shadow var(--transition);
  outline: none;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
}

.form-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B6B6B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  cursor: pointer;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #ADA49A;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--color-gold);
  box-shadow: 0 0 0 3px rgba(196, 151, 58, 0.12);
}

.form-group input.is-error,
.form-group select.is-error,
.form-group textarea.is-error {
  border-color: var(--color-primary);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

.booking-form__submit {
  width: 100%;
  padding: 1rem 2rem;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
  margin-top: 0.5rem;
}

.booking-form__submit:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.booking-form__submit:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.booking-form__success {
  text-align: center;
  padding: 2.5rem 2rem;
  background-color: var(--color-white);
  border: 1px solid rgba(196, 151, 58, 0.3);
  margin-top: 1.5rem;
}

.booking-form__success p {
  color: var(--color-text);
  margin-top: 1rem;
  line-height: 1.75;
  font-size: 1.025rem;
}
```

- [ ] **Step 3: Open in browser — verify sand-background form section with two-column input rows, gold focus states, and burgundy submit button**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add Bokningsformulär section with Netlify Forms integration"
```

---

## Task 13: FAQ Section HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 13 -->`
- Modify: `css/style.css` — append FAQ styles

- [ ] **Step 1: Replace the FAQ comment in index.html**

Replace:
```html
    <section class="faq" id="faq">
      <!-- Task 13 -->
    </section>
```

With:
```html
    <section class="faq" id="faq">
      <div class="container">
        <div class="section-header">
          <h2>Vanliga frågor</h2>
          <p class="section-subtitle">Allt du behöver veta inför din behandling</p>
        </div>

        <div class="faq-list">

          <details class="faq-item">
            <summary class="faq-item__question">
              Vad är hijama / terapeutisk koppning?
              <span class="faq-item__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div class="faq-item__answer">
              <p>Hijama är en urgammal terapeutisk metod som innebär att man placerar koppar på huden och skapar ett undertryck. Behandlingen stimulerar blodflödet, lösgör spänningar och hjälper kroppen att rena sig från toxiner. Det är en erkänd metod inom islamisk medicin och används världen över för holistisk hälsa.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-item__question">
              Är behandlingen smärtsam?
              <span class="faq-item__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div class="faq-item__answer">
              <p>De flesta upplever en lätt dragande eller sugande känsla under behandlingen, inte smärta. Intensiteten anpassas alltid efter din komfortnivå och dina önskemål. Efteråt kan det uppstå rodnad eller märken på huden — detta är helt normalt och avtar naturligt inom ett par dagar.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-item__question">
              Hur lång tid tar en session?
              <span class="faq-item__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div class="faq-item__answer">
              <p>En komplett session tar ungefär 60–75 minuter. Det inkluderar en inledande konsultation (ca 10 min), själva hijama-behandlingen (ca 35–40 min) och lättmassage som efterbehandling (ca 15–20 min).</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-item__question">
              Är Fatima certifierad och utbildad?
              <span class="faq-item__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div class="faq-item__answer">
              <p>Ja, Fatima Serghini är certifierad hijama-terapeut med genomförd professionell utbildning. Hon arbetar alltid med steril engångsutrustning och följer strikta hygienrutiner för din säkerhet och trygghet.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-item__question">
              Hur långt kan ni resa i Stockholm?
              <span class="faq-item__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div class="faq-item__answer">
              <p>Vi är baserade i Farsta och reser till kunder i hela Stockholms stad samt angränsande kommuner. Kontakta oss om du är osäker på om vi kan komma till dig — vi försöker alltid hitta en lösning som passar dig.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-item__question">
              Vad ska jag tänka på innan behandlingen?
              <span class="faq-item__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </summary>
            <div class="faq-item__answer">
              <p>Ät en lätt måltid 2–3 timmar innan behandlingen. Undvik kaffe och alkohol dagen innan. Drick gärna vatten och se till att huden på behandlingsområdet är ren. Bär lösa och bekväma kläder. Vid frågor om specifika hälsotillstånd — hör av dig innan bokning så att Fatima kan ge rätt rådgivning.</p>
            </div>
          </details>

        </div>
      </div>
    </section>
```

- [ ] **Step 2: Append FAQ CSS to css/style.css**

```css
/* === FAQ === */
.faq {
  padding: var(--section-padding);
  background-color: var(--color-bg);
}

.faq-list {
  max-width: 740px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid rgba(196, 151, 58, 0.22);
}

.faq-item:first-child {
  border-top: 1px solid rgba(196, 151, 58, 0.22);
}

.faq-item__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.375rem 0;
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text);
  cursor: pointer;
  list-style: none;
  gap: 1.25rem;
  transition: color var(--transition);
  line-height: 1.4;
}

.faq-item__question::-webkit-details-marker {
  display: none;
}

.faq-item__question:hover {
  color: var(--color-primary);
}

.faq-item[open] > .faq-item__question {
  color: var(--color-primary);
}

.faq-item__icon {
  flex-shrink: 0;
  color: var(--color-gold);
  transition: transform var(--transition);
  display: flex;
}

.faq-item[open] > .faq-item__question .faq-item__icon {
  transform: rotate(180deg);
}

.faq-item__answer {
  padding: 0 0 1.625rem;
}

.faq-item__answer p {
  color: var(--color-text-light);
  line-height: 1.8;
  font-size: 0.975rem;
}
```

- [ ] **Step 3: Open in browser — verify FAQ with gold-bordered accordion items; click to expand, icon rotates**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add FAQ section with details/summary accordion"
```

---

## Task 14: Footer HTML + CSS

**Files:**
- Modify: `index.html` — replace `<!-- Task 14 -->` inside `<footer>`
- Modify: `css/style.css` — append Footer styles

- [ ] **Step 1: Replace the footer comment in index.html**

Replace:
```html
  <footer class="footer">
    <!-- Task 14 -->
  </footer>
```

With:
```html
  <footer class="footer">
    <div class="footer__top-border" aria-hidden="true"></div>
    <div class="container">
      <div class="footer__grid">

        <div class="footer__brand">
          <p class="footer__logo">Fatima Hijama <span>&amp;</span> Wellness</p>
          <p class="footer__tagline">Terapeutisk hijama med hjärta.<br>Vi kommer till dig i Stockholm.</p>
        </div>

        <nav class="footer__links" aria-label="Footer-navigation">
          <h4>Snabblänkar</h4>
          <ul>
            <li><a href="#om-hijama">Om Hijama</a></li>
            <li><a href="#om-fatima">Om Fatima</a></li>
            <li><a href="#tjanster">Tjänster</a></li>
            <li><a href="#priser">Priser</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#bokning">Boka tid</a></li>
          </ul>
        </nav>

        <div class="footer__contact">
          <h4>Kontakt</h4>
          <address>
            <p>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.5C5.52 1.5 3.5 3.52 3.5 6c0 3.75 4.5 9 4.5 9s4.5-5.25 4.5-9c0-2.48-2.02-4.5-4.5-4.5z" stroke="#C4973A" stroke-width="1.2" fill="rgba(196,151,58,0.12)"/><circle cx="8" cy="6" r="1.75" stroke="#C4973A" stroke-width="1.2"/></svg>
              Farsta, Stockholm
            </p>
            <p>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="3.5" width="12" height="9" rx="1" stroke="#C4973A" stroke-width="1.2" fill="rgba(196,151,58,0.08)"/><path d="M2 5l6 4.5L14 5" stroke="#C4973A" stroke-width="1.2"/></svg>
              <a href="mailto:kontakt@fatimahijama.se">kontakt@fatimahijama.se</a>
            </p>
            <p>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 2h2.5l1.25 3-1.75 1.1a9.5 9.5 0 004.9 4.9L11 9.25 14 10.5V13a1 1 0 01-1 1C6.1 14 2 9.9 2 5a1 1 0 011-3z" stroke="#C4973A" stroke-width="1.2" fill="rgba(196,151,58,0.08)"/></svg>
              Mobil tjänst &mdash; hela Stockholm
            </p>
          </address>
        </div>

      </div>

      <div class="footer__bottom">
        <p>&copy; 2026 Fatima Hijama &amp; Wellness. Alla rättigheter förbehållna.</p>
      </div>
    </div>
  </footer>
```

- [ ] **Step 2: Append Footer CSS to css/style.css**

```css
/* === Footer === */
.footer {
  background-color: var(--color-dark);
  color: rgba(255, 255, 255, 0.65);
}

.footer__top-border {
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--color-gold) 30%, var(--color-gold) 70%, transparent 100%);
  opacity: 0.5;
}

.footer .container {
  padding-top: 4rem;
  padding-bottom: 2rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer__logo {
  font-family: var(--font-serif);
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 0.75rem;
  letter-spacing: 0.01em;
}

.footer__logo span {
  color: var(--color-gold);
}

.footer__tagline {
  font-size: 0.875rem;
  line-height: 1.7;
}

.footer__links h4,
.footer__contact h4 {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 1.25rem;
}

.footer__links ul {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer__links a {
  font-size: 0.875rem;
  transition: color var(--transition);
}

.footer__links a:hover {
  color: var(--color-gold);
}

.footer__contact address {
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__contact p {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.875rem;
}

.footer__contact a {
  transition: color var(--transition);
}

.footer__contact a:hover {
  color: var(--color-gold);
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.35);
}
```

- [ ] **Step 3: Open in browser — verify dark footer with gold top border, three-column grid, gold logo ampersand, and links**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add footer with three-column layout and gold accent border"
```

---

## Task 15: JavaScript (main.js)

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create js/main.js**

```javascript
'use strict';

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const bokningForm = document.getElementById('bokningForm');
const formSuccess = document.getElementById('formSuccess');

// --- Navbar: add .scrolled class on scroll ---
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// --- Mobile nav: toggle open/closed ---
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));

  const [top, mid, bot] = navToggle.querySelectorAll('span');
  if (isOpen) {
    top.style.transform = 'rotate(45deg) translate(5px, 5px)';
    mid.style.opacity = '0';
    bot.style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    top.style.transform = '';
    mid.style.opacity = '';
    bot.style.transform = '';
  }
});

// Close mobile nav when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

function closeNav() {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  const [top, mid, bot] = navToggle.querySelectorAll('span');
  top.style.transform = '';
  mid.style.opacity = '';
  bot.style.transform = '';
}

// --- Active nav link highlighting via IntersectionObserver ---
const sections = document.querySelectorAll('main section[id]');
const navAnchors = navLinks.querySelectorAll('a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));

// --- Booking form: AJAX submit to Netlify ---
if (bokningForm && formSuccess) {
  bokningForm.addEventListener('submit', e => {
    e.preventDefault();

    // Client-side validation
    const requiredFields = bokningForm.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      field.classList.remove('is-error');
      if (!field.value.trim()) {
        field.classList.add('is-error');
        isValid = false;
      }
    });

    if (!isValid) return;

    const submitBtn = bokningForm.querySelector('.booking-form__submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Skickar…';

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(bokningForm)).toString()
    })
      .then(() => {
        bokningForm.style.display = 'none';
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(() => {
        // Network error fallback: submit normally (Netlify handles it)
        bokningForm.submit();
      });
  });

  // Clear error state on input
  bokningForm.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('is-error'));
  });
}
```

- [ ] **Step 2: Open in browser and test**
  - Scroll down — navbar should turn dark at 60px scroll
  - Resize to mobile (< 768px) — hamburger button should appear
  - Click hamburger — nav slides in
  - Click a link in nav — nav closes and page scrolls to section
  - Scroll through sections — corresponding nav link turns gold

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add main.js (navbar scroll, mobile menu, section observer, form AJAX)"
```

---

## Task 16: Responsive CSS (Media Queries)

**Files:**
- Modify: `css/style.css` — append all media queries at the end

- [ ] **Step 1: Append responsive CSS to the end of css/style.css**

```css
/* =====================================================
   RESPONSIVE — Mobile-first breakpoints
   ===================================================== */

/* --- Tablet: max 1024px --- */
@media (max-width: 1024px) {
  :root {
    --section-padding: 4rem 1.5rem;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .om-fatima__grid {
    gap: 2.5rem;
  }

  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

/* --- Mobile: max 768px --- */
@media (max-width: 768px) {
  /* Navbar */
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: fixed;
    top: 0;
    right: -100%;
    width: min(80vw, 320px);
    height: 100vh;
    background-color: var(--color-dark);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.25rem;
    transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1001;
    box-shadow: -4px 0 32px rgba(0, 0, 0, 0.35);
    padding: 2rem;
  }

  .navbar__links.open {
    right: 0;
  }

  .navbar__links a {
    font-size: 1.05rem;
  }

  .navbar__cta-link {
    font-size: 0.9rem !important;
  }

  /* Hero */
  .hero__content {
    padding: 5rem 1.25rem 4rem;
  }

  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .hero__actions .btn {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }

  /* Om Fatima */
  .om-fatima__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .om-fatima__photo-wrap {
    max-width: 280px;
    margin: 0 auto;
  }

  .section-header--left {
    text-align: center;
  }

  .section-header--left .section-subtitle {
    margin: 0 auto;
  }

  /* Service card */
  .service-card {
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    text-align: center;
  }

  .service-card__includes {
    grid-template-columns: 1fr;
    text-align: left;
  }

  /* Pricing */
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 420px;
  }

  /* Form */
  .form-row {
    grid-template-columns: 1fr;
  }

  /* Footer */
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer__brand {
    grid-column: auto;
  }
}

/* --- Small mobile: max 480px --- */
@media (max-width: 480px) {
  :root {
    --section-padding: 3.5rem 1.25rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .om-fatima__cert-badge {
    right: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1.5rem;
    white-space: nowrap;
  }

  .pricing-grid {
    max-width: 100%;
  }

  .faq-item__question {
    font-size: 1rem;
  }
}
```

- [ ] **Step 2: Test responsiveness**
  - Resize browser to 375px (iPhone) — all sections stack single-column, hamburger works
  - Resize to 768px (tablet) — benefit cards show 2 columns
  - Resize to 1200px (desktop) — full layout, no hamburger

- [ ] **Step 3: Update progress.md** — mark all tasks as complete

In `progress.md`, change all `- [ ]` to `- [x]` and update status line:
```markdown
## Status: ✅ Grundversion klar — ersätt placeholders med riktiga foton
```

- [ ] **Step 4: Commit**

```bash
git add css/style.css progress.md
git commit -m "feat: add responsive CSS for mobile, tablet, and desktop breakpoints"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] Sticky navbar with gold CTA — Task 6
- [x] Full-viewport hero with Moroccan pattern overlay — Task 7
- [x] Benefits grid (4 cards) — Task 8
- [x] Om Fatima with portrait placeholder + cert badge — Task 9
- [x] Service card (1 service) — Task 10
- [x] Pricing (650kr / 1750kr) on burgundy bg — Task 11
- [x] Netlify Forms booking form + AJAX submit — Tasks 12 + 15
- [x] FAQ accordion (6 questions) — Task 13
- [x] Footer with contact info — Task 14
- [x] SEO: meta tags, schema JSON-LD, robots.txt, sitemap.xml — Tasks 2 + 3
- [x] Google Fonts (Cormorant Garamond + Inter) — Task 3
- [x] Moroccan geometric dividers between sections — Tasks 8 + 10
- [x] Responsive CSS (mobile-first) — Task 16
- [x] CLAUDE.md, progress.md, MEMORY.md — Task 1

**No placeholders or TBDs found in plan.**

**Type consistency:** All CSS class names referenced in HTML match class names defined in CSS. JavaScript IDs (`navbar`, `navToggle`, `navLinks`, `bokningForm`, `formSuccess`) match the HTML `id` attributes exactly.
