# Fatima Hijama & Wellness — Framsteg

## Status: ✅ Premium version klar — redo för lansering

## Grundfunktioner
- [x] Task 1: Projektstruktur & docs
- [x] Task 2: Netlify + SEO config
- [x] Task 3: HTML-skelett + meta-taggar + schema
- [x] Task 4: CSS-grund (variabler, reset, typografi, knappar)
- [x] Task 5: Marockaninspirerade SVG-mönster (patterns.css)
- [x] Task 6: Navigation (HTML + CSS)
- [x] Task 7: Hero-sektion (HTML + CSS)
- [x] Task 8: Om Hijama-sektion (HTML + CSS)
- [x] Task 9: Om Fatima-sektion (HTML + CSS)
- [x] Task 10: Tjänster-sektion (HTML + CSS)
- [x] Task 11: Priser-sektion (HTML + CSS)
- [x] Task 12: Bokningsformulär (HTML + CSS, Netlify Forms)
- [x] Task 13: FAQ-sektion (HTML + CSS)
- [x] Task 14: Footer (HTML + CSS)
- [x] Task 15: JavaScript (main.js)
- [x] Task 16: Responsiv CSS (media queries)

## Förbättringar (efter grundversion)
- [x] SVG koppningskupa-logo i navbar
- [x] Navbar: jämn länkfördelning + glass blur scroll-effekt
- [x] Riktiga bilder: hero-bg.jpg + fatima-tools.jpg (ingen porträttbild)
- [x] Om Fatima använder fatima-tools.jpg (koppningsutrustning) — ej porträtt
- [x] Premium UX — 3 designprinciper (commit e28cb00):
  - Hero entrance animations (staggerade fadeUp på load)
  - Scroll reveal system (IntersectionObserver, data-reveal + data-delay)
  - Button shimmer, card hover lift, gold pulse badge, FAQ accordion animation
  - Pre-footer CTA-sektion (burgunder gradient, stark avslutning)
  - prefers-reduced-motion respekteras

## Session 2 — Ändringar (2026-05-23)
- [x] Navbar: snabbare scroll-transition (0.45s → 0.15s)
- [x] Primärfärg: mjukare terrakotta #7A5040 (ersätter kraftig röd #7D3030)
- [x] Tjänster + Priser: slogs ihop till en sektion (centrerat tjänstekort + 2 prisskort sida vid sida)
- [x] Prisskort "Paket 3 sessioner": navbar-svart bakgrund (#200D0D) med gulddetaljer
- [x] Tjänster: lagt till våt koppning (al-hijama) i beskrivning och inkluderat-lista
- [x] Tjänster: notering om att Fatima erbjuder behandling enbart till kvinnor
- [x] Riktiga kontaktuppgifter inlagda:
  - E-post: fatima_serghini@hotmail.com (schema + footer)
  - Telefon: 073-655 32 60 (navbar outline-knapp + footer)
- [x] Navbar: telefonnummer som separat outline-knapp bredvid "Boka nu"
- [x] Hero eyebrow-text: reducerad letter-spacing på mobil (passar en rad)
- [x] Om Fatima cert-badge: fixad bugg på mobil (satt inuti bilden, ej utanför)

## Placeholders kvar att ersätta
- [ ] Domän: koppla fatimahijama.se (eller vald domän) i Netlify
- [ ] JSON-LD schema + canonical URL + sitemap.xml: uppdatera med riktig domän
- [ ] Netlify Forms: lägg till fatima_serghini@hotmail.com som notifikationsadress i dashboard
- [ ] Google Business Profile: registrera och länka till hemsidan

## Git-historik (senaste commits)
- e28cb00 — Premium UX: hero animations, scroll reveal, micro-interactions, FAQ accordion, pre-CTA
- db74f7b — Navbar: SVG logo + glass blur scroll effect
