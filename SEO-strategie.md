# SEO- & GEO-strategie — ik-boekjes (concept)

> Werkdocument. Naam nog onbekend (`[ merknaam ]`), huisstijl kan wijzigen. Alle pagina's
> gebruiken gedeelde CSS-variabelen + placeholders, dus later in één klap aanpasbaar.
> Laatst bijgewerkt: 12 juni 2026.

## 1. Product in het kort
Stoffen ik-boekje (± 13 × 18 cm) voor kinderen van 6 mnd – 3 jaar: 3 spreads, 6 insteekhoezen
voor foto's (± 10 × 5 cm), 1 veilig spiegeltje, polyester/katoen, wasbaar, eigen merklabel.
Kernbelofte: **geruststelling die je meegeeft** bij spannende eerste momenten.

## 2. Markt & concurrentie (kort onderzoek)
- **Directe concurrent:** Fabelab *My Family Album* — zacht fotoboekje (0M+), 8 pagina's voor
  familiefoto's, o.a. via Mink & Moon. Onderscheid van ons: insteek**hoezen** (verwisselbaar),
  **spiegeltje**, en expliciete focus op *eerste momenten* + cadeau.
- **Aangrenzend:** knisper-/activiteitenboekjes (bol.com Yippiez ~€12,99), houten/badboekjes,
  gepersonaliseerde kinderboeken met naam (mijneigenboekje.nl).
- **Markttrends kraamcadeau 2026:** personalisatie (naam/foto), tijdloosheid, herinnerings­waarde,
  "praktisch + fotogeniek". Ons product sluit hier sterk op aan.
- **Positionering:** premium-maar-betaalbaar, emotioneel (geborgenheid), keepsake + cadeau.

## 3. Zoekwoord-clusters (topic clusters)
Hub-and-spoke: elke spoke linkt omhoog naar zijn pillar + naar het product, en zijwaarts naar 2-3 zusjes.

### Cluster A — "Ik-boekje" & product (informatief → koop)
- **Pillar:** `seo-wat-is-een-ik-boekje.html` (wat is een ik-boekje)
- Spokes: `seo-stoffen-fotoboekje-baby.html`, `seo-voelboekje-baby.html`,
  `seo-zelf-ik-boekje-maken.html`, `seo-ik-boekje-wassen.html`
- Commercieel doel: `product.html`

### Cluster B — "Spannende eerste momenten" (tips/redactioneel)
- **Pillar/hub:** `inspiratie.html`
- Spokes: `inspiratie-eerste-schooldag.html`, `inspiratie-eerste-keer-logeren.html`,
  `inspiratie-wennen-op-de-opvang.html`, `inspiratie-verlatingsangst-eenkennigheid.html`,
  `inspiratie-eerste-keer-oppas.html`

### Cluster C — "Cadeau" (commercieel)
- **Pillar:** `seo-origineel-kraamcadeau.html`
- Spokes: `seo-cadeau-eerste-schooldag.html`, `seo-gepersonaliseerd-kraamcadeau.html`,
  `seo-cadeau-peuter-1-jaar.html`, `seo-cadeau-baby-die-alles-heeft.html`

## 4. Zoekintentie per type
- **Informatief** ("wat is…", "tips…", "verlatingsangst") → vertrouwen winnen, zacht naar product.
- **Commercieel** ("cadeau…", "kopen", "origineel kraamcadeau") → direct naar product.
- **Navigatie/merk** → later, zodra de naam er is.

## 5. GEO/AEO-regels die in elke pagina zitten
1. **Direct-antwoord-blok** in de eerste ~200 woorden (AI's citeren dit).
2. **Korte alinea's** (2-3 zinnen).
3. **Genummerde/gerangschikte lijsten** + vergelijkingstabellen (AI's pakken structuur op).
4. **JSON-LD**: Article + BreadcrumbList + FAQPage (gelijk aan zichtbare tekst).
5. **Feiten-tabel** (machine-leesbaar).
6. **Vraag-gestuurde koppen** (matcht spraak/AI-queries).
7. **E-E-A-T**: byline, datum, feitelijke en zelfstandig-leesbare tekst.
8. **`llms.txt`** in de root voor AI-crawlers.

## 6. Interne linkbuilding — regels
- Beschrijvende ankerteksten (zoekwoord), nooit "klik hier".
- Elke spoke linkt: ↑ pillar, → 2-3 zusjes, → product.
- Pillars linken ↓ naar al hun spokes.
- Redactionele (inspiratie) en commerciële (seo) pagina's kruislinken waar logisch.
- `inspiratie.html` = redactionele hub; `seo.html` = tijdelijke interne index (noindex).

## 7. Technisch
- `sitemap.xml` + `robots.txt` toegevoegd (verwijst naar sitemap; verwijst AI-crawlers naar llms.txt).
- Per pagina: `<title>` ≤60, meta description ≤155, `canonical`, Open Graph.
- `seo-template.html` = bron voor nieuwe pagina's.

## 8. Later aanpasbaar (belangrijk)
- **Naam:** overal `[ merknaam ]` → simpel te vervangen (find & replace).
- **Huisstijl:** kleuren/lettertypes via CSS-variabelen in `assets/styles.css` → één plek.
- **Domein:** canonical/sitemap gebruiken `https://www.voorbeeld.nl/` als placeholder → vervangen.
- **Webshop:** knoppen/forms zijn placeholders → later WooCommerce.

## 9. Backlog — volgende SEO-pagina's (ideeën)
afscheid school zonder huilen · cadeau 2 jaar · kraamcadeau jongen/meisje ·
sensorisch speelgoed baby · eerste vliegreis met peuter · dreumes cadeau ·
"ik-boekje vs fotoalbum" · doopcadeau · cadeau voor groot worden (broer/zus).
