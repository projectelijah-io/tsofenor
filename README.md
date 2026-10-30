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
js/i18n.js            every home-page string, per language (he / en / ja)
```

## Languages

Three language versions, each at its own crawlable URL:

| | Hebrew (default, RTL) | English | Japanese |
| --- | --- | --- | --- |
| Home | `/` → `index.html` | `/en/` → `en/index.html` | `/ja/` → `ja/index.html` |
| Research index | `/research/` | `/en/research/` | `/ja/research/` |
| Privacy | `/privacy/` | `/en/privacy/` | `/ja/privacy/` |

- **`<head>` is static in every HTML file** (title, description, canonical, hreflang
  he/en/ja + x-default → Hebrew, `og:*`, `twitter:*`) — crawlers do not run the JSX.
  Change a page's metadata in that page's own file.
- **Home copy** lives in `js/i18n.js`, one object per language with identical keys.
  The language is taken from the URL path (`/en/…`, `/ja/…`, else Hebrew), never from
  a toggle or storage. Each page pairs its language with a companion, as the Hebrew
  original pairs Hebrew with English: he + en, en + he (the Hebrew original), ja + en.
- **Research copy**: static UI text is in each `*/research/index.html`; runtime strings
  are in `UI` at the top of `research/shelf.js` (shared by all three pages). Entries in
  `data/entries.json` are written in Hebrew; `i18n.en` / `i18n.ja` on an entry hold its
  translated title, text, cluster, kind and tags. Hebrew quotations, the letters under
  study, `sig` and `glyph` stay Hebrew in every language — they are the object of study.
- **Privacy**: three independent files; keep them saying the same thing.
- **Switcher** `עב · EN · 日本語` (`.lang-toggle` in `tokens.css`; `.langs` on the privacy
  pages) links to the same page in each language, current one marked `aria-current`.
- **Japanese**: Noto Serif JP / Noto Sans JP from Google Fonts, linked on `/ja/` pages
  only and slotted behind the Latin faces (`html:lang(ja)` in `pages.css` / `shelf.css`),
  with `line-break: strict` and no tracking on Japanese text. **Every Japanese string is
  a draft awaiting native review.**
- **Form**: the Netlify form `follow` is the same on every page; its hidden `lang` field
  carries `he` / `en` / `ja`. Each language's `index.html` has its own hidden static copy
  for form detection.
- **Share images**: `assets/og/home.jpg` (Hebrew wordmark + English tagline) is used by
  all three home pages; the research page has `research.jpg`, `research-en.jpg`,
  `research-ja.jpg`, rendered by `tools/og.mjs` (Japanese font slices vendored in
  `tools/og/fonts/`, listed in `noto-jp.css`).
- **Project Elijah strip**: the last row of every footer (`.pe-strip-row` > `a.pe-strip`, rules in
  `tokens.css`; the privacy pages carry their own copy in their inline `<style>`): the gold spark and
  "מיזם של פרויקט אליהו · Social Tech Vision Capital" / "A Project Elijah venture · …" /
  "プロジェクト・エリヤのベンチャー · …", one link to the hub https://projectelijah.io in the page's language
  (`/`, `/en/`, `/ja/`). Home: `PeStrip` in `header-footer.jsx`, strings in `footer.strip` in `i18n.js`;
  research and privacy: static markup in each file. It links only to the hub, never to other ventures, with the
  same markup and class names as every venture site. The home pages carry an `Organization` JSON-LD with
  `parentOrganization` Project Elijah.
- **New page?** Add it in all three languages, with hreflang in each, to `sitemap.xml`
  (with `xhtml:link` alternates), and copy the Cloudflare Web Analytics beacon.

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
