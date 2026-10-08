/* hero-field.jsx — Atmospheric Genesis 1:1-1:5 field with pulse animation. */

// Genesis 1:1 - 1:5, repeated to fill the field.
// Source text (vowelless Masoretic, just consonants for visual density):
const GENESIS_BASE = `בראשית ברא אלהים את השמים ואת הארץ והארץ היתה תהו ובהו וחשך על פני תהום ורוח אלהים מרחפת על פני המים ויאמר אלהים יהי אור ויהי אור וירא אלהים את האור כי טוב ויבדל אלהים בין האור ובין החשך ויקרא אלהים לאור יום ולחשך קרא לילה ויהי ערב ויהי בקר יום אחד `;

function buildFieldText(repeats) {
  let out = "";
  for (let i = 0; i < repeats; i++) out += GENESIS_BASE;
  return out;
}

function HeroField() {
  const fieldRef = React.useRef(null);
  const [letters, setLetters] = React.useState([]);

  // Build a long stream and split to letter spans.
  React.useEffect(() => {
    const text = buildFieldText(60); // plenty to fill 1080+ viewports
    const chars = [];
    for (let i = 0; i < text.length; i++) {
      chars.push(text[i]);
    }
    setLetters(chars);
  }, []);

  // Pulse driver — every 3s, pick 5 random letter cells, animate them.
  React.useEffect(() => {
    if (!fieldRef.current) return;
    const root = fieldRef.current;

    const fire = () => {
      // Find all visible letter spans (skip whitespace).
      const cells = root.querySelectorAll('span.l');
      if (!cells.length) return;
      const total = cells.length;
      // pick 5 cells separated enough to feel non-clustered
      const picks = new Set();
      let guard = 0;
      while (picks.size < 5 && guard < 200) {
        const idx = Math.floor(Math.random() * total);
        // require min separation of ~200 cells from already-picked
        let ok = true;
        for (const p of picks) {
          if (Math.abs(p - idx) < 180) { ok = false; break; }
        }
        if (ok) picks.add(idx);
        guard++;
      }
      // ensure picks are within visible viewport rough range — clamp by visibility
      const targets = [];
      picks.forEach(i => {
        const el = cells[i];
        if (!el) return;
        const r = el.getBoundingClientRect();
        const pr = root.getBoundingClientRect();
        if (r.top > pr.top + 20 && r.bottom < pr.bottom - 20 &&
            r.left > pr.left + 20 && r.right < pr.right - 20) {
          targets.push(el);
        }
      });
      // if too few visible, just fire on whatever picks we got
      const finalSet = targets.length >= 3 ? targets : Array.from(picks).map(i => cells[i]).filter(Boolean);

      finalSet.forEach(el => {
        el.classList.remove('pulse');
        // force reflow so animation restarts cleanly
        // eslint-disable-next-line no-unused-expressions
        void el.offsetWidth;
        el.classList.add('pulse');
        // clean up after animation ends
        setTimeout(() => { el && el.classList.remove('pulse'); }, 1200);
      });
    };

    // first pulse after a short delay so it doesn't fire on load instantly
    const initial = setTimeout(fire, 1400);
    const interval = setInterval(fire, 3000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, [letters.length]);

  return (
    <div className="hero-field" ref={fieldRef} aria-hidden="true">
      {letters.map((ch, i) => {
        if (ch === ' ') return <span key={i}>{'\u00A0'}</span>;
        return <span key={i} className="l">{ch}</span>;
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-atmos" data-screen-label="Hero">
      <div className="hero-corner">
        <span className="he">צופן אור</span>
        <span className="dot"></span>
        <span>TSOFENOR · 01</span>
      </div>
      <HeroField />
      <div className="hero-halo" aria-hidden="true"></div>
      <div className="hero-center">
        <h1 className="headline">צופן אור</h1>
        <p className="subtitle" lang="en" dir="ltr">
          Revealing the mathematical structures hidden in the Masoretic text
        </p>
        <div className="cta-wrap">
          <button className="hero-cta" type="button">
            <span className="he">התחל לחקור</span>
            <span className="sep" aria-hidden="true"></span>
            <span className="en">Begin exploring</span>
          </button>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
