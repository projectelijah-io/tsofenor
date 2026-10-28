/* app.jsx — Compose the homepage top to bottom. */

function Vision() {
  const V = T.vision;
  return (
    <section data-screen-label="Vision">
      <div className="section-pad">
        <div className="vision-grid">
          {/* Companion-language column, 40% (on the LEFT on the Hebrew page) */}
          <div className="vision-col vision-en" {...dirAttrs()}>
            <span className="eyebrow">{V.b.eyebrow}</span>
            <h2 className="vtitle">{V.b.title}</h2>
            {V.b.paras.map((t, i) => <p key={i}>{t}</p>)}
          </div>

          {/* Page-language column, 60% (primary) */}
          <div className="vision-col vision-he">
            <span className="eyebrow">{V.a.eyebrow}</span>
            <h2 className="vtitle">{V.a.title}</h2>
            {V.a.paras.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </div>

        <div className="gap-xl"></div>
        <div className="divider-full"></div>
        <div className="gap-xl"></div>

        {/* Architecture diagram */}
        <div className="arch-diagram">
          {V.arch.map((n, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="arch-arrow"></div>}
              <div className="arch-node">
                <div className="he">{n[0]}</div>
                <div className="en" {...langAttrs()}>{n[1]}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="gap-xl"></div>

        <p className="attribution">
          {V.creditA}
          <span className="en" {...dirAttrs()}>
            {V.creditB}
          </span>
        </p>
      </div>
    </section>
  );
}

function GetInvolved() {
  const G = T.involved;
  return (
    <section data-screen-label="Get Involved">
      <div className="section-pad">
        <div className="involved-wrap">
          <div className="section-head-centered">
            <Eyebrow label={G.eyebrow} latin={G.latin} />
            <h2 className="title" style={{ fontSize: 40 }}>
              {G.title}
            </h2>
            <p className="subtitle" {...dirAttrs()}>
              {G.sub}
            </p>
          </div>
        </div>

        <div className="gap-lg"></div>

        <div className="involved-grid">
          {G.items.map((it, i) => {
            const Btn = it.href ? 'a' : 'button';
            return (
              <div className="involved-item" key={i}>
                <div className="num">{it.num}</div>
                <p className="he">{it.a}</p>
                <p className="en" {...dirAttrs()}>{it.b}</p>
                <Btn className="btn-ghost bilingual" {...(it.href ? { href: it.href } : {})}>
                  <span className="he">{it.btnA}</span>
                  <span style={{ color: 'var(--ink-40)' }}>/</span>
                  <span className="en" {...langAttrs()}>{it.btnB}</span>
                  <span className="arrow">→</span>
                </Btn>
              </div>
            );
          })}
        </div>

        <div className="gap-2xl"></div>
      </div>
    </section>
  );
}

function Mission() {
  const M = T.mission;
  return (
    <section className="mission" data-screen-label="Mission">
      <div className="mission-inner">
        <Eyebrow className="mission-eyebrow" label={M.eyebrow} latin={M.latin} />
        <p className="mission-statement">
          {M.a}
        </p>
        <p className="mission-en" {...dirAttrs()}>
          {M.b}
        </p>
      </div>
    </section>
  );
}

/* Follow the research — lead capture (Netlify form "follow").
   The form is rendered by React, so Netlify cannot see it at deploy time: a hidden
   static copy with the same name and fields sits in each language's index.html for form detection.
   The hidden `lang` field carries the page language (he / en / ja). */
function FollowResearch() {
  const L = T.follow;
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
            <Eyebrow label={L.eyebrow} latin={L.latin} />
            <h2 className="title" style={{ fontSize: 40 }}>{L.title}</h2>
            <p className="subtitle">{L.a}</p>
            <p className="subtitle" {...dirAttrs()}>{L.b}</p>
          </div>
          {state === 'sent' ? (
            <p className="follow-done" role="status">{L.doneA} <span {...dirAttrs()}>{L.doneB}</span></p>
          ) : (
            <form className="follow-form" name="follow" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
              <input type="hidden" name="form-name" value="follow" />
              <input type="hidden" name="lang" value={TS_LANG} />
              <p hidden><label>Leave empty: <input name="bot-field" /></label></p>
              <label className="follow-field"><span>{L.email} <span className="en" {...langAttrs()}>{L.emailB}</span></span>
                <input type="email" name="email" required autoComplete="email" dir="ltr" /></label>
              <label className="follow-field"><span>{L.name} <small>{L.optional}</small></span>
                <input name="name" autoComplete="name" /></label>
              <label className="follow-field"><span>{L.message} <small>{L.optional}</small></span>
                <textarea name="message" rows="3"></textarea></label>
              <label className="follow-consent"><input type="checkbox" name="consent" value="yes" required />
                <span>{L.consent[0]}<a href={T.privacy}>{L.consent[1]}</a>{L.consent[2]}</span></label>
              <button className="btn-solid" type="submit" disabled={state === 'sending'}>{L.submit}</button>
              {state === 'error' && <p className="follow-error" role="status">{L.error} <span dir="ltr">privacy@projectelijah.io</span>{L.errorEnd}</p>}
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
