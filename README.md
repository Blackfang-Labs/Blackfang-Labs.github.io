# Blackfang Labs — Website

The official landing site for Blackfang Labs, the umbrella brand behind Bloodhound Recon and Nightbreak Pentest Suite.

## Theme
Black + neon cyan terminal aesthetic — `#000000` / `#0a0f1a` / `#00ffe5` / `#00bcd4`

## Stack
- Pure HTML / CSS / Vanilla JS (zero dependencies)
- No build step required — just serve the `public/` directory

## Quick Start

```bash
# Using Python
python -m http.server 8082 --directory public

# Using Node
npx serve public -l 8082
```

Access at: http://127.0.0.1:8082

## Structure

```
blackfang-labs-website/
  public/
    index.html     # Main landing page
  src/             # Source assets (pre-compiled CSS/JS)
  assets/
    style.css      # Core stylesheet
    app.js         # Terminal animations and interactions
  README.md
  package.json
```

## Sections

1. **Hero** — Terminal-style animated header with typing effect
2. **Tools** — Showcase cards for Bloodhound Recon and Nightbreak Pentest Suite
3. **About** — Blackfang Labs mission statement
4. **Contact / Docs** — Links to documentation and GitHub

## Part of Blackfang Labs
https://github.com/blackfang-labs
