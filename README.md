# eValue.cz - Webové stránky

Moderní webové stránky pro technologickou společnost eValue.cz s novou barevnou paletou a kompletní SEO optimalizací.

## 🎨 Barevná paleta

- **Primární barva**: `#0C67EF` (modrá)
- **Sekundární barva**: `#FF784E` (oranžová/koralová)

## 📁 Struktura projektu

```
Evalue/
├── index.html      # Hlavní HTML soubor
├── styles.css      # Všechny CSS styly
├── script.js       # JavaScript pro interaktivitu
├── i18n.js         # Internacionalizace (překlady pro cs, en, de, bg)
├── robots.txt       # SEO - robots.txt pro vyhledávače
├── sitemap.xml      # SEO - sitemap pro vyhledávače
└── README.md        # Tento soubor
```

## 🚀 Spuštění

Jednoduše otevřete `index.html` v prohlížeči nebo použijte lokální server:

```bash
# Python 3
python -m http.server 8000

# Node.js (s http-server)
npx http-server

# PHP
php -S localhost:8000
```

Poté navštivte `http://localhost:8000` v prohlížeči.

## ✨ Funkce

- **Responzivní design** - Optimalizováno pro všechna zařízení
- **Internacionalizace** - Podpora pro češtinu, angličtinu, němčinu a bulharštinu
- **Smooth scroll** - Plynulé scrollování mezi sekcemi
- **Animace** - Moderní CSS animace a efekty
- **Interaktivní prvky** - Dynamické komponenty s JavaScriptem
- **Moderní UI/UX** - Čistý, minimalistický design podle aktuálních trendů
- **Přístupnost** - Respektuje základní principy přístupnosti
- **SEO optimalizace** - Kompletní technické SEO včetně meta tagů, schema.org, sitemap a robots.txt

## 📱 Sekce webu

1. **Hero sekce** - Úvodní sekce s hlavním sdělením
2. **Služby** - Přehled poskytovaných služeb (Agile Team, Body Shopping, Vývoj aplikací)
3. **Produkty** - Vlastní softwarová řešení (FireAlarm, FirePlan, StatiF, ChallengeMe, EasyERP, TimeWise, EvHard, eCms, DůvěřujPrověřuj)
4. **Reference** - Reference od klientů
5. **O nás** - Informace o společnosti a statistiky
6. **Tým** - Představení členů týmu
7. **Kariéra** - Volné pozice (Node.js, HTML/CSS, React vývojář)
8. **Kontakt** - Kontaktní formulář a informace
9. **Podporujeme** - Organizace, které podporujeme
10. **Partneři** - Spolupracující společnosti
11. **Footer** - Navigace a kontaktní informace

## 🌐 Internacionalizace

Web podporuje 4 jazyky:
- **Čeština** (cs) - výchozí
- **Angličtina** (en)
- **Němčina** (de)
- **Bulharština** (bg)

Překlady jsou uloženy v `i18n.js` a přepínání jazyka je dostupné v navigaci.

## 🎯 Technologie

- Čistý HTML5
- CSS3 (s moderními funkcemi jako CSS Grid, Flexbox, animace)
- Vanilla JavaScript (žádné frameworky)
- Schema.org strukturovaná data (JSON-LD)

## 🔍 SEO optimalizace

Web obsahuje kompletní technické SEO:

- **Meta tagy** - Title, description, keywords, canonical
- **Open Graph** - Metadata pro sociální sítě
- **Twitter Cards** - Metadata pro Twitter
- **Schema.org** - Strukturovaná data pro:
  - Organization
  - SoftwareApplication (produkty)
  - JobPosting (volné pozice)
- **Sitemap.xml** - XML sitemap s hreflang odkazy
- **Robots.txt** - Pokyny pro vyhledávače
- **Optimalizované nadpisy** - Správná hierarchie H1-H3 s klíčovými slovy

## 📝 Přizpůsobení

### Změna barev

Barvy jsou definované v CSS proměnných v `styles.css`:

```css
:root {
    --primary-color: #0C67EF;
    --secondary-color: #FF784E;
}
```

### Úprava obsahu

Veškerý textový obsah je v `i18n.js` v objektu `translations`. Každý jazyk má svůj vlastní objekt s překlady. Pro úpravu textů upravte příslušné klíče v `i18n.js`.

Struktura překladů:
```javascript
translations = {
    cs: {
        'nav.home': 'Domů',
        'hero.title1': 'Dáváme život',
        // ...
    },
    en: {
        'nav.home': 'Home',
        // ...
    }
    // ...
}
```

### Kontaktní formulář

Kontaktní formulář je momentálně nastaven pouze pro frontend. Pro funkční odesílání zpráv je potřeba:

1. Přidat backend endpoint (např. PHP, Node.js)
2. Nebo použít službu jako Formspree, Netlify Forms, atd.

V `script.js` najdete komentář s ukázkou, jak by vypadalo odesílání na server.

### SEO úpravy

Pro úpravu SEO metadat upravte:
- **Meta tagy** - `index.html` (head sekce)
- **Schema.org** - `index.html` (JSON-LD bloky před `</body>`)
- **Sitemap** - `sitemap.xml`
- **Robots** - `robots.txt`

## 🌐 Prohlížeče

Web je optimalizován pro moderní prohlížeče:
- Chrome/Edge (nejnovější verze)
- Firefox (nejnovější verze)
- Safari (nejnovější verze)

## 📄 Licence

Všechna práva vyhrazena © 2026 eValue.cz
