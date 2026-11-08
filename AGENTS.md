# AGENTS.md

Guidance for AI agents (and humans) working in this repository.

## What this is

The personal portfolio of **Diego Velasco Bayón**, hosted at `Spitfire101.github.io`
via GitHub Pages. A single-page, minimal/editorial site presenting his CV.

## Design direction

- **Look:** minimal / editorial (inspired by Mitchell Hashimoto's personal site). Sticky left
  sidebar (name, role, nav), content area that shows **one section at a time**,
  generous whitespace, no cards, shadows or boxed chips.
- **Palette, "Ink + green":** neutral near-black ground (`#141414`), soft white text
  (`#ededeb`), vivid green accent (`#4be283`). Deliberately *not* navy, and no orange/parchment
  tint (an earlier warm "ink + sage" version was replaced for that reason).
  All colours are CSS variables on `:root` in `styles.css` (contrast noted there). Dark only:
  a light mode was tried and deliberately removed.
- **Type system (self-hosted, OFL):** Geist Sans (prose + name), Geist Mono (metadata, nav,
  labels, tech tags); contact is footer icons. `fonts/` also holds Geist Pixel, currently unused.
- **Green is for meaning only:** active nav item, `.annot` margin notes, link underlines/hover,
  the motto rule. Bullets, group labels and tags stay muted.
- **Green margin annotations** (`.annot`) flag honors / status inline (e.g. "now",
  "in progress", "honorable mention").

## Tech stack

- **Static HTML/CSS + a little vanilla JS**, no build step, no framework, no bundler.
- Deployed by **GitHub Actions** (`.github/workflows/deploy.yml`) on push to `main`,
  publishing the repo root directly to GitHub Pages.

## Layout

| Path | Purpose |
|---|---|
| `index.html` | The whole page: structure + content; inline `<head>` script adds a `js` class (without JS all panels show stacked) |
| `styles.css` | All styling; design tokens are CSS variables on `:root` |
| `main.js` | Section routing: hash `#about` shows `#panel-about` (ids differ on purpose so the browser never fragment-scrolls) |
| `fonts/` | Self-hosted Geist Sans / Mono / Pixel woff2 (`LICENSE.txt` = OFL) |
| `favicon.svg` | Navy tile with a pixel "D" and green cursor |
| `CV.md` | Source-of-truth CV content (more detailed than the site; curate before publishing) |
| `.github/workflows/deploy.yml` | Deploy to GitHub Pages (no build) |

## Working locally

No build needed. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

(Use a server rather than `file://` so the fonts load correctly.)

## Conventions

- Keep the green as an **accent only**, never a primary background or large fill, and make
  sure it works in **both** themes (it is a token, so it does).
- Minimalism is the point: no new decorative elements without a reason.
- Edit content directly in `index.html`. Keep it in sync with `CV.md`, but the site is
  intentionally a curated subset (e.g. no internal flag names, no unverified figures).
- Respect `prefers-reduced-motion` (already handled in CSS/JS) for any new animation.
- **Writing style (hard rules):** no emojis; never use the em dash (`—`), rephrase with
  commas/parentheses, en dash (`–`) only for numeric/date ranges; do not add a
  "Generated with Claude" / `Co-Authored-By: Claude` trailer to commits or PRs.

## Backlog / TODO

Optional, agreed but not yet done. Pick up when the user provides the inputs:

- [ ] **Project links.** Most projects have no link (only the Online Chess demo does).
  Add links (GitHub repos, thesis PDF, live demos) to the relevant `.project` entries in
  `index.html` for credibility. Needs the actual URLs from Diego. A `.links` span pattern
  already exists on the Online Chess project, reuse it.
- [ ] **Downloadable CV.** Add a "Download CV (PDF)" link (sidebar contact block or footer).
  Needs a generated/exported PDF committed to the repo (e.g. `cv.pdf`) and a link to it.
- [ ] **Photo (optional).** The sidebar already has a hidden `.avatar` slot; add a real
  `src` to the `<img class="avatar">` in `index.html` to reveal it (small, palette-matched).
- [ ] **Skills/stack summary (optional).** Consider a compact stack overview; currently the
  per-item tech tags carry this implicitly.
