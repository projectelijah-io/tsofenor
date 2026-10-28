/* app.jsx — Compose the homepage top to bottom. */

function Vision() {
  return (
    <section data-screen-label="Vision">
      <div className="section-pad">
        <div className="vision-grid">
          {/* English column, 40%, on the LEFT */}
          <div className="vision-col vision-en" lang="en" dir="ltr">
            <span className="eyebrow">VISION · חזון</span>
            <h2 className="vtitle">TsofenOr is not a theory. It is infrastructure.</h2>
            <p>
              These findings are not the journey — they are the starting point.
              TsofenOr builds the tools through which researchers, kabbalists,
              and mathematicians can investigate the Masoretic text at a depth
              previously unreachable.
            </p>
            <p>
              Every finding is verifiable. Every methodology is visible. Every
              line of code is open. The infrastructure is built so that any
              person — religious, secular, researcher, or curious — can reach
              their own conclusions.
            </p>
            <p>We do not ask you to believe. We invite you to check.</p>
          </div>

          {/* Hebrew column, 60%, on the RIGHT (primary) */}
          <div className="vision-col vision-he">
            <span className="eyebrow">חזון · VISION</span>
            <h2 className="vtitle">TsofenOr איננה תיאוריה. היא תשתית.</h2>
            <p>
              הממצאים האלו אינם המסע — הם נקודת ההתחלה. TsofenOr בונה את הכלים
              שבאמצעותם חוקרים, מקובלים ומתמטיקאים יכולים לחקור את הטקסט המסורתי
              לעומק חסר תקדים.
            </p>
            <p>
              כל ממצא ניתן לאימות. כל מתודולוגיה גלויה. כל קוד פתוח. התשתית בנויה
              כך שכל אדם — דתי, חילוני, חוקר או סקרן — יוכל להגיע למסקנות משלו.
            </p>
            <p>אנו לא מבקשים שתאמין. אנו מציעים שתבדוק.</p>
          </div>
        </div>

        <div className="gap-xl"></div>
        <div className="divider-full"></div>
        <div className="gap-xl"></div>

        {/* Architecture diagram */}
        <div className="arch-diagram">
          <div className="arch-node">
            <div className="he">צוות מחקר</div>
            <div className="en">Research Team</div>
          </div>
          <div className="arch-arrow"></div>
          <div className="arch-node">
            <div className="he">מקובלים וחוקרים</div>
            <div className="en">Kabbalists & Scholars</div>
          </div>
          <div className="arch-arrow"></div>
          <div className="arch-node">
            <div className="he">מתמטיקאים</div>
            <div className="en">Mathematicians</div>
          </div>
          <div className="arch-arrow"></div>
          <div className="arch-node">
            <div className="he">ציבור</div>
            <div className="en">Public</div>
          </div>
        </div>

        <div className="gap-xl"></div>

        <p className="attribution">
          שלושת הממצאים הראשונים נחקרו בשיתוף הרב דניאל פוא.
          <span className="en" lang="en" dir="ltr">
            The first three findings were researched in partnership with Rabbi Daniel Pua.
          </span>
        </p>
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section data-screen-label="Get Involved">
      <div className="section-pad">
        <div className="involved-wrap">
          <div className="section-head-centered">
            <span className="eyebrow-row">
              <span className="he">השתתפות</span>
              <span className="dot"></span>
              <span>GET INVOLVED</span>
            </span>
            <h2 className="title" style={{ fontSize: 40 }}>
              אם הממצאים מסקרנים אותך, יש דרכים להעמיק.
            </h2>
            <p className="subtitle" lang="en" dir="ltr">
              If the findings move you, there are ways to go deeper.
            </p>
          </div>
        </div>

        <div className="gap-lg"></div>

        <div className="involved-grid">
          <div className="involved-item">
            <div className="num">01 / READ</div>
            <p className="he">קרא את המתודולוגיה המלאה</p>
            <p className="en" lang="en" dir="ltr">Read the full methodology</p>
            <button className="btn-ghost bilingual">
              <span className="he">פתח את התיעוד</span>
              <span style={{ color: 'var(--ink-40)' }}>/</span>
              <span className="en">Open documentation</span>
              <span className="arrow">→</span>
            </button>
          </div>
          <div className="involved-item">
            <div className="num">02 / EXPLORE</div>
            <p className="he">חקור את הטקסט בעצמך עם הכלים שלנו</p>
            <p className="en" lang="en" dir="ltr">Explore the text yourself with our tools</p>
            <button className="btn-ghost bilingual">
              <span className="he">פתח את הנגן</span>
              <span style={{ color: 'var(--ink-40)' }}>/</span>
              <span className="en">Open the player</span>
              <span className="arrow">→</span>
            </button>
          </div>
          <div className="involved-item">
            <div className="num">03 / CONTRIBUTE</div>
            <p className="he">אם אתה חוקר, מקובל או מתמטיקאי — צור קשר</p>
            <p className="en" lang="en" dir="ltr">
              If you're a researcher, kabbalist, or mathematician — get in touch
            </p>
            <a className="btn-ghost bilingual" href="#follow">
              <span className="he">צור קשר</span>
              <span style={{ color: 'var(--ink-40)' }}>/</span>
              <span className="en">Contact</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="gap-2xl"></div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission" data-screen-label="Mission">
      <div className="mission-inner">
        <span className="mission-eyebrow">
          <span className="he">הצהרת המחקר</span>
          <span className="dot"></span>
          <span>RESEARCH STATEMENT</span>
        </span>
        <p className="mission-statement">
          האותיות העבריות גונזות את הסוד להבנת היקום, דרכן נוצרת המציאות, ואת המתמטיקה מאחורי האותיות אנחנו מחפשים — במחקר ראשון מסוגו בעולם.
        </p>
        <p className="mission-en" lang="en" dir="ltr">
          The Hebrew letters hold the cipher to understanding the universe — through them reality is formed. The mathematics behind the letters is what this research, the first of its kind in the world, sets out to find.
        </p>
      </div>
    </section>
  );
}

/* Follow the research — lead capture (Netlify form "follow").
   The form is rendered by React, so Netlify cannot see it at deploy time: a hidden
   static copy with the same name and fields sits in index.html for form detection. */
function FollowResearch() {
  const [state, setState] = React.useState('idle'); // idle | sending | sent | error
  const onSubmit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    setState('sending');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(f)).toString(),
    }).then((r) => { if (!r.ok) throw new Error(r.status); f.reset(); setState('sent'); })
      .catch(() => setState('error'));
  };
  return (
    <section id="follow" className="follow" data-screen-label="Follow">
      <div className="section-pad">
        <div className="follow-wrap">
          <div className="section-head-centered">
            <span className="eyebrow-row">
              <span className="he">עדכונים</span>
              <span className="dot"></span>
              <span>FOLLOW THE RESEARCH</span>
            </span>
            <h2 className="title" style={{ fontSize: 40 }}>עקבו אחרי המחקר</h2>
            <p className="subtitle">השאירו אימייל ונעדכן אתכם בכל פעם שממצא חדש מתפרסם. חוקרים, מקובלים ומתמטיקאים מוזמנים לכתוב לנו גם הודעה.</p>
            <p className="subtitle" lang="en" dir="ltr">Leave your email and we will write when a new finding is published.</p>
          </div>
          {state === 'sent' ? (
            <p className="follow-done" role="status">תודה! נעדכן אתכם כשממצא חדש יתפרסם. <span lang="en" dir="ltr">Thank you, we will be in touch.</span></p>
          ) : (
            <form className="follow-form" name="follow" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
              <input type="hidden" name="form-name" value="follow" />
              <input type="hidden" name="lang" value="he" />
              <p hidden><label>Leave empty: <input name="bot-field" /></label></p>
              <label className="follow-field"><span>אימייל <span className="en" lang="en">Email</span></span>
                <input type="email" name="email" required autoComplete="email" dir="ltr" /></label>
              <label className="follow-field"><span>שם <small>(לא חובה)</small></span>
                <input name="name" autoComplete="name" /></label>
              <label className="follow-field"><span>הודעה לחוקרים <small>(לא חובה)</small></span>
                <textarea name="message" rows="3"></textarea></label>
              <label className="follow-consent"><input type="checkbox" name="consent" value="yes" required />
                <span>קראתי ואני מסכים/ה ל<a href="/privacy/">מדיניות הפרטיות</a></span></label>
              <button className="btn-solid" type="submit" disabled={state === 'sending'}>הרשמה לעדכונים</button>
              {state === 'error' && <p className="follow-error" role="status">השליחה לא הצליחה. נסו שוב בעוד רגע, או כתבו אל <span dir="ltr">privacy@projectelijah.io</span>.</p>}
            </form>
          )}
        </div>
        <div className="gap-2xl"></div>
      </div>
    </section>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Mission />
        <div className="gap-3xl"></div>
        <ThreeFindings />
        <div className="gap-3xl"></div>
        <Vision />
        <div className="gap-3xl"></div>
        <GetInvolved />
        <FollowResearch />
      </main>
      <Footer />
    </React.Fragment>
  );
}

window.App = App;
