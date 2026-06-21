# Nelover
Single-page static marketing site for "Nelover — Living Terrariums" (active prototype; repo previously held a React/Vite GitHub Pages app whose deletion is still uncommitted).

## Stack
- Plain HTML/CSS/JS — the entire site is one file, `index.html` (~27 KB: markup + inline `<style>` + inline `<script>`)
- Three.js r134 (cdnjs CDN) — procedural 3D terrarium rendered on full-page `#webgl-canvas`
- GSAP 3.12.2 + ScrollTrigger (cdnjs CDN) — scroll-triggered animations
- Google Fonts: Cormorant Garamond, Cinzel, DM Sans
- No package manager, no build step, no framework

## Structure
- `index.html` — entry point and the whole site (CSS + JS inline)
- `assets/` — 4 PNG hero/about images, 600–710 KB each (~2.6 MB total)
- `patch_html.py`, `patch2.py` — one-off near-duplicate Python scripts that rewrote index.html in place via str.replace; both hardcode the stale path `/media/eyad/app/projects/Nelover/index.html`. Their changes are already applied — do NOT run them
- `README.md` — run instructions

## Commands
- Run dev: `python3 -m http.server 8000` (from repo root, then open http://localhost:8000; serving avoids CORS issues)
- No install step, no build, no tests exist

## Conventions & Gotchas
- Git tree is very dirty: the old React app (package.json, public/, eslint configs, .gitignore, LICENSE, lockfile…) is deleted but NOT committed; HEAD/git log still describe the React app
- No `.gitignore` currently exists (it was deleted with the React app)
- Site needs internet: Three.js/GSAP/fonts load from CDNs with no local fallback
- `body { cursor: none }` with a custom JS cursor; dark-mode-only design tokens in `:root` CSS vars
- Two `<img>` tags were hidden with `style="display:none;"` by the patch scripts but the PNGs still download

## Do NOT read (large/irrelevant; also denied in .claude/settings.json)
- `.git/`
- `assets/*.png` (600–710 KB images; check sizes with a single-level `ls -la` only)
