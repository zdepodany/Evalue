# eValue.cz - Nové webové stránky

Moderní webové stránky pro technologickou společnost eValue.cz s novou barevnou paletou.

## 🎨 Barevná paleta

- **Primární barva**: `#0C67EF` (modrá)
- **Sekundární barva**: `#FF784E` (oranžová/koralová)

## 📁 Struktura projektu

```
Evalue/
├── index.html      # Hlavní HTML soubor
├── styles.css      # Všechny CSS styly
├── script.js       # JavaScript pro interaktivitu
└── README.md       # Tento soubor
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
- **Smooth scroll** - Plynulé scrollování mezi sekcemi
- **Animace** - Moderní CSS animace a efekty
- **Interaktivní prvky** - Dynamické komponenty s JavaScriptem
- **Moderní UI/UX** - Čistý, minimalistický design podle aktuálních trendů
- **Přístupnost** - Respektuje základní principy přístupnosti

## 📱 Sekce webu

1. **Hero sekce** - Úvodní sekce s hlavním sdělením
2. **Služby** - Přehled poskytovaných služeb
3. **O nás** - Informace o společnosti a statistiky
4. **Kontakt** - Kontaktní formulář a informace
5. **Footer** - Navigace a právní informace

## 🎯 Technologie

- Čistý HTML5
- CSS3 (s moderními funkcemi jako CSS Grid, Flexbox, animace)
- Vanilla JavaScript (žádné frameworky)

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

Veškerý textový obsah je v `index.html`. Jednoduše upravte texty podle vašich potřeb.

### Kontaktní formulář

Kontaktní formulář je momentálně nastaven pouze pro frontend. Pro funkční odesílání zpráv je potřeba:

1. Přidat backend endpoint (např. PHP, Node.js)
2. Nebo použít službu jako Formspree, Netlify Forms, atd.

V `script.js` najdete komentář s ukázkou, jak by vypadalo odesílání na server.

## 🌐 Prohlížeče

Web je optimalizován pro moderní prohlížeče:
- Chrome/Edge (nejnovější verze)
- Firefox (nejnovější verze)
- Safari (nejnovější verze)

## 📄 Licence

Všechna práva vyhrazena © 2026 eValue.cz

