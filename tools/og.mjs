// Renders the link-preview (Open Graph) images from tools/og/template.html with headless Chromium.
// Output: assets/og/<name>.jpg – 1200×630 JPEG, quality lowered until it is under 300 KB.
// Usage: cd tools && npm install && node og.mjs [name-filter]
// The template loads only its vendored fonts (tools/og/fonts); all network requests are blocked so a
// missing font fails the run instead of silently falling back to a system face.
// Changed an image? Social sites cache og:image by URL — give it a new file name (or ?v=) and update the
// og:image / twitter:image tags in the pages' <head>.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'assets/og');
const TEMPLATE = pathToFileURL(path.join(import.meta.dirname, 'og/template.html')).href;
const MAX_BYTES = 300 * 1024;

const cards = [
  { name: 'home', page: '01', tagline: '*Decoding* the dimension of *Light*' },
  { name: 'research', page: 'INDEX', title: 'אינדקס המחקר', tagline: 'מקורות, עיונים ושאלות פתוחות' },
];

const filter = process.argv[2];
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.route(url => url.protocol !== 'file:', route => route.abort());
for (const { name, ...data } of cards) {
  if (filter && !name.includes(filter)) continue;
  await page.goto(`${TEMPLATE}#${encodeURIComponent(JSON.stringify(data))}`);
  await page.reload(); // hash-only navigation does not re-run the template script
  const ready = await page.waitForFunction(() => document.body.dataset.ready).then(h => h.jsonValue());
  if (ready !== '1') throw new Error(`${name}: ${ready}`);
  let quality = 90, buf;
  do { buf = await page.screenshot({ type: 'jpeg', quality }); quality -= 4; } while (buf.length > MAX_BYTES && quality > 40);
  fs.writeFileSync(path.join(OUT, `${name}.jpg`), buf);
  console.log(`assets/og/${name}.jpg  ${Math.round(buf.length / 1024)} KB  q${quality + 4}`);
}
await browser.close();
