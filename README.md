# Conceptsite ik-boekjes

Statische conceptwebsite voor een merk dat stoffen **ik-boekjes** verkoopt. Gebouwd als
voorbereiding op een latere WordPress/WooCommerce-site. Naam en huisstijl liggen nog niet vast
en zijn met opzet eenvoudig aanpasbaar gehouden.

## Lokaal bekijken
Python/Node zijn niet vereist. Start de meegeleverde PowerShell-server:

```
Rechtsklik serve.ps1 → "Run with PowerShell"
```
Open daarna **http://localhost:8000/index.html**

## Structuur
- `index.html` — home
- `product.html` — productpagina (met Product-schema)
- `inspiratie.html` — redactionele hub (tips), linkt naar alle `inspiratie-*.html`
- `inspiratie-*.html` — tips-artikelen (eerste schooldag, logeren, opvang, oppas, verlatingsangst, afscheid)
- `seo-*.html` — SEO/AEO-landingspagina's (niet in hoofdmenu; entree via Google/AI)
- `seo-template.html` — herbruikbare template voor nieuwe SEO-pagina's
- `seo.html` — **tijdelijke** interne index van alle SEO-pagina's (noindex); bereikbaar via de
  gestreepte "⚙ SEO"-knop in het menu. Verwijder deze knop + pagina vóór livegang.
- `assets/styles.css` — alle huisstijl (kleuren/lettertypes via CSS-variabelen) + componenten
- `assets/site.js` — injecteert kop/voet/stijl-switcher; onthoudt thema+lettertype (localStorage)
- `sitemap.xml`, `robots.txt`, `llms.txt` — technische SEO + AI-vindbaarheid
- `SEO-strategie.md` — markt, zoekwoord-clusters, interne-linkplan, backlog

## Later aanpassen (belangrijk)
1. **Merknaam:** overal staat `[ merknaam ]`. Eén find-&-replace door alle bestanden vervangt het.
2. **Kleuren/lettertypes:** pas de thema-variabelen bovenin `assets/styles.css` aan. De drie thema's
   (Klei, Confetti, Mist) en 2 lettertypes zijn voorbeelden — kies er één en die wordt de huisstijl.
3. **Domein:** vervang `https://www.voorbeeld.nl/` in `sitemap.xml`, `robots.txt` en de `canonical`/
   `og`-tags + JSON-LD in elke pagina door het echte domein.
4. **Webshop:** knoppen en formulieren zijn placeholders (tonen een melding). Koppel later WooCommerce.
5. **Productfoto's:** de boekjes zijn nu CSS-tekeningen; vervang door echte foto's.

## Een nieuwe SEO-pagina maken
1. Kopieer `seo-template.html` naar `seo-<onderwerp>.html`.
2. Vul alles tussen `{{ }}` in (titel, beschrijving, direct antwoord, feiten, FAQ, JSON-LD).
3. Voeg de pagina toe aan `seo.html`, `sitemap.xml` en `llms.txt`, en leg interne links.

## SEO/AEO-principes (in elke pagina)
Direct-antwoord-blok in de eerste ~200 woorden · korte alinea's · genummerde lijsten/tabellen ·
JSON-LD (Article + Breadcrumb + FAQ) · feiten-tabel · vraag-koppen · byline (E-E-A-T) · `llms.txt`.

## Deploy
De repo staat op GitHub. Een push werkt de gekoppelde live-omgeving (GitHub Pages/Vercel) automatisch bij.
