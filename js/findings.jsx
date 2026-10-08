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

function FindingCard({ eyebrow, heTitle, enTitle, body, visual, caption, ctaHe }) {
  return (
    <article className="fcard">
      <span className="eyebrow">{eyebrow}</span>
      <h3 className="he-title">{heTitle}</h3>
      <p className="en-title" lang="en" dir="ltr">{enTitle}</p>
      <p className="body">{body}</p>
      <div className="visual">{visual}</div>
      {caption && <div className="caption" lang="en" dir="ltr">{caption}</div>}
      <div className="action">
        <button className="btn-ghost">{ctaHe}</button>
      </div>
    </article>
  );
}

function ThreeFindings() {
  return (
    <section data-screen-label="Findings">
      <div className="section-pad">
        <div className="section-head-centered">
          <span className="eyebrow-row">
            <span className="he">ממצאים</span>
            <span className="dot"></span>
            <span>FINDINGS</span>
            <span className="dot"></span>
            <span className="num">03</span>
          </span>
          <h2 className="title">שלושה ממצאים. בלתי תלויים. נמצאו בטקסט המסורתי.</h2>
          <p className="subtitle" lang="en" dir="ltr">
            Three findings. Independently discovered. Embedded in the Masoretic text.
          </p>
          <div className="rule"></div>
        </div>

        <div className="gap-xl"></div>

        <div className="findings-grid">
          <FindingCard
            eyebrow="ממצא ראשון · FINDING ONE"
            heTitle="שם ה' בשלושה צבעים"
            enTitle="YHVH appears spontaneously in three colors"
            body="כאשר אותיות הטקסט מסומנות לפי הערך הגימטרי שלהן בשלושה צבעים — 5, 6, ו-10 — אותיות שם ה' (י-ה-ו-ה) צצות לאורך הטקסט באופן ספונטני, ללא כל התערבות."
            visual={<YhvhVisual />}
            ctaHe="ראה את הממצא ←"
          />
          <FindingCard
            eyebrow="ממצא שני · FINDING TWO"
            heTitle={'קונסטלציית הוא"ו'}
            enTitle="The Vav constellation in Genesis 1"
            body="האות ו מופיעה 177 פעמים בבראשית פרק א, מהווה את עמוד השדרה המבני של סיפור הבריאה. דפוס המופעים שלה יוצר תבנית גיאומטרית הניתנת למיפוי."
            visual={<VavScatter />}
            caption="177 vavs · Genesis 1"
            ctaHe="ראה את הממצא ←"
          />
          <FindingCard
            eyebrow="ממצא שלישי · FINDING THREE"
            heTitle="אלהים מכיל יהלום"
            enTitle="Elohim contains Yahalom (diamond)"
            body="האותיות א-ל-ה-י-ם מכילות בתוכן את האותיות י-ה-ל-ם, המרכיבות את המילה 'יהלום'. הקשר אינו דקדוקי אלא מבני — הוא טמון בתוך השם עצמו."
            visual={<ElohimVisual />}
            caption="the word lives inside the name"
            ctaHe="ראה את הממצא ←"
          />
        </div>

        <div className="gap-2xl"></div>

        <div className="center-ghost">
          <button className="btn-ghost bilingual">
            <span className="he">צפה בכל הממצאים</span>
            <span style={{ color: 'var(--ink-40)' }}>/</span>
            <span className="en">View all findings</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

window.ThreeFindings = ThreeFindings;
