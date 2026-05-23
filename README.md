# Fatima Hijama & Wellness — Webbplats

Professionell single-page hemsida för **Fatima Hijama & Wellness**, en mobil hijama-terapitjänst i Stockholm. Sajten är byggd utan ramverk och hostas på Netlify.

## Innehåll

- [Teknik](#teknik)
- [Struktur](#struktur)
- [Lokal utveckling](#lokal-utveckling)
- [Deploy till Netlify](#deploy-till-netlify)
- [Placeholders att ersätta](#placeholders-att-ersätta)
- [Färgpalett](#färgpalett)

---

## Teknik

| Vad | Hur |
|-----|-----|
| Markup | HTML5 med semantisk struktur och schema.org JSON-LD |
| Styling | CSS3 — custom properties, Flexbox, Grid. Inga ramverk. |
| Scripting | Vanilla JavaScript (ES6+) |
| Typsnitt | Cormorant Garamond (rubriker) + Inter (brödtext) via Google Fonts |
| Formulär | Netlify Forms med AJAX-submit och honeypot-skydd |
| Hosting | Netlify (CDN, HTTPS, Forms) |
| SEO | meta-tags, Open Graph, Twitter Card, robots.txt, sitemap.xml |

---

## Struktur

```
/
├── index.html          # Huvud-HTML — single-page med 9 sektioner
├── css/
│   ├── style.css       # Alla stilar: reset, typografi, layout, komponenter, animationer
│   └── patterns.css    # Marockanskt dekorativt mönster (hero overlay + dividers)
├── js/
│   └── main.js         # Mobilmeny, FAQ-accordion, formulär-AJAX, scroll-reveal
├── images/             # Bilder (se Placeholders nedan)
├── robots.txt
├── sitemap.xml
├── netlify.toml        # Netlify-konfiguration
└── CLAUDE.md           # Projektinstruktioner för Claude Code
```

### Sektioner i index.html

1. **Hero** — fullskärm med bakgrundsbild, CTA-knappar och scroll-indikator
2. **Om Hijama** — fyra förmånskort med SVG-ikoner
3. **Om Fatima** — tvåkolumns-layout med bild och certifieringsbadge
4. **Tjänster & Priser** — service-kort + prisrutnät (enskild / paket)
5. **FAQ** — animerat `<details>`-accordion med 6 frågor
6. **Bokning** — Netlify-formulär med klientvalidering och AJAX-submit
7. **Pre-CTA** — terrakotta-sektionsblock med call-to-action
8. **Footer** — logga, snabblänkar, kontaktinfo

---

## Lokal utveckling

Öppna `index.html` direkt i webbläsare, eller starta en lokal server:

```bash
npx serve .
# eller
python -m http.server 8000
```

Netlify-formuläret fungerar inte lokalt — det kräver Netlify-miljön. Testbokningar syns i Netlify-dashboardet under **Forms**.

---

## Deploy till Netlify

1. Pusha repot till GitHub (se nedan)
2. Gå till [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Välj GitHub-repot `fatimahijama`
4. Inställningar:
   - **Build command:** *(lämna tomt)*
   - **Publish directory:** `/` (root)
5. Klicka **Deploy site**

### E-postnotifiering för bokningsformuläret

Efter deploy: **Site settings → Forms → Notifications → Add notification → Email notification**

Ange Fatimas e-postadress dit. Varje bokningsförfrågan skickas automatiskt.

### Eget domännamn

**Site settings → Domain management → Add custom domain** → följ Netlifys DNS-instruktioner.

---

## Placeholders att ersätta

| Vad | Var | Ersätt med |
|-----|-----|-----------|
| Hero-bakgrundsbild | `css/style.css` rad ~307 | Lägg till `images/hero-bg.jpg` och ta bort kommentaren |
| Porträttfoto Fatima | `index.html` Om Fatima-sektion | `images/fatima-portrait.jpg` (nuvarande: utrustningsbild) |
| Domän i schema | `index.html` JSON-LD script | Riktig domän, t.ex. `https://fatimahijama.se` |
| Domän i sitemap | `sitemap.xml` | Riktig domän |
| Canonical URL | `index.html` `<head>` | Riktig domän |

---

## Färgpalett

| Variabel | Hex | Användning |
|----------|-----|-----------|
| `--color-primary` | `#7A5040` | Terrakotta — rubriker, knappar |
| `--color-primary-dark` | `#5A3528` | Hover-state på primary |
| `--color-gold` | `#C4973A` | Accenter, ikoner, priser |
| `--color-gold-light` | `#D4A84A` | Hover-state på gold |
| `--color-bg` | `#F8F4EE` | Varm ivory — standard bakgrund |
| `--color-bg-alt` | `#EDE8DE` | Dämpad sand — alternerande sektioner |
| `--color-text` | `#2A2A2A` | Brödtext |
| `--color-text-light` | `#6B6B6B` | Sekundär text |
| `--color-dark` | `#1A1A1A` | Footer-bakgrund |

---

## Kontakt

**Fatima Serghini** — Certifierad Hijama-Terapeut  
Farsta, Stockholm  
073-655 32 60  
fatima_serghini@hotmail.com
