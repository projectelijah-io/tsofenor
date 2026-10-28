/* findings.jsx — Three Findings cards with bespoke visual previews. */

function YhvhVisual() {
  return (
    <div className="yhvh-row" aria-hidden="true">
      <span className="y-let y-i">י</span>
      <span className="y-tick"></span>
      <span className="y-let y-h">ה</span>
      <span className="y-tick"></span>
      <span className="y-let y-v">ו</span>
      <span className="y-tick"></span>
      <span className="y-let y-h">ה</span>
    </div>
  );
}

function VavScatter() {
  // 177 dots arranged in roughly 9 rows × 20 cols, with subtle horizontal jitter.
  const dots = React.useMemo(() => {
    const rows = 9;
    const cols = 20;          // 9*20 = 180; we'll show first 177
    const w = 100;            // viewBox width %
    const h = 60;
    const out = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (out.length >= 177) break;
        const baseX = (c + 0.5) * (w / cols);
        const baseY = (r + 0.5) * (h / rows);
        // deterministic jitter via simple hash
        const seed = r * 1000 + c;
        const jx = ((Math.sin(seed * 12.9898) + 1) / 2 - 0.5) * (w / cols) * 0.55;
        const jy = ((Math.sin(seed * 78.233) + 1) / 2 - 0.5) * (h / rows) * 0.25;
        out.push({ x: baseX + jx, y: baseY + jy });
      }
    }
    return out;
  }, []);
  return (
    <div className="vav-field" aria-hidden="true">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="0.6" fill="#0F0F0F" />
        ))}
      </svg>
    </div>
  );
}

function ElohimVisual() {
  // אלהים — letters: א ל ה י ם (RTL reading right to left)
  // We wrap ל ה י ם in a hairline accent box; א stays outside (right side in RTL).
  return (
    <div className="elohim" aria-hidden="true">
      <span className="alef">א</span>
      <span className="yhlm-box">להים</span>
    </div>
  );
}

function FindingCard({ eyebrow, latin, title, secTitle, body, visual, caption, cta }) {
  return (
    <article className="fcard">
      {TS_LANG === 'en'
        ? <span className="eyebrow"><span lang="en">{latin}</span> · <span lang="he">{eyebrow}</span></span>
        : <span className="eyebrow">{eyebrow} · <span lang="en">{latin}</span></span>}
      <h3 className="he-title">{title}</h3>
      <p className="en-title" {...dirAttrs()}>{secTitle}</p>
      <p className="body">{body}</p>
      <div className="visual">{visual}</div>
      {caption && <div className="caption" lang={TS_LANG === 'ja' ? 'ja' : 'en'} dir="ltr">{caption}</div>}
      <div className="action">
        <button className="btn-ghost">{cta}</button>
      </div>
    </article>
  );
}

function ThreeFindings() {
  const F = T.findings;
  const visuals = [<YhvhVisual />, <VavScatter />, <ElohimVisual />];
  return (
    <section data-screen-label="Findings">
      <div className="section-pad">
        <div className="section-head-centered">
          <Eyebrow label={F.eyebrow} latin={F.latin} num="03" />
          <h2 className="title">{F.title}</h2>
          <p className="subtitle" {...dirAttrs()}>
            {F.sub}
          </p>
          <div className="rule"></div>
        </div>

        <div className="gap-xl"></div>

        <div className="findings-grid">
          {F.cards.map((c, i) => (
            <FindingCard key={i}
              eyebrow={c.eyebrow}
              latin={c.latin}
              title={c.a}
              secTitle={c.b}
              body={c.body}
              visual={visuals[i]}
              caption={c.caption}
              cta={F.cta}
            />
          ))}
        </div>

        <div className="gap-2xl"></div>

        <div className="center-ghost">
          <button className="btn-ghost bilingual">
            <span className="he">{F.allA}</span>
            <span style={{ color: 'var(--ink-40)' }}>/</span>
            <span className="en" {...langAttrs()}>{F.allB}</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

window.ThreeFindings = ThreeFindings;
