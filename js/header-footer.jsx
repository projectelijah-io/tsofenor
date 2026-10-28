/* header-footer.jsx — Site header (sticky) + design-system footer.
   Strings come from js/i18n.js (window.T); the page language is set by the URL path. */

/* Attributes for text in the page's companion language (T.sec), or in `l`.
   langAttrs: lang only — for short labels, so their alignment keeps following the page.
   dirAttrs: lang + dir — for sentences (the original page marked these dir="ltr"). */
function langAttrs(l) {
  return { lang: l || T.sec };
}
function dirAttrs(l) {
  const code = l || T.sec;
  return { lang: code, dir: tsDir(code) };
}

/* Centered eyebrow: the label in the page language (or the Hebrew original on /en/)
   paired with the Latin small-caps label. On /en/ the Latin label leads. */
function Eyebrow({ className, label, latin, num }) {
  const loc = <span className="he" {...(TS_LANG === 'en' ? langAttrs('he') : {})}>{label}</span>;
  const lat = <span lang="en">{latin}</span>;
  const first = TS_LANG === 'en' ? lat : loc;
  const second = TS_LANG === 'en' ? loc : lat;
  return (
    <span className={className || 'eyebrow-row'}>
      {first}
      <span className="dot"></span>
      {second}
      {num && <span className="dot"></span>}
      {num && <span className="num">{num}</span>}
    </span>
  );
}

/* Language switcher: real links to the same page in each language. */
function LangToggle() {
  return (
    <nav className="lang-toggle" aria-label={T.langLabel}>
      {TS_LANGS.map(l => (
        <a key={l.code} href={l.path} hrefLang={l.code} lang={l.code} title={l.name}
           className={l.code === TS_LANG ? 'is-active' : ''}
           aria-current={l.code === TS_LANG ? 'page' : undefined}>{l.label}</a>
      ))}
    </nav>
  );
}

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={'header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="header-inner">
        <a className="mark" href="#">
          <span className="mark-he" lang="he">צופן אור</span>
          <span className="mark-en" lang="en">TSOFENOR</span>
        </a>
        <div className="nav-right">
          <nav className="nav-items" aria-label="Primary">
            {T.nav.map(it => (
              <a key={it.id}
                 className={'nav-item' + (it.active ? ' is-active' : '')}
                 href={'#' + it.id}>
                <span className="ni-he">{it.a}</span>
                <span className="ni-en" {...langAttrs()}>{it.b}</span>
              </a>
            ))}
          </nav>
          <LangToggle />
          <button className="nav-mobile" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* A paragraph whose language may differ from the page's: aligned to its own reading side. */
function FooterProse({ lang, children }) {
  if (lang === TS_LANG) return <p className="footer-prose">{children}</p>;
  const dir = tsDir(lang);
  return (
    <p className="footer-prose" lang={lang} dir={dir} style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
      {children}
    </p>
  );
}

function Footer() {
  const F = T.footer;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-col">
            <h4>{F.cols[0][0]}</h4>
            <div className="col-sub" {...langAttrs()}>{F.cols[0][1]}</div>
            <ul className="footer-links">
              <li><a href="#findings">{F.links[0]}</a></li>
              <li><a href="#explore">{F.links[1]}</a></li>
              <li><a href="#about">{F.links[2]}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{F.cols[1][0]}</h4>
            <div className="col-sub" {...langAttrs()}>{F.cols[1][1]}</div>
            {F.project.map((p, i) => <FooterProse key={i} lang={p.lang}>{p.t}</FooterProse>)}
          </div>
          <div className="footer-col">
            <h4>{F.cols[2][0]}</h4>
            <div className="col-sub" {...langAttrs()}>{F.cols[2][1]}</div>
            {F.open.map((p, i) => <FooterProse key={i} lang={p.lang}>{p.t}</FooterProse>)}
            <p style={{ margin: '0 0 10px' }}><a className="btn-ghost" style={{ fontSize: 13 }}>{F.repo}</a></p>
            <p style={{ margin: 0 }}><a className="btn-ghost" style={{ fontSize: 13 }}>{F.docs}</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="fb-cell">© 2026 TsofenOr · צופן אור · <a href={T.privacy}>{F.privacy}</a></div>
          <div className="fb-cell center">{F.initiative}</div>
          <div className="fb-cell right">v1.0 · MASORETIC TEXT</div>
        </div>
      </div>
    </footer>
  );
}

window.langAttrs = langAttrs;
window.dirAttrs = dirAttrs;
window.Eyebrow = Eyebrow;
window.Header = Header;
window.Footer = Footer;
