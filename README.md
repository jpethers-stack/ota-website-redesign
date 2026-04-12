# Old Town Academy — Website Redesign

A static site redesign concept for [Old Town Academy](https://www.oldtownacademy.org), a K-8 public charter school in San Diego.

Built with plain HTML, CSS, and vanilla JS. No framework, no bundler, no npm. Deploys with zero build step.

## Deploy to Netlify (drag-and-drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `OTA Website Rebuild` folder onto the page
3. Done. Netlify gives you a live URL in about 30 seconds.

Optional: In **Site settings > Build & deploy > Post processing**, enable "Pretty URLs" so `/about/charter.html` is accessible at `/about/charter/`.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo (or use Direct Upload)
2. In the Cloudflare dashboard, create a new Pages project
3. Set the build output directory to the repo root (no build command needed)
4. Deploy

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo
2. Go to **Settings > Pages**
3. Set Source to "Deploy from a branch" and select `main` (root)
4. Save. The site will be live at `https://username.github.io/repo-name/`

## Local preview

Open `index.html` directly in a browser for a quick look. For full navigation across pages, serve the folder locally:

```bash
# Python (built into macOS)
cd "OTA Website Rebuild"
python3 -m http.server 8000

# Then open http://localhost:8000
```

## Project structure

```
OTA Website Rebuild/
  index.html              Homepage
  css/site.css            Design system + all styles
  js/site.js              Mobile nav toggle (vanilla JS)
  img/                    All photos (downloaded from OTA site)
  about/                  About section (9 pages)
  curriculum/             Academics section (8 pages)
  admissions/             Admissions section (2 pages)
  family/                 Family resources (3 pages)
  news/                   News index + 3 articles
  governance/             Governance (1 page)
  give/                   Give Back (1 page)
  legal/                  ADA, Title IX, UCP (3 pages)
  reference/              Original homepage concept (not deployed)
  BRIEF.md                Project brief (not deployed)
  README.md               This file
```

## Design system

- **Colors**: Royal Purple `#4B2E83`, Deep Purple `#2E1B57`, Soft Lavender `#F3EEFB`, Gold `#F5B82E`, Ink `#1A1326`, Paper `#FAF8FF`
- **Typography**: Fraunces (serif, headlines) + Inter (sans, body) via Google Fonts
- **Responsive**: Tested at 375px, 768px, 1280px

## Updating nav/footer across all pages

The nav and footer HTML is duplicated in every page file. To update it across all pages after editing one file, use a find-and-replace in your editor or run:

```bash
# Example: update phone number across all HTML files
find . -name "*.html" -not -path "./reference/*" -exec sed -i '' 's/old-text/new-text/g' {} +
```

## Credits

Redesign concept by James, STEM Department.
