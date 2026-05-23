# Fatima Hijama & Wellness — Webbplatsdesign

**Datum:** 2026-05-23
**Projekt:** Fatima Hijama & Wellness
**Teknik:** HTML / CSS / JavaScript (Vanilla)
**Hosting:** Netlify (med Netlify Forms)

---

## Affärskontext

- **Företag:** Fatima Hijama & Wellness
- **Terapeut:** Fatima Serghini — certifierad hijama-terapeut
- **Tjänst:** Terapeutisk hijama med efterbehandling (lättmassage)
- **Verksamhetsmodell:** Mobil — terapeuten reser till kunden i Stockholm
- **Bas:** Farsta, Stockholm (men täcker hela Stockholm)
- **Målgrupp:** Stockholmare som söker alternativ/komplementär hälsovård

---

## Prissättning

| Tjänst | Pris |
|---|---|
| 1 session (hijama + lättmassage) | 650 kr |
| Paket: 3 sessioner | 1 750 kr (spara 200 kr) |

---

## Teknisk arkitektur

### Stack
- **HTML5** — semantisk markup för SEO (article, section, nav, header, footer)
- **CSS3** — anpassad styling, CSS custom properties, Flexbox/Grid, inga ramverk
- **Vanilla JS** — FAQ accordion, smooth scroll, mobilmeny, formulärvalidering
- **Google Fonts** — Cormorant Garamond (rubriker) + Inter (brödtext)
- **Netlify Forms** — formulärhantering utan backend

### Filstruktur
```
/
├── index.html
├── css/
│   ├── style.css          # Huvud-stylesheet
│   └── patterns.css       # Marockaninspirerade SVG-mönster
├── js/
│   └── main.js            # Accordion, navbar, smooth scroll
├── images/
│   ├── hero-bg.jpg        # Hero-bakgrundsbild (placeholder)
│   ├── fatima-portrait.jpg # Porträttfoto (placeholder)
│   └── icons/             # SVG-ikoner för fördelar
├── netlify.toml           # Netlify-konfiguration
└── _redirects             # Netlify redirects
```

---

## Visuell Identitet

### Färgpalett
```css
--color-primary:     #7D3030;  /* Djup burgundy/terrakotta */
--color-gold:        #C4973A;  /* Åldrat guld — accenter */
--color-bg:          #F8F4EE;  /* Varm ivory — bakgrund */
--color-bg-alt:      #EDE8DE;  /* Dämpad sand — alternerande sektioner */
--color-text:        #2A2A2A;  /* Djup kol — brödtext */
--color-text-light:  #6B6B6B;  /* Sekundär text */
--color-white:       #FFFFFF;
```

### Typografi
- **Rubriker:** Cormorant Garamond, italic variant för extra elegans
- **Brödtext:** Inter, 400/500 vikt
- **Knappar:** Inter, 600 vikt, versaler med letter-spacing

### Marockanska designelement (subtila)
- Geometriska SVG-dividers mellan sektioner (åttauddig stjärna / zellige-motiv)
- Tunn guldlinje/ram som accent på citatkort och priskort
- Diskret geometrisk mönsterbakgrund i hero (låg opacitet, ~5%)
- Inga överdrivna arabeskemönster — kulturreferenser ska vara eleganta, inte klichéartade

---

## Sidstruktur & Sektioner

### 1. Navigation (fast/sticky)
- Logo vänster: "Fatima Hijama & Wellness" i Cormorant Garamond
- Länkar höger: Om Hijama · Om Fatima · Tjänster · Priser · Kontakt
- CTA-knapp: "Boka nu" (guld bakgrund, burgunder text)
- Hamburgermeny på mobil med smooth slide-in

### 2. Hero
- Full viewport-höjd
- Bakgrundsbild: lugn, professionell (hijama/wellness-tema)
- Overlay: mörk gradient för läsbarhet
- H1: "Terapeutisk Hijama i Stockholm"
- Underrubrik: "Certifierad behandling — vi kommer till dig"
- Två knappar: "Boka din tid" (primär) + "Läs mer" (sekundär/outline)
- Subtil nedåtpil/scroll-indikator

### 3. Vad är Hijama?
- Bakgrund: ivory (`--color-bg`)
- Kort introduktionstext om hijama (2-3 meningar)
- 4 fördelskort med SVG-ikoner och guld-accent:
  - Förbättrad cirkulation
  - Smärtlindring
  - Stressreducering
  - Rening & detox
- Marockan geometrisk SVG-divider i botten

### 4. Om Fatima
- Bakgrund: sand (`--color-bg-alt`)
- Två-kolumns layout: bild vänster, text höger (omvändt på mobil)
- Porträttfoto med subtil guldram
- Rubrik: "Möt Fatima Serghini"
- Text: personlig historia, passion för hijama, utbildningsbakgrund
- Certifieringsbadge/ikon med text "Certifierad Hijama-Terapeut"

### 5. Tjänster
- Bakgrund: ivory
- En primär tjänstekort (centrerat):
  - **Terapeutisk Hijama med Efterbehandling**
  - Beskrivning: vad sessionen innehåller, hur lång tid (~60 min)
  - Inkluderar: konsultation, hijama-behandling, lättmassage eftervård
  - Ikon i guld

### 6. Priser
- Bakgrund: burgunder (`--color-primary`) med ivory-text
- Rubrik: "Transparenta priser"
- Två priskort sida vid sida:
  - **Enskild session** — 650 kr
  - **Paket 3 sessioner** — 1 750 kr *(spara 200 kr)* [rekommenderad badge i guld]
- Notering: "Mobil tjänst ingår — vi kommer till dig i Stockholm"

### 7. Bokningsformulär
- Bakgrund: ivory
- Rubrik: "Boka din behandling"
- Netlify Form med fält:
  - Förnamn + Efternamn
  - Telefonnummer
  - E-postadress
  - Önskad datum/tid (text input, inte date picker)
  - Meddelande/önskemål (textarea)
- Submit: "Skicka bokningsförfrågan" (guld knapp)
- Netlify-attribut: `netlify` + `netlify-honeypot` för spam-skydd
- Bekräftelsemeddelande inline efter submit (ingen sidoroute)

### 8. FAQ
- Bakgrund: sand
- 6 frågor i accordion-format (JS-driven):
  1. Vad är hijama/koppning?
  2. Är det smärtsamt?
  3. Hur lång tid tar en session?
  4. Vem kan utföra hijama på mig? / Är Fatima certifierad?
  5. Hur långt kan du resa i Stockholm?
  6. Vad ska jag tänka på innan behandlingen?

### 9. Footer
- Bakgrund: djup kol (`#1A1A1A`)
- Tre kolumner:
  - Logo + tagline
  - Snabblänkar
  - Kontaktinfo: `kontakt@fatimahijama.se` + "Stockholm — Mobil tjänst"
- Copyright: © 2026 Fatima Hijama & Wellness
- Diskret marockan geometrisk border i toppen av footer (guld linje)

---

## SEO-strategi

### On-page SEO
- **Title:** `Fatima Hijama & Wellness | Terapeutisk Hijama Stockholm`
- **Meta description:** `Certifierad hijama-terapeut i Stockholm. Mobil tjänst – vi kommer till dig i Farsta och hela Stockholm. Boka terapeutisk hijama med lättmassage efterbehandling.`
- **H1:** En enda H1 i hero-sektionen
- **H2:** En per sektion (Om Hijama, Om Fatima, Tjänster, Priser, Kontakt)
- **Alt-texter:** Beskrivande alt-attribut på alla bilder
- **Semantisk HTML:** `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`

### Teknisk SEO
- `robots.txt` — tillåt alla crawlers
- `sitemap.xml` — enkel sitemap för indexering
- **Schema markup (JSON-LD):**
  - `LocalBusiness` med namn, adress (Farsta, Stockholm), telefon, öppettider
  - `Service` för hijama-tjänsten
- **Open Graph** + Twitter Card-taggar för delning i sociala medier
- **Canonical URL**
- **Viewport meta** — mobile-first
- **Lang-attribut:** `lang="sv"` på html-elementet

### Prestanda (Google Core Web Vitals)
- Bilder komprimerade (WebP-format)
- Inga externa JS-bibliotek (ingen jQuery, ingen ramverk)
- CSS inline för above-the-fold kritisk stil
- Font preconnect för Google Fonts
- Mål: Lighthouse-poäng >90 på alla kategorier

---

## Responsivitet

- **Mobile-first** CSS-approach
- Breakpoints: 768px (tablet), 1200px (desktop)
- Navigationens hamburgermeny aktiveras under 768px
- Alla grid-layouter kollapsar till en kolumn på mobil
- Touch-vänliga formulärelement (min 44px taphöjd)

---

## Netlify-konfiguration

```toml
# netlify.toml
[build]
  publish = "/"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Formulär vidarebefordras till: `kontakt@fatimahijama.se` (platshållare — ändras till äkta e-post)

---

## Placeholders att ersätta senare

| Placeholder | Ersätt med |
|---|---|
| `kontakt@fatimahijama.se` | Fatimas äkta e-postadress |
| `hero-bg.jpg` | Professionellt foto av hijama-behandling |
| `fatima-portrait.jpg` | Porträttfoto av Fatima Serghini |
| Fatimas personliga text | Riktig biografi på svenska |
| Telefonnummer | Fatimas kontaktnummer |
