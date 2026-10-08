# TsofenOr — site source

Unpacked from the 1.79 MB single-file bundle that was deployed.
Same code, same design. Readable, versionable, editable file by file.

## What is here

```
index.html            shell + font links + script tags
assets/tokens.css     colors, type scale, spacing — the design system
assets/pages.css      hero, findings, vision, footer — page styles
js/hero-field.jsx     Genesis 1:1-1:5 field, pulse animation
js/header-footer.jsx  sticky header, HE/EN toggle, footer
js/findings.jsx       the three findings cards
js/app.jsx            homepage composition (hero, findings, vision, CTA)
```

Total source: ~68 KB. The old bundle was 1.79 MB — 96% of it was
React, Babel and embedded font files, none of it yours.

## Before deploying — one change that matters

`index.html` currently loads `@babel/standalone` so the browser can
compile JSX at runtime. That is a prototyping convenience and costs
about 3 MB of download plus compile time on every page view.

Precompile instead:

```
npx babel js --presets @babel/preset-react --out-dir js-compiled
```

Then point the script tags at `js-compiled/*.js` and remove the
babel `<script>`. Nothing else changes.

## The bigger fix, when there is time

`<div id="root"></div>` ships empty: all content renders client-side.
Search engines and social previews see a blank page, and the source
is not readable to a visitor who inspects it — which sits badly with
the open-source commitment. Pre-rendering the markup, or moving the
static sections to plain HTML, solves both.

## Fonts

Loaded from Google Fonts via `<link>` in `index.html`.
The bundle embedded 17 woff2 files as GUID-named assets; those are
gone. If offline/self-hosted fonts are wanted later, drop the woff2
files into `assets/fonts/` and restore the `@font-face` rules.

## License

MIT, per the repository.
